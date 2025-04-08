/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@/context/UserContext';
import { sendTutorRequest } from '@/services/SendTutorRequest';
import { IUser } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CardContent } from '@/components/ui/card';
import {
  BookOpenText,
  CheckCircle,
  Clock3,
  GraduationCap,
  Mail,
  MapPinHouse,
  MessageCircle,
  PhoneCall,
  UserRound,
  UserSearch,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { getReviews, postReview } from '@/services/review/reviewService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
export interface IReview {
  tutorId: string;
  rating: number;
  reviewText: string;
}

const ProfileSection = ({ tutor }: { tutor: IUser | null }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
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

  //  submit review section
  const handleReviewSubmit = async () => {
    if (!user?.user?.email) {
      toast.error('User Information is not available.');
      router.push('/login');
      return;
    }
    if (!reviewText.trim()) {
      toast.error('Review cannot be empty!');
      return;
    }

    const response = await postReview(tutor?._id, rating, reviewText);
    if (response.success) {
      toast.success('Review submitted successfully!');
      setIsDialogOpen(false);
      setReviewText('');
      fetchReviews();
    } else {
      toast.error(response.message);
    }
  };
  //  send request section
  const handleRequest = async () => {
    try {
      if (!user?.user?.email) {
        toast.error('User Information is not available.');
        router.push('/login');
        return;
      }

      setRequestStatus('pending');

      const response = await sendTutorRequest(tutor?._id, user.user.email);

      if (response.success) {
        toast.success(response.message);
        setRequestStatus('sent');
      } else {
        toast.error(response.message);
        setRequestStatus(null);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to send request. Please try again.');
      setRequestStatus(null);
    }
  };

  return (
    <div>
      <div className="  p-4 border shadow-lg rounded-lg  justify-center items-center text-white gap-12">
        <div className="w-full mx-auto max-w-sm bg- text-white rounded-xl shadow-lg">
          <CardContent className="flex flex-col items-center ">
            <div className="relative w-48 h-48">
              {/* Circular Profile Image */}
              <img
                src={tutor?.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />

              {/* Verified Badge */}
              <div className="absolute bottom-1 right-7 translate-x-1/4 translate-y-1/4 bg-green-600 p-1 rounded-full shadow-md">
                <CheckCircle className="text-white w-8 h-8" />
              </div>
            </div>

            <h2 className="text-2xl mb-1 font-bold mt-3"> {tutor?.name} </h2>
          </CardContent>
        </div>
        <div>
          <div className="text-end flex justify-end items-center gap-3">
            <Button
              onClick={handleRequest}
              disabled={requestStatus === 'pending'}
            >
              {requestStatus === 'pending'
                ? 'Request Pending...'
                : 'Send Request'}
            </Button>
            <Button onClick={() => setIsDialogOpen(true)}>
              <MessageCircle />
              Send Review
            </Button>
            {/* <Button> More </Button> */}
          </div>
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-blue-400 text-gray-100">
              <TabsTrigger value="about" className="text-gray-100 flex gap-2">
                <UserRound /> About
              </TabsTrigger>
              <TabsTrigger value="Subjects" className="text-gray-100">
                Subjects
              </TabsTrigger>
              <TabsTrigger value="available" className="text-gray-100">
              Available
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <div className="my-6">
                <h2 className="text-xl font-semibold flex gap-3">
                  <UserRound />
                  About
                </h2>

                <p className=" text-gray-400 py-2">{tutor?.bio}</p>
              </div>
              <div className="my-6 flex gap-12 ">
                <div>
                  <h2 className="text-xl font-semibold flex gap-3">
                    <GraduationCap />
                    Education
                  </h2>
                  <ul className="list-disc marker:text-green-600 px-6 marker:text-2xl">
                    <li>
                      Master`s in Mathematics, university of
                      Dhaka.(2020-2022){' '}
                    </li>
                    <li>
                      B.Sc in Mathematics, university of Dhaka.(2020-2022)
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold flex gap-3">
                  <Clock3 />
                    Experience
                  </h2>
                  <ul className="list-disc marker:text-green-600 px-6 marker:text-2xl">
                    <li>5+ years of tutoring experience </li>
                    <li>Worked with 50+ students</li>
                  </ul>
                </div>
              </div>
              <hr className=" text-blue-600" />
              <div className="my-6">
                <h2 className="text-xl font-semibold flex gap-3">
                <UserSearch />
                  Contact
                </h2>
                <h2 className="text-sm mb-1 flex gap-2 font-bold mt-1"><PhoneCall /> {tutor?.phone} </h2>
                <h2 className="text-sm mb-1 flex gap-2 font-bold mt-1"><Mail /> {tutor?.email} </h2>
                <p className=" text-gray-400 py-2 flex gap-2"><MapPinHouse />{tutor.address}</p>
              </div>
            </TabsContent>
            <TabsContent value="Subjects">
            <div className="mt-6">
            <h2 className="text-xl font-semibold flex gap-3">
            <BookOpenText />
                    Subjects that I am able to Teach
                  </h2>
                <h2 className="text-lg mb-2 font-semibold">
                  Expected Minimum Salary : <span>{tutor?.price}</span> Tk/Month
                </h2>
            
                <h2 className="text-base mb-2 font-semibold">
                  {tutor.subjects}
                </h2>
                <h2 className="text-sm mb-2 font-semibold">
                  Rating : {tutor.averageRating}
                </h2>
              </div>
            </TabsContent>
            <TabsContent value="available"></TabsContent>
          </Tabs>
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
      {/* review dialog */}
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
  );
};

export default ProfileSection;
