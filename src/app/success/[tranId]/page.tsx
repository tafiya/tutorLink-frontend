"use client";
import SuccessCard from "@/components/payment/SuccessCard";
import { useParams } from "next/navigation";

const PaymentSuccess = () => {
  const {tranId}  = useParams();

  return (
    <div className="w-full mx-auto max-w-7xl">
      {tranId ? (
        <SuccessCard tranId={tranId} />
      ) : (
        <p className="text-center text-red-500">Transaction ID not found!</p>
      )}
    </div>
  );
};

export default PaymentSuccess;