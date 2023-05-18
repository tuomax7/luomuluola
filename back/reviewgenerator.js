let reviews = [];

const getRestaurants = async () => {
  const restaurants = await axios.get(
    "https://www.luomuravintola.fi/apps/kitchenmap.groovy?querystr="
  );
  restaurants.data.kitchens.map((restaurant) => {
    reviews = reviews.concat({
      id: reviews.length + 1,
      kitchen: restaurant.kitchen,
      content: randomContent(),
      rating: randomRating(),
      upvotes: randomUpvotes(),
    });
    console.log("reviews for: ", restaurant);

    reviews = reviews.concat({
      id: reviews.length + 1,
      kitchen: restaurant.kitchen,
      content: randomContent(),
      rating: randomRating(),
      upvotes: randomUpvotes(),
    });

    reviews = reviews.concat({
      id: reviews.length + 1,
      kitchen: restaurant.kitchen,
      content: randomContent(),
      rating: randomRating(),
      upvotes: randomUpvotes(),
    });
  });

  const data = JSON.stringify(reviews);

  // writing the JSON string content to a file
  fs.writeFile("reviews.json", data, (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
      // logging the error
      console.error(error);

      throw error;
    }

    console.log("reviews.json written correctly");
  });
};

const randomContent = () => {
  const restaurantReviews = [
    "The food was amazing, and the service was exceptional!",
    "I had a wonderful dining experience. The atmosphere was cozy, and the staff was attentive.",
    "Unfortunately, the quality of the food was not up to par. The flavors were lacking.",
    "The presentation of the dishes was impressive, and the taste matched the aesthetics.",
    "I highly recommend this place. The menu offers a diverse range of options, and everything I tried was delicious.",
    "The staff was friendly and accommodating. They made sure we had a great time.",
    "Some dishes were outstanding, while others were average. It was a mixed experience.",
    "The ingredients used were fresh and of high quality. Each bite was a delight.",
    "The chef's creativity shines through in every dish. I was pleasantly surprised by the unique flavors.",
    "Unfortunately, the service was slow and inattentive. It affected the overall dining experience.",
    "The portions were generous, and the prices were reasonable. Great value for money!",
    "The ambience was elegant and sophisticated. It set the perfect mood for a memorable evening.",
    "The food was flavorful and well-seasoned. Every dish was a burst of culinary delight.",
    "The waitstaff was knowledgeable about the menu and provided excellent recommendations.",
    "Some dishes exceeded my expectations, while others fell short. It was a hit-or-miss experience.",
    "The restaurant has a cozy and inviting atmosphere. It felt like dining at a friend's home.",
    "The attention to detail in the plating was impressive. The dishes were a feast for the eyes.",
    "The menu offers a wide range of vegetarian and vegan options. It's a paradise for plant-based eaters.",
    "The service was prompt and efficient. The staff was attentive to every need.",
    "Unfortunately, the dessert options were limited. It was the only downside of the dining experience.",
  ];

  return restaurantReviews[
    Math.floor(Math.random() * restaurantReviews.length)
  ];
};

const randomRating = () => {
  let rand = Math.random() * 6;

  rand = Math.floor(rand);
  return rand;
};

const randomUpvotes = (min = -5, max = 5) => {
  let difference = max - min;

  let rand = Math.random();

  rand = Math.floor(rand * difference);

  rand = rand + min;

  return rand;
};

//getRestaurants();
