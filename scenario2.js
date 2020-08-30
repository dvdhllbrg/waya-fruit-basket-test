// Define the various fruit stands with random prices for peach, cherry, and pear baskets.
const fruitStands = [
  { cherriesPrice: 43, peachesPrice: 80, pearsPrice: 96 },
  { cherriesPrice: 77, peachesPrice: 22, pearsPrice: 22 },
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
  price: Number.MAX_SAFE_INTEGER,
  fruits: ''
};

// For each fruit stand:
fruitStands.forEach((stand, index) => {
  let price, fruits;

  // We know they will always buy a pear basket, so we just need to check whether cherries or peaches are cheaper.
  if(stand.cherriesPrice < stand.peachesPrice) {
    price = stand.cherriesPrice + stand.pearsPrice;
    fruits = 'cherries and pears';
  } else {
    price = stand.peachesPrice + stand.pearsPrice;
    fruits = 'peaches and pears';
  }

  // If what they bought here is cheaper than at the current cheapest stand, mark this stand down as the cheapest one, and mark what they bought.
  if(price < cheapest.price) {
    cheapest.index = index;
    cheapest.price = price;
    cheapest.fruits = fruits;
  }
});

// Print out the result (add one to the index because humans usually prefer 1-based indexing).
console.log(`Pelle and Kajsa bought ${cheapest.fruits} at stand number ${cheapest.index + 1} for the price of ${cheapest.price} SEK.`);