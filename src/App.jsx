import React from "react";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./Approutes";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
