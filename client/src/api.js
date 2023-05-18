import axios from "axios";
const URL = "https://www.luomuravintola.fi/apps/kitchenmap.groovy?querystr=";

export const getRestaurantsBySearchQuery = async (searchQuery) => {
  const restaurants = await axios.get(`${URL}${searchQuery}`);
  return restaurants.data.kitchens;
};

export const restaurantByUrl = async (url) => {
  const restaurants = await getRestaurantsBySearchQuery("");
  return restaurants.find((restaurant) => restaurant.cleanurl === url);
};

const getReviews = async () => {
  const reviews = await axios.get("http://localhost:3001/reviews");
  return reviews.data;
};

export const reviewsByRestaurant = async (kitchen) => {
  const reviews = await getReviews();
  return reviews.filter((review) => review.kitchen === kitchen);
};

export const ratingByRestaurant = async (kitchen) => {
  const reviews = await reviewsByRestaurant(kitchen);

  const ratingAverage = () =>
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return reviews.length === 0 ? 0 : Number(ratingAverage().toFixed(2));
};
