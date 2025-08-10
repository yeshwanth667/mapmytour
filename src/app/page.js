"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TourCard from "./components/TourCard";
import { fetchTours } from "./redux/slices/toursSlice";
import Loader from "./components/Loader";

export default function HomePage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.tours);

  // Filters state
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [durationFilter, setDurationFilter] = useState("");
  const [discountFilter, setDiscountFilter] = useState(0);
  const [filteredTours, setFilteredTours] = useState([]);
  const [showFilters, setShowFilters] = useState(false);


  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  // Apply filters whenever items or filters change
  useEffect(() => {
    let result = [...items];

    // Price filter
    result = result.filter((tour) => {
      const price = parseInt(tour.discountedPrice.replace("$", ""));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Duration filter
    if (durationFilter) {
      result = result.filter((tour) => {
        const days = parseInt(tour.duration);
        if (durationFilter === "<7") return days < 7;
        if (durationFilter === "7-14") return days >= 7 && days <= 14;
        if (durationFilter === ">14") return days > 14;
        return true;
      });
    }

    // Discount filter
    if (discountFilter > 0) {
      result = result.filter(
        (tour) => parseInt(tour.discountInPercentage) >= discountFilter
      );
    }

    setFilteredTours(result);
  }, [items, priceRange, durationFilter, discountFilter]);

  const resetFilters = () => {
    setPriceRange([0, 2000]);
    setDurationFilter("");
    setDiscountFilter(0);
  };

  if (loading) {
    return <Loader/>
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filters */}
      {/* <div className="bg-white p-4 rounded-lg shadow md:col-span-1 space-y-6 h-fit"> */}
      <div
        className={`bg-white p-4 rounded-lg shadow space-y-6 h-fit md:block ${showFilters ? "block" : "hidden"
      }`}
      >
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Price Range */}
        <div>
          <label className="font-semibold">Price Range</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([0, parseInt(e.target.value)])
            }
            className="w-full"
          />
          <p className="text-sm text-gray-500">
            Up to ${priceRange[1]}
          </p>
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold">Duration</label>
          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">All</option>
            <option value="<7">Less than 7 Days</option>
            <option value="7-14">7 to 14 Days</option>
            <option value=">14">More than 14 Days</option>
          </select>
        </div>

        {/* Discount */}
        <div>
          <label className="font-semibold">Minimum Discount</label>
          <select
            value={discountFilter}
            onChange={(e) => setDiscountFilter(parseInt(e.target.value))}
            className="w-full border p-2 rounded mt-1"
          >
            <option value={0}>All</option>
            <option value={10}>10% or more</option>
            <option value={15}>15% or more</option>
            <option value={20}>20% or more</option>
          </select>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mt-4"
        >
          Reset Filters
        </button>
      </div>

      {/* Mobile toggle button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Tours Grid */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No tours match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
