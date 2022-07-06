import { useState } from "react";
import "./App.css";
import CreditCard from "./Components/CreditCard";

function App() {
  const [cardNum, setCardNum] = useState("");
  return (
    <div className="App">
      <CreditCard length={4} maxLength={4} setCardNum={setCardNum}></CreditCard>
      <h1>Pin: {cardNum}</h1>
    </div>
  );
}

export default App;
