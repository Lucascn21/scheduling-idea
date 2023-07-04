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
      new Binomial(index, ["asd"], [], "06:00")
    );
  }
  //setBinomials(tempArray);
  /*
  return (
    <>
      <BasicTable shiftTime={"06:00"} groupQuantity={6} binomials={binomials} />
    </>
  );
  */

  return (
    <>
      <img src={"./Heroe_1_PNG_Lucas_Test.png"}></img>
      <img src={"./Heroe_Vectorizado.png"}></img>
    </>
  );
}

export default App;
