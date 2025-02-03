import React from "react";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

const App = () => {
  return (
    <div>
      <ItemContainer cake />
      <ItemContainer IceCream />
      <HooksCakeContainer />
      <CakeContainer />
      ###########
      <IceCreamContainer />
      <HooksIceCreamContainer />
      <NewCakeContainer />
    </div>
  );
};

export default App;
