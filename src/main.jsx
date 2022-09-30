import React from "react";
import ReactDOM from "react-dom/client";
import Ecommerce from "./Ecommerce";
import "./Ecommerce.css"


let products = [
   {
    name : "product1",
    image: "./mcar1.jpg",
    price :372,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  },
   {
    name : "product2",
    image: "./mcar2.jpg",
    price :275,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  },
   {
    name : "product3",
    image: "./mcar3.jpg",
    price :145,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  },
   {
    name : "product4",
    image: "./scar1.jpeg",
    price :261,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  },
  {
    name : "product5",
    image: "./scar3.jpg",
    price :461,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  },
  {
    name : "product6",
    image: "./slcar1.jpg",
    price :431,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  },
  {
    name : "product7",
    image: "./slcar2.jpg",
    price :211,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  },
   {
    name : "product8",
    image: "./slcar3.png",
    price :141,
    Carname: "muscleCar1",
    cardec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim mollitia id molestiae sint libero assumenda at cum non, nulla harum praesentium? Aut ab quisquam aspernatur illo obcaecati quaerat aliquam!",
  }
];
const theme ={
  background: "black" ,
  color: "white"
}

ReactDOM.createRoot(document.getElementById("root")).render(
<Ecommerce products= {products}/>
);
