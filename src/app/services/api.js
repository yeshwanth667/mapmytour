import tourDetails from '../mock/details'

// Get list (only summary info for listing)
export const getTours = () =>
  Promise.resolve({
    data: {
      data: tourDetails.map((tour) => ({
        id: tour.id,
        image: tour.bannerImage,
        discountInPercentage: tour.discountInPercentage,
        title: tour.title,
        description: tour.description,
        duration: tour.duration,
        actualPrice: tour.actualPrice,
        discountedPrice: tour.discountedPrice
      }))
    }
  });

// Get details by ID
export const getTourDetails = (id) => {
  const tour = tourDetails.find((t) => t.id === parseInt(id));
  return Promise.resolve({ data: { data: tour } });
};
