import React from "react";
import "./BasicTable.css";
let sectors = [...Array(7).keys()];
let binomials = [...Array(7).keys()];
let maxTimeForGroup = 6;
console.dir(sectors);
console.dir(binomials);
export const BasicTable = () => {
  function hhmmToDecimal(hourHHMM) {
    let timeArray = hourHHMM.split(":");
    return parseFloat(
      parseInt(timeArray[0], 10) + parseInt(timeArray[1], 10) / 60
    );
  }
  function decimalToHHMM(decimalHour) {
    let hrs = parseInt(Number(decimalHour));
    let min = Math.round((Number(decimalHour) - hrs) * 60);
    return `${hrs}:${min < 10 ? min.toString().padStart(2, "0") : min}`;
  }
  const handleChange = (e) => {
    //console.dir(e.target);
    //console.dir(e.target.parentElement);
    //console.dir(e.target);
    // console.dir(e.target.parentElement.children[0].value);
    // console.dir(e.target.parentElement.children[1].value);
    //console.dir(hhmmToDecimal(e.target.parentElement.children[0].value));
    //console.dir(hhmmToDecimal(e.target.parentElement.children[1].value));
    console.dir(
      decimalToHHMM(hhmmToDecimal(e.target.parentElement.children[0].value))
    );
    console.dir(
      decimalToHHMM(hhmmToDecimal(e.target.parentElement.children[1].value))
    );
    //console.dir(`${e.target.value} ${e.target.dataset.meridiem}`);
    //console.dir(e.target.dataset);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Groups</th>
            {sectors.map((sector) => {
              return <th key={sector + 1}>SECTOR {sector + 1}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {binomials.map((binomial) => {
            return (
              <tr key={binomial + 1}>
                <th>Group {binomial + 1}</th>
                {sectors.map((sector) => {
                  return (
                    <td key={`${binomial + 1}${sector + 1}`}>
                      <input
                        id={`PatrolStart-B${binomial + 1}-S${sector + 1}`}
                        data-binomial={binomial + 1}
                        data-sector={sector + 1}
                        data-meridiem={"AM"}
                        type="time"
                        onChange={handleChange}
                        min="00:00"
                        max="11:59"
                        pattern="[0-2][0-9]:[0-5][0-9]"
                        onKeyDown={(e) => {
                          console.dir(e);
                          console.dir(e.key === "Enter");
                        }}
                        onInput={(e) => {
                          console.dir(e);
                        }}
                        required
                      />
                      <input
                        id={`PatrolEnd-B${binomial + 1}-S${sector + 1}`}
                        data-binomial={binomial + 1}
                        data-sector={sector + 1}
                        data-meridiem={"PM"}
                        type="time"
                        onChange={handleChange}
                        min="12:00"
                        max="23:59"
                        pattern="[0-2][0-9]:[0-5][0-9]"
                        onKeyDown={(e) => {
                          console.dir(e);
                          console.dir(e.key === "Enter");
                        }}
                        required
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
