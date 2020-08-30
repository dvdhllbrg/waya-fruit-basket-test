// Define the various fruit stands with random prices for peach baskets and cherry baskets.
const fruitStands = [
  { cherriesPrice: 27, peachesPrice: 24 },
  { cherriesPrice: 73, peachesPrice: 4 }, 
  { cherriesPrice: 66, peachesPrice: 97 },
  { cherriesPrice: 39, peachesPrice: 30 },
  { cherriesPrice: 75, peachesPrice: 94 },
  { cherriesPrice: 7, peachesPrice: 14 }, 
  { cherriesPrice: 83, peachesPrice: 15 },
  { cherriesPrice: 98, peachesPrice: 11 },
  { cherriesPrice: 57, peachesPrice: 43 },
  { cherriesPrice: 86, peachesPrice: 71 }
];

// The initial cheapest stand doesn't exist, and the total price at it is INFINITE.
let cheapest = {
  index: -1,
  price: Number.POSITIVE_INFINITY
};

// For each fruit stand, check if the total price will be cheaper than the current cheapest stand. If so, mark the current stand as the cheapest one.
fruitStands.forEach((stand, index) => {
  let price = stand.cherriesPrice + stand.peachesPrice;
  if(price < cheapest.price) {
      cheapest = {index, price}
  }
});

// Print out the result (add one to the index because humans usually prefer 1-based indexing).
console.log(`Pelle and Kajsa bought fruit baskets at stand number ${cheapest.index + 1}.`);