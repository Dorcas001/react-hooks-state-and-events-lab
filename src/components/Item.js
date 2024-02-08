import { useState } from "react";
import React from "react";

function Item({ name, category }) {
  
  const [incart, setCart] = useState(false);

  function AddToCart(){
   setCart((incart)  =>!incart)
  }


  return (

    <li className={incart? "in-cart":""}>
      <span>{name}</span>

      <span className="category">{category}</span>
      <button className="add" onClick={AddToCart}>{incart ? "Remove from cart" : "Add to Cart"}</button>

    </li>
    )}
  
  


export default Item;
