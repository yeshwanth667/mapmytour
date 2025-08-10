import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "@/redux/slices/toursSlice";
import TourCard from "@/components/TourCard";
import Loader from "../components/Loader";

export default function Home() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.tours);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  if (loading) return <Loader/>
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tour Packages</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
