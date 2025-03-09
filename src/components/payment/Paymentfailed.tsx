import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { House } from "lucide-react";
const PaymentFailed = () => {
  return (
    <div className="py-10">
      <div className="mx-auto py-12 p-8 max-w-md bg-red-100 border border-red-500 rounded-md text-center">
        <div className="text-2xl text-red-700 font-semibold mb-4">
          Payment Failed
        </div>
        <div className="mb-6">
          <Image
            src="https://i.ibb.co.com/cKhfpnmz/remove.png"
            alt="Failure Icon"
            width={500}
            height={200}
            className="w-16 h-16 mx-auto mb-2"
          />
        </div>
        <div className="text-lg text-gray-800 mb-4">
          Oops! Something went wrong with your payment. Please try again later.
        </div>
        <Link href="/">
          <Button className=" mt-7 text-blue-600 hover:bg-blue-600 hover:text-white bg-white"> <House /> Home </Button>
        </Link>
        <div className="w-full mt-4 flex justify-center">
          <Image
            src="https://res.cloudinary.com/demnpqwx3/image/upload/v1741507615/TutorLink_ffs63d.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;