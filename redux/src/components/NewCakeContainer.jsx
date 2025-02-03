import React, { useState } from "react";
import { buyCake } from "../redux/cake/CakeAction";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);

  // Fix the input change to update the number correctly
  const handleChange = (e) => {
    // Ensure the input is a number
    setNumber(e.target.value ? parseInt(e.target.value) : 1);
  };

  return (
    <div>
      <h1>Number of cakes - {props.numberOfCakes}</h1>
      <input
        style={{ width: "200px", height: "40px" }}
        type="number" // Use type="number" for numeric input
        value={number}
        onChange={handleChange} // Handle change correctly
      />
      <button onClick={() => props.buyCake(number)}>
        Buy {number} Cake(s)
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numberOfCakes: state.cake.numberOfCakes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
