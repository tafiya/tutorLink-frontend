export const getStudentBookings = async (email: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/payment/my-bookings/${email}`,
            {
                next: {
                    tags: ["BOOKINGS"],
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