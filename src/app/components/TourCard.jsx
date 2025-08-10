"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TourCard({ tour }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const isInWishlist = wishlist.some((item) => item.id === tour.id);

  const toggleWishlist = () => {
    let updatedWishlist;
    if (isInWishlist) {
      updatedWishlist = wishlist.filter((item) => item.id !== tour.id);
    } else {
      updatedWishlist = [...wishlist, tour];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {tour.discountInPercentage} OFF
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {tour.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {tour.description}
        </p>

        {/* Duration */}
        <p className="text-gray-500 text-xs mt-2">⏱ {tour.duration}</p>

        {/* Price */}
        <div className="flex items-center mt-3 space-x-2">
          <span className="text-gray-400 line-through text-sm">
            {tour.actualPrice}
          </span>
          <span className="text-green-600 font-bold">
            {tour.discountedPrice}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-auto pt-4 flex justify-between items-center">
          <Link
            href={`/tour/${tour.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </Link>
          <button
            onClick={toggleWishlist}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              isInWishlist
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isInWishlist ? "Remove" : "Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
