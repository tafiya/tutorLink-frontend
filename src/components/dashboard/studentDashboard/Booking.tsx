"use client"
import { useEffect, useState } from 'react';

const BookingPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [booking, setBooking] = useState<any>(null);

    useEffect(() => {
        // Fetch booking details based on session or URL params
        const fetchBookingDetails = async () => {
            const response = await fetch('/api/booking');
            const data = await response.json();
            setBooking(data);
        };

        fetchBookingDetails();
    }, []);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
            {booking ? (
                <div>
                    <p><strong>Tutor:</strong> {booking.tutor.name}</p>
                    <p><strong>Selected Date:</strong> {new Date(booking.selectedDate).toLocaleDateString()}</p>
                    <p><strong>Price:</strong> ${booking.price}</p>
                    <p><strong>Payment Status:</strong> {booking.isPayment ? 'Completed' : 'Pending'}</p>
                    {/* Display payment history if needed */}
                </div>
            ) : (
                <p>Loading booking details...</p>
            )}
        </div>
    );
};

export default BookingPage;
