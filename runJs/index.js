console.log('Thank you for using WebStorm 💙');

const cartList = [
  {
    count: 3,

    price: 7,
  },
  {
    count: 2,
    price: 5,
  },
  {
    count: 3,
    price: 2,
  },
  {
    count: 4,
    price: 3,
  },
];

const totalPrice = cartList.reduce((acc, curr) => {
  return acc + curr.price * curr.count;
}, 0);

console.log(totalPrice);

const numList = [1, 2, 3, 4, 5];
const totalSum = numList.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalSum);
