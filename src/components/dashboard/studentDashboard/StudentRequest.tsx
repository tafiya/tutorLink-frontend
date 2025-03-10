/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import {  IUser } from "@/types";
// import toast from "react-hot-toast";
import { getStudentRequests } from "@/services/RequestStudent";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import PaymentModal from "./PaymentModal";
import { Badge } from "@/components/ui/badge";


const StudentRequest = () => {
  const { user } = useUser();
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  useEffect(() => {
      if (!user?.email) return;
      
      const fetchRequests = async () => {
          setLoading(true);
          const data = await getStudentRequests(user.email);
      
          if (data?.status !== false) {
              setRequests(data.data);
          }
          setLoading(false);
      };

      fetchRequests();
  }, [user?.email]);
  const handlePayNow = (request: any) => {
    setSelectedRequest(request);
    setShowModal(true);
};
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">My Requests</h2>
            {loading ? (
                <Skeleton className="h-12 w-full" />
            ) : requests.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-lg">#</TableHead>
                            <TableHead className="text-lg">Profile</TableHead>
                            <TableHead className="text-lg">Tutor Name</TableHead>
                            <TableHead className="text-lg">Address</TableHead>
                            <TableHead className="text-lg">Subjects</TableHead>
                            <TableHead className="text-lg">Availability</TableHead>
                            <TableHead className="text-lg">Accepted</TableHead>
                            <TableHead className="text-lg">Payment</TableHead>
                            <TableHead className="text-lg">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {requests.map((request, index) => (
                            <TableRow key={request._id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <Image src={request.tutorId.profilePicture} alt={request.tutorId.name} width={40} height={40} className="rounded-full" />
                                </TableCell>
                                <TableCell className=" text-base" >{request.tutorId.name}</TableCell>
                                <TableCell className=" text-base">{request.tutorId.address}</TableCell>
                                <TableCell className=" text-base">{request.tutorId.subjects}</TableCell>
                                <TableCell className=" text-base">
                                    {new Date(request.tutorId.availability.from).toLocaleDateString()} - {new Date(request.tutorId.availability.to).toLocaleDateString()}
                                </TableCell>
                                <TableCell className=" text-base">{request.isAccept ? <Badge variant="outline" className=" text-green-800 border-green-800 px-4 text-base">Yes</Badge>:<Badge variant="outline" className=" px-4 text-red-600 border-red-600 text-base">No</Badge>}</TableCell>
                                <TableCell className=" text-base">{request.isPayment ?  <Badge className=" bg-green-800 text-base">Completed</Badge> : <Badge className=" bg-[#F29339] text-base">Pending</Badge>}</TableCell>
                                <TableCell className=" text-base">
                                {request.isPayment ? <Button disabled className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-green-700 text-base">
                                        Paid
                                    </Button> : <Button disabled={!request.isAccept} className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-blue-100 disabled:text-blue-500 text-base" onClick={() => handlePayNow(request)}>
                                        Pay Now
                                    </Button>}
                
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p className="text-gray-500">No requests found.</p>
            )}
            {showModal && <PaymentModal request={selectedRequest} onClose={() => setShowModal(false)} />}
        </div>
  );
};

export default StudentRequest;