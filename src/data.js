import img1 from "./images/hoddies.jpg";
import img2 from "./images/hoddies2.jpg";
import img3 from "./images/tshirt.jpg";
import img4 from "./images/sneaker.jpeg";
function createData(name, img, price,quantity) {
  const totalPrice = price * quantity
  return { name, img, price,quantity,totalPrice};
}

export const rows = [
  createData("Black hoodies", img1, 19.89, 0),
  createData("white hoodies", img2, 69.99, 0),
  createData("Tshirt", img3, 19.99, 0),
  createData("Sneaker", img4, 36.98, 0),
];