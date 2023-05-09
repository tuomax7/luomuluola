export const restaurants = [
  { id: 1, name: "rafla" },
  { id: 2, name: "raflakaks" },
];

const reviews = [
  { id: 1, restaurantId: 1, content: "Jees mesta", rating: 3, upvotes: 1 },
  { id: 2, restaurantId: 1, content: "Huippupaikka!", rating: 5, upvotes: 4 },
];

export const restaurantById = (id) =>
  restaurants.find((restaurant) => restaurant.id === id);

export const reviewsByRestaurant = (id) =>
  reviews.filter((review) => review.restaurantId === id);

export const ratingByRestaurant = (id) =>
  reviewsByRestaurant(id).length === 0
    ? 0
    : reviewsByRestaurant(id).reduce((sum, review) => sum + review.rating, 0) /
      reviewsByRestaurant(id).length;
