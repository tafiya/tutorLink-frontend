"use client";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SuccessCardProps {
  tranId: string | string[];
}
const SuccessCard = ({ tranId }: SuccessCardProps) => {
  console.log(tranId, "payment id");
  return (
    <div className="py-10">
      <div className="mx-auto py-10 p-8 max-w-md bg-blue-50 border border-blue-600 rounded-md text-center">
        <div className="text-2xl text-blue-600 font-semibold mb-4">
          Payment Successful!
        </div>
        <div className="mb-6">
          <Image
            src="https://i.ibb.co.com/vCZKYLj5/checked.png"
            alt="Success Icon"
            width={500}
            height={200}
            className="w-16 h-16 mx-auto mb-2"
          />
        </div>
        <div className="text-lg text-gray-800 mb-4">
          Thank you for choosing our service! Your payment has been successfully
          processed.
        </div>
        <h1 className="text-blue-600 font-medium ">
          Transaction Id: 1{tranId}
        </h1>
        
        <Link href="/">
          <Button className=" mt-7 text-blue-600 hover:bg-blue-600 hover:text-white bg-white"> <House /> Home </Button>
        </Link>
        <div className="w-full mt-4 flex justify-center">
          <Image
            src="https://res.cloudinary.com/demnpqwx3/image/upload/v1741507615/TutorLink_ffs63d.png"
            width={200}
            height={300}
            alt="logo"
            className="bg-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;