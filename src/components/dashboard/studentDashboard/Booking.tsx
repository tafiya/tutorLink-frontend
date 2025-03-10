/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/context/UserContext";
import { getStudentBookings } from "@/services/bookings";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const BookingPage = () => {
  const { user } = useUser();
  const [booking, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchRequests = async () => {
      setLoading(true);
      const data = await getStudentBookings(user.email);

      if (data?.status !== false) {
        setBookings(data.data);
      }
      setLoading(false);
    };

    fetchRequests();
  }, [user?.email]);

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

export default BookingPage;
