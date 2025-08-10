"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getTourDetails } from "@/app/services/api";
import Loader from "@/app/components/Loader";

export default function TourDetailsPage() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: ""
  });

  useEffect(() => {
    if (id) {
      getTourDetails(id)
        .then((res) => {
          setTour(res.data.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.travelDate) {
      alert("Please fill out all fields.");
      return;
    }

    const booking = {
      ...formData,
      tourId: tour.id,
      tourTitle: tour.title
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    alert("Booking saved!");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", travelDate: "" });
  };

  if (loading) return <Loader/>
  if (!tour) return <p className="text-center text-red-500 mt-10">Tour not found.</p>;

  const today = new Date().toISOString().split("T")[0];


  return (
    <div className="container max-w-4xl mx-auto py-8 space-y-6">
      {/* Banner */}
      <img
        src={tour.bannerImage}
        alt={tour.title}
        className="w-full h-64 object-cover rounded-lg shadow"
      />

      {/* Title + Price */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">{tour.title}</h1>
        <p className="text-gray-600 mt-2">{tour.description}</p>
        <div className="mt-4 flex items-center space-x-4">
          <span className="line-through text-gray-400">{tour.actualPrice}</span>
          <span className="text-green-600 font-bold text-lg">
            {tour.discountedPrice}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex border-b">
          {["overview", "itinerary", "inclusions", "exclusions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 font-medium capitalize border-b-2 transition ${activeTab === tab
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-600 hover:text-blue-500"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Group Size: {tour.overView.Groupsize}</li>
                <li>Difficulty: {tour.overView.difficulty}</li>
                <li>Start Date: {tour.overView.startDate}</li>
                <li>End Date: {tour.overView.endDate}</li>
                <li>Start Location: {tour.overView.startLocation}</li>
                <li>End Location: {tour.overView.endlocation}</li>
                <li>Country: {tour.overView.country}</li>
                <li>Region: {tour.overView.region}</li>
              </ul>
            </div>
          )}

          {activeTab === "itinerary" && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Itinerary</h2>
              {tour.itinery.map((day) => (
                <div key={day.day} className="mb-4 p-4 border rounded-lg bg-gray-50">
                  <h3 className="font-bold">
                    Day {day.day}: {day.title}{" "}
                    <span className="text-sm text-gray-500">({day.type})</span>
                  </h3>
                  <ul className="list-disc ml-6 text-gray-600 mt-1 space-y-1">
                    {day.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "inclusions" && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Inclusions</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {tour.inclution.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "exclusions" && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Exclusions</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {tour.exclution.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-4" aria-label="Tabs">
          {["Overview", "Itinerary", "Inclusion", "Exclusion"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-t-md ${activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div> */}


      {/* Book Now Button */}
      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Semi-transparent background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            style={{ pointerEvents: "auto" }} // allow closing on click
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal box */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-10">
            <h2 className="text-xl font-bold mb-4">Book Your Tour</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="date"
                name="travelDate"
                min={new Date().toISOString().split("T")[0]}
                value={formData.travelDate}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
