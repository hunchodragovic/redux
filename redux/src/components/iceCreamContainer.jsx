import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";
const IceCreamContainer = (props) => {
  return (
    <div>
      <h1>Number of IceCreams - {props.numberOfIceCreams}</h1>{" "}
      {/* Fix: Display cakes */}
      <button onClick={props.buyIceCream}>Buy IceCream</button>{" "}
      {/* Fix: Call action */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numberOfIceCreams: state.IceCream.numberOfIceCreams };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
