import { useState } from "react";
import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { Binomial } from "./models/binomial";

function App() {
  // alert("asd");
  const [binomials, setBinomials] = useState([]);
  let tempArray = [];
  for (let index = 0; index < 6; index++) {
    tempArray.push(
      //Will probably handle strings so hhmmtodecimal stays for now
      new Binomial(index, ["asd"], [], 6)
    );
  }
  //setBinomials(tempArray);

  return (
    <>
      <BasicTable shiftTime={6} groupQuantity={6} binomials={tempArray} />
    </>
  );
}

export default App;
