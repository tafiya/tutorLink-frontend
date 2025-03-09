"use client";
import { useUser } from "@/context/UserContext";
import { IUser } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface IRequest {
  _id: string;
  tutorId: string;
  userEmail: string;
  isAccept: boolean;
  __v: number;
}

const StudentRequestForm = ({ tutors }: { tutors: IUser[] }) => {
  const { user } = useUser();
  const matchedTutor = tutors?.find((tutor) => tutor.email === user?.email);
  const tutorId = matchedTutor?._id;

  const [requests, setRequests] = useState<IRequest[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null);
  const [errorShown, setErrorShown] = useState(false); // Track if error has been shown

  useEffect(() => {
    if (!user) {
      toast.error("You need to log in to view the requests.");
    }
  }, [user]);

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
          `${process.env.NEXT_PUBLIC_BASE_API}/requests/get-requests/${tutorId}`
        );
        const data = await response.json();

        if (data.status) {
          setRequests(data.data); // Set the requests in state
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
  }, [tutorId, errorShown]); // Dependency array includes tutorId

  const handleAcceptRequest = async (requestId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/requests/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isAccept: true }), // Set isAccept to true
        }
      );
      const data = await response.json();

      if (response.ok) {
        // Update the requests state after accepting the request
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId ? { ...request, isAccept: true } : request
          )
        );
        toast.success(data.message || "Request accepted!");
      } else {
        toast.error(data.message || "Failed to accept the request.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error while accepting the request.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center">Request Form</h1>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display error if any */}
      {requests.length > 0 ? (
        <div className="space-y-4 mt-4">
          {requests.map((request) => (
            <div
              key={request._id}
              className="p-4 border rounded-lg shadow-md bg-gray-50 flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{request.userEmail}</h3>
                <p className="text-gray-600">Request message</p>
              </div>
              {request.isAccept ? (
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-not-allowed">
                  Accepted
                </button>
              ) : (
                <button
                  onClick={() => handleAcceptRequest(request._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Accept
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No requests found.</p>
      )}
    </div>
  );
};

export default StudentRequestForm;
