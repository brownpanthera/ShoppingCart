import React, { createContext } from "react";
import { faker } from "@faker-js/faker";

function Context({ children }) {
  const Cart = createContext();

  //Generating numbers from an array because in new version of faker "random" is depricated.
  function randomArr(nums) {
    const randomIndex = Math.floor(Math.random() * nums.length);
    const randomNumber = nums[randomIndex];
    return randomNumber;
  }

  const products = [...Array(20)].map((prod) => ({
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0 }),
    image: faker.image.url(),
    inStock: randomArr([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: randomArr([1, 2, 3, 4, 5]),
  }));

  console.log(products);
  return <Cart.Provider>{children}</Cart.Provider>;
}

export default Context;
