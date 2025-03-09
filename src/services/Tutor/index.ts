"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// Fetch all tutors
export const getAllTutors = async (

) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/tutors`,
      {
        next: {
          tags: ["TUTORS"],
        },
      }
    );
    const data = await res.json();
    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return Error(error.message);
  }
};

// Fetch a single tutor by ID
export const getSingleTutor = async (tutorId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/tutors/${tutorId}`,
      {
        next: {
          tags: ["TUTOR"],
        },
      }
    );
    const data = await res.json();
    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return Error(error.message);
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateTutor = async (tutorId: string, tutorData: FormData): Promise<any> => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/tutors/${tutorId}`, {
          method: "PATCH",
          body: tutorData,
          headers: {
            Authorization: (await cookies()).get("accessToken")!.value,
          },
        });
    
        revalidateTag("TUTOR");
        return res.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return Error(error.message);
      }
    };