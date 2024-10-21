import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let data = useCart();
  const priceRef = useRef();
  const [qty, setQty] = useState(1); // Default value for qty
  const [size, setSize] = useState("");
  
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id){
        food = item;
        break;
      }
    }
    if (food!== []){
      if (food.size === size) {
      await dispatch({type:"UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty})
      return
    }
    else if(food.size !==size){

      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size
      });
      return
    }
    return
  }
  await dispatch({
    type: "ADD",
    id: props.foodItem._id,
    name: props.foodItem.name,
    price: finalPrice,
    qty: qty,
    size: size
  });
    // console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card m-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">Its a food card</p>
          <div className="container w-100">
            {/* Quantity Select */}
            <select
              className="m-2 h-100 bg-success"
              onChange={(e) => setQty(parseInt(e.target.value))} // Parse value to an integer
              value={qty}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            {/* Size Select */}
            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
              value={size}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            {/* Final Price */}
            <div className="d-inline h-100 fs-5">
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>

          {/* Add to Cart Button */}
          <button
            className={"btn btn-success justify-center ms-2"}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
