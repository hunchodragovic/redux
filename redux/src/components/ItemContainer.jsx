import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/CakeAction";
import { buyIceCream } from "../redux/iceCream/iceCreamAction"; // Removed duplicate import

const ItemContainer = (props) => {
  return (
    <div>
      <h1>Item - {props.item}</h1>
      <button onClick={props.buyItem}>Buy items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // Depending on the prop passed, select either cake or ice cream
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.IceCream.numberOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // Based on the ownProps, decide which action creator to use
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : ownProps.IceCream
    ? () => dispatch(buyIceCream())
    : null;

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
