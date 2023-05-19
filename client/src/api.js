import axios from "axios";
const URL = "https://www.luomuravintola.fi/apps/kitchenmap.groovy?querystr=";

export const getRestaurantsBySearchQuery = async (searchQuery) => {
  const restaurants = await axios.get(`${URL}${searchQuery}`);
  const reviews = await getReviews();

  const restaurantsReviewed = restaurants.data.kitchens.map((restaurant) => {
    const reviewsForThis = reviews.filter(
      (review) => review.kitchen === restaurant.kitchen
    );
    const ratingForThis = rating(reviewsForThis);

    return { ...restaurant, reviews: reviewsForThis, rating: ratingForThis };
  });

  return restaurantsReviewed;
};

export const restaurantByUrl = async (url) => {
  const restaurants = await getRestaurantsBySearchQuery("");
  return restaurants.find((restaurant) => restaurant.cleanurl === url);
};

const getReviews = async () => {
  const reviews = await axios.get("https://luomuluola.onrender.com/reviews");
  return reviews.data;
};

export const rating = (reviews) => {
  const ratingAverage = () =>
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return reviews.length === 0 ? 0 : Number(ratingAverage().toFixed(2));
};
