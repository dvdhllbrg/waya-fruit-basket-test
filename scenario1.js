// Define the various fruit stands with random prices for peach, cherry, and pear baskets.
const fruitStands = [
  { cherriesPrice: 43, peachesPrice: 80, pearsPrice: 96 },
  { cherriesPrice: 77, peachesPrice: 0, pearsPrice: 22 },
  { cherriesPrice: 18, peachesPrice: 85, pearsPrice: 41 },
  { cherriesPrice: 7, peachesPrice: 67, pearsPrice: 20 },
  { cherriesPrice: 44, peachesPrice: 30, pearsPrice: 52 },
  { cherriesPrice: 7, peachesPrice: 4, pearsPrice: 96 },
  { cherriesPrice: 56, peachesPrice: 91, pearsPrice: 34 },
  { cherriesPrice: 29, peachesPrice: 54, pearsPrice: 1 },
  { cherriesPrice: 82, peachesPrice: 13, pearsPrice: 11 },
  { cherriesPrice: 42, peachesPrice: 15, pearsPrice: 45 }
];

// The initial cheapest stand doesn't exist, and the total price at it is INFINITE.
let cheapest = {
  index: -1,
  price: Number.MAX_SAFE_INTEGER
};

// For each fruit stand ...
fruitStands.forEach((stand, index) => {
  // ... check what's the cheapest combination of one pear basket and one other basket, and ...
  let price = Math.min(
    stand.pearsPrice + stand.peachesPrice,
    stand.pearsPrice + stand.cherriesPrice
  );

  // ... if that price is cheaper than the current cheapest stand, mark this stand down as the cheapest one.
  if(price < cheapest.price) {
    cheapest = {index, price}
  }
});

// Print out the result (add one to the index because humans usually prefer 1-based indexing).
console.log(`Pelle and Kajsa bought at stand number ${cheapest.index + 1} for the price of ${cheapest.price} SEK.`);