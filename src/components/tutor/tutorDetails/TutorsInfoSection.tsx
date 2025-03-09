/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { sendTutorRequest } from "@/services/SendTutorRequest";
import { IUser } from "@/types";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

// import { ITutors } from "@/types";
import { MessageCircle } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";


const ProfileSection = ({ tutor }: { tutor: IUser | null }) => {
  const user = useUser();
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  if (!tutor) {
    return <p>Loading tutor data...</p>;
  }
  const handleRequest = async () => {
    try {
      if (!user?.user?.email) {
        toast.error("User email is not available.");
        return;
      }
  
      setRequestStatus("pending");
  
      const response = await sendTutorRequest(tutor?._id, user.user.email);
  
      if (response.success) {
        toast.success(response.message);
        setRequestStatus("sent");
      } else {
        toast.error(response.message);
        setRequestStatus(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send request. Please try again.");
      setRequestStatus(null);
    }
  };

  return (
    <div className=" mx-auto p-4 bg-[#eff6ff] shadow-lg rounded-lg flex gap-12">
         <Card className="w-full max-w-sm bg-[#eff6ff] text rounded-xl shadow-lg">
        <CardContent className="flex flex-col items-center p-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white">
            <img src={tutor?.profilePicture} alt="Profile" />
            <span className="absolute bottom-0 right-0 bg-white p-1 rounded-full">
              <CheckCircle className="text-green-500 w-5 h-5" />
            </span>
          </div>

          <h2 className="text-2xl mb-1 font-bold mt-3"> {tutor?.name} </h2>
          <h2 className="text-sm mb-1 font-bold mt-1"> {tutor?.email} </h2>
          <p className="text-sm opacity-90">Location:{tutor.address} </p>

          <div className="mt-4 w-full">
            <h1 className="font-medium">Qualification: BSC</h1>
            <div className="flex font-medium items-center gap-2">
              <span>Payment verified</span>{" "}
              <CheckCircle className="text-green-800 mt-2 w-5 h-5" />
            </div>
          </div>
        </CardContent>
      </Card>
        <div>
        <div className="text-end flex justify-end items-center gap-3">
        <Button onClick={handleRequest} disabled={requestStatus === "pending"}>
          {requestStatus === "pending" ? "Request Pending..." : "Send Request"}
        </Button>
        <Button>
          <MessageCircle />
        </Button>
        <Button> More </Button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">About</h2>

        <p>
          I am going on a trip with my best friend this time, Célia. She is a
          Parisian recently and I am in Bordeaux in the south west of France.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Overview</h2>
        <div className="mt-2">
          <p></p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg mb-2 font-semibold">
          Expected Minimum Salary : <span>{tutor?.price}</span> Tk/Month
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Current Status for Tuition :
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Days Per Week : 4 Day/Week, 5 Day/Week
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Tuitoring Experience :2 years
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Extra Facilities : {tutor.phone}
        </h2>
        <h2 className="text-lg mb-2 font-semibold">
          Preferred Medium of Instruction : {tutor.subjects}
        </h2>
        <h2 className="text-lg mb-2 font-semibold">Rating : {tutor.averageRating}</h2>
      </div>
        </div>

    </div>
  );
};

export default ProfileSection;