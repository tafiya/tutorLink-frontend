/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { sendTutorRequest } from "@/services/SendTutorRequest";
import { IUser } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getReviews, postReview } from "@/services/review/reviewService";
export interface IReview {
  tutorId: string;
  rating: number;
  reviewText: string;
}

const ProfileSection = ({ tutor }: { tutor: IUser | null }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const user = useUser();
  const router = useRouter();
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  const fetchReviews = async () => {
    if (!tutor?._id) return; // Prevents calling API with undefined ID

    const response = await getReviews(tutor._id);
    
    if (response.success) {
      setReviews(response.data);
    }
  };

  useEffect(() => {
 
    fetchReviews();
  }, [tutor?._id]);

  if (!tutor) {
    return <p>Loading tutor data...</p>;
  }
  const handleReviewSubmit = async () => {
    if (!reviewText.trim()) {
      toast.error("Review cannot be empty!");
      return;
    }

    const response = await postReview(tutor?._id, rating, reviewText);
    if (response.success) {
      toast.success("Review submitted successfully!");
      setIsDialogOpen(false);
      setReviewText("");
      fetchReviews();
    } else {
      toast.error(response.message);
    }
  };
  const handleRequest = async () => {
    try {
      if (!user?.user?.email) {
        toast.error("User Information is not available.");
        router.push("/login");
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
    <div>
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
            <Button
              onClick={handleRequest}
              disabled={requestStatus === "pending"}
            >
              {requestStatus === "pending"
                ? "Request Pending..."
                : "Send Request"}
            </Button>
            <Button onClick={() => setIsDialogOpen(true)}>
              <MessageCircle />
              Send Review
            </Button>
            {/* <Button> More </Button> */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Write a Review</DialogTitle>
                </DialogHeader>
                <Input
                  type="number"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  placeholder="Rating (1-5)"
                  className="mb-3"
                />
                <Textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write your review here..."
                  className="mb-3"
                />
                <DialogFooter>
                  <Button onClick={handleReviewSubmit}>Submit Review</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">About</h2>

            <p>
              I am going on a trip with my best friend this time, Célia. She is
              a Parisian recently and I am in Bordeaux in the south west of
              France.
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
            <h2 className="text-lg mb-2 font-semibold">
              Rating : {tutor.averageRating}
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Reviews</h2>
        {reviews?.length > 0 ? (
          reviews.map((review: IReview, index) => (
            <div key={index} className="border p-3 rounded mt-2">
              <p className="text-Base">{review.reviewText}</p>
              <p className="text-sm">Rating: {review.rating}/5</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
