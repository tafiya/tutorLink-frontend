/* eslint-disable @typescript-eslint/no-explicit-any */
// get all products

export const getAllUser = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/users`,
        {
          next: {
            tags: ["USER"], // Next.js caching tag
          },
        }
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      console.log("Fetched Users:", data);
      return data;
    } catch (error: any) {
      console.error("Error fetching users:", error.message);
      return { success: false, message: error.message };
    }
  };
  
  
  export const updateUser = async (userData: any, userId: string): Promise<any> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
  
      if (!res.ok) {
        throw new Error(`Failed to update user: ${res.statusText}`);
      }
  
      // Read the response body as JSON
      const responseData = await res.json(); // This reads the body of the response
  
      return responseData;
    } catch (error: any) {
      return Promise.reject(error.message || "Something went wrong");
    }
  };
  
  
  
  export const getStudentRequest = async (userId: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/users/${userId}`,
        {
          next: {
            tags: ["USER"],
          },
        }
      );
      const data = await res.json();
      return data; // Return the response data
    } catch (error: any) {
      return { status: false, message: error.message }; // Return error message if failed
    }
  };
  