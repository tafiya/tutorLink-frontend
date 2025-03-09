import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaymentModal = ({ request, onClose }: any) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [price, setPrice] = useState<number>(request.tutorId.price);
    const [isDateValid, setIsDateValid] = useState<boolean>(true);

    // Convert tutor availability into an array of available dates
    const getAvailableDates = () => {
        const availableDates: Date[] = [];
        const from = new Date(request.tutorId.availability.from);
        const to = new Date(request.tutorId.availability.to);

        while (from <= to) {
            availableDates.push(new Date(from)); // Add each date to the available dates array
            from.setDate(from.getDate() + 1); // Move to the next day
        }

        return availableDates;
    };

    // Set available dates for the calendar
    const availableDates = getAvailableDates();

    // Check if the selected date is valid (within the tutor's availability)
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (date) {
            const isValid = availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString());
            setIsDateValid(isValid);
        }
    };

    const handlePayment = async () => {
        if (!isDateValid) {
            alert("Selected date is outside of tutor's availability.");
            return;
        }
        console.log("hi from paymet",selectedDate)

        // Proceed with the payment (similar to previous logic)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                requestId: request._id,
                selectedDate: selectedDate,
                amount: price,
            }),
        });
        console.log("got the ",response)
        const data = await response.json();

        if (data?.paymentUrl) {
            window.location.href = data.paymentUrl; // Redirect to payment gateway
        }
    };

    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Select Date & Pay</h3>
                <div className="my-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
                    <DatePicker
                        id="date"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        minDate={new Date(request.tutorId.availability.from)} // Set minimum date to availability start
                        maxDate={new Date(request.tutorId.availability.to)}   // Set maximum date to availability end
                        highlightDates={availableDates}  // Highlight the available dates
                        filterDate={(date) => availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())}  // Disable dates outside availability
                        className="mt-1 block w-full border-blue-600 border rounded-md p-2"
                        dateFormat="yyyy-MM-dd"  // Format the date to 'yyyy-MM-dd'
                    />
                    {!isDateValid && (
                        <p className="text-red-500 text-sm">Selected  is not available.</p>
                    )}
                </div>
                <p className="text-sm font-medium">Price: ${price}</p>
                <div className="mt-4 flex justify-between">
                    <Button className="bg-gray-400" onClick={onClose}>Cancel</Button>
                    <Button className="bg-blue-500 text-white" onClick={handlePayment}>Proceed to Payment</Button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
