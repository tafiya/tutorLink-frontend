export const sendTutorRequest = async (tutorId: string, userEmail: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requests/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tutorId,
          userEmail,
        }),
      });
  
      const data = await response.json();
  
      return { success: true, message: data.message || "Request sent successfully!" };
    } catch (error) {
      console.error("Error sending request:", error);
      return { success: false}
    }
  };
  export const getAllRequests = async (

  ) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/requests`,
        {
          next: {
            tags: ["REQUESTS"],
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
  export const updateRequest = async (requestId: string, updateData: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requests/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData), // The update data, like status, comments, etc.
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, message: data.message || "Request updated successfully!" };
      } else {
        return { success: false, message: data.message || "Failed to update request." };
      }
    } catch (error) {
      console.error("Error updating request:", error);
      return { success: false, message: "An error occurred while updating the request." };
    }
  };
  