"use client";

import { useEffect, useState } from "react";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [undoData, setUndoData] = useState(null);
  const [undoTimer, setUndoTimer] = useState(null);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancel = (index) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    const bookingToCancel = bookings[index];
    const updatedBookings = bookings.filter((_, i) => i !== index);

    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Store undo data
    setUndoData({ booking: bookingToCancel, index });

    // Start 5-second timer for undo
    const timer = setTimeout(() => {
      setUndoData(null);
    }, 5000);
    setUndoTimer(timer);
  };

  const handleUndo = () => {
    if (undoData) {
      const updatedBookings = [
        ...bookings.slice(0, undoData.index),
        undoData.booking,
        ...bookings.slice(undoData.index)
      ];
      setBookings(updatedBookings);
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));

      // Clear undo state
      setUndoData(null);
      if (undoTimer) clearTimeout(undoTimer);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{booking.tourTitle}</h2>
              <p className="text-sm text-gray-500">Booking ID: {index + 1}</p>
              <div className="mt-2 text-gray-700">
                <p>
                  <strong>Name:</strong> {booking.name}
                </p>
                <p>
                  <strong>Email:</strong> {booking.email}
                </p>
                <p>
                  <strong>Phone:</strong> {booking.phone}
                </p>
                <p>
                  <strong>Travel Date:</strong> {booking.travelDate}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleCancel(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Undo Snackbar */}
      {undoData && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4">
          <span>Booking canceled</span>
          <button
            onClick={handleUndo}
            className="underline text-blue-400 hover:text-blue-300"
          >
            Undo
          </button>
        </div>
      )}
    </div>
  );
}
