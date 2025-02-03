import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
const HooksIceCreamContainer = () => {
  const numberOfIceCreams = useSelector(
    (state) => state.IceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams - {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
