import React, { useState } from "react";
import CardPage from "./components/CardPage";

const App = () => {
  const [cardArray, setCardArray] = useState([
    { publisher: "", text: "", media: "", date: "" }
  ]);

  return (
    <div className="App">
      <CardPage cardArray={cardArray} setCardArray={setCardArray} />
    </div>
  );
};

export default App;
