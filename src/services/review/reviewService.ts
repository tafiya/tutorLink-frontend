// import axios from "axios";

// export const postReview = async (tutorId: string, rating: number, reviewText: string) => {
//   try {
//     const response = await axios.post("/api/reviews", { tutorId, rating, reviewText }, { withCredentials: true });
//     return response.data;
//   } catch (error) {
//     console.error("Error posting review", error);
//     return { success: false, message: "Error posting review" };
//   }
// };
export const postReview = async (tutorId: string,name:string, rating: number, reviewText: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tutorId,name,
          rating,reviewText
        }),
      });
  
      const data = await response.json();
  
      return { success: true, message: data.message || "Review sent successfully!" };
    } catch (error) {
      console.error("Error sending Review: ", error);
      return { success: false}
    }
  };

export const getReviews = async (tutorId: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/reviews/${tutorId}`,
            {
                next: {
                    tags: ["REVIEWS"],
                },
            }
        );
        const data = await res.json();
        return data; // Return the response data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return { status: false, message: error.message }; // Return error message if failed
    }
};