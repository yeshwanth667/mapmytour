"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TourCard from "../components/TourCard";

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    const removeFromWishlist = (id) => {
        const updated = wishlist.filter((item) => item.id !== id);
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    return (
        <div className="container max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

            {wishlist.length === 0 ? (
                <p className="text-gray-600">No tours in wishlist.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {wishlist.map((tour) => (
                        <div
                            key={tour.id}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                        >
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-40 object-cover rounded"
                            />
                            <h2 className="text-xl font-bold mt-2">{tour.title}</h2>
                            <p className="text-gray-600 text-sm">{tour.description}</p>
                            <div className="mt-3 flex justify-between items-center">
                                <Link
                                    href={`/tour/${tour.id}`}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    View Details
                                </Link>
                                <button
                                    onClick={() => removeFromWishlist(tour.id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
