"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUser } from "@/context/UserContext";
import { IUser } from "@/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
const MyAllBookings = ({ tutors }: { tutors: IUser[] }) => {
  const { user } = useUser();
  const matchedTutor = tutors?.find((tutor) => tutor.email === user?.email);
  const tutorId = matchedTutor?._id;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [booking, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null);
  const [errorShown, setErrorShown] = useState(false);
  useEffect(() => {
    if (!tutorId) {
      if (!errorShown) {
        toast.error("Tutor ID not available.");
        setErrorShown(true); // Mark error as shown
      }
      setLoading(false);
      return;
    }

    const fetchRequests = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/payment//bookings/${tutorId}`
        );
        const data = await response.json();

        if (data.status) {
          setBookings(data.data); // Set the requests in state
        } else {
          setError(data.message); // Set error message
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch requests.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchRequests();
  }, [tutorId, errorShown]);
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
      {loading ? (
        <Skeleton className="h-12 w-full" />
      ) : booking.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg">#</TableHead>
              <TableHead className="text-lg">User Email</TableHead>
              <TableHead className="text-lg">Tutor Id</TableHead>
              <TableHead className="text-lg">Request Id</TableHead>
              <TableHead className="text-lg">Total Amount</TableHead>
              <TableHead className="text-lg">Transaction Id</TableHead>
              <TableHead className="text-lg">Payment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {booking.map((request, index) => (
              <TableRow key={request._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className=" text-base">
                  {request.userEmail}
                </TableCell>
                <TableCell className=" text-base">{request.tutorId}</TableCell>
                <TableCell className=" text-base">
                  {request.requestId}
                </TableCell>
                <TableCell className=" text-base">
                  {request.totalAmount}
                </TableCell>
                <TableCell className=" text-base">
                  {request.transaction}
                </TableCell>
                <TableCell className=" text-base">
                  {request.paidStatus ? (
                    <Badge className=" bg-green-800 text-base">Paid</Badge>
                  ) : (
                    <Badge className=" bg-[#F29339] text-base">Pending</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-gray-500">No requests found.</p>
      )}
    </div>
  );
};

export default MyAllBookings;
