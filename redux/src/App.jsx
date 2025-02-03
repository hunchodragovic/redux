import React from "react";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";

const App = () => {
  return (
    <div>
      <HooksCakeContainer />
      <CakeContainer />
      ###########
      <IceCreamContainer />
      <HooksIceCreamContainer />
    </div>
  );
};

export default App;
