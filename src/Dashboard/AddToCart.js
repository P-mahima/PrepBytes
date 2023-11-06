import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../ReDux/CartSlice";


const AddToCart = ({ item }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleCart = (item) => {
    if (token) {
      dispatch(add(item));
    } else {
      window.alert("Please login first");
    }
  };
  return (
    <div>
      <div className="MockTestCard__bottom">
        <button className="bottom--button" onClick={()=> handleCart(item)}>Test Now</button>
      </div>
    </div>
  );
};

export default AddToCart;