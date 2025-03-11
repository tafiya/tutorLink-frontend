import LoginFrom from "@/components/auth/LoginFrom";
import { Suspense } from "react";

const page = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Suspense fallback={<>loading...</>}>
        <LoginFrom></LoginFrom>
      </Suspense>
    </div>
  );
};

export default page;
