import React from "react";
import "./BasicTable.css";
let sectors = [...Array(7).keys()];
let binomials = [...Array(7).keys()];

console.dir(sectors);
console.dir(binomials);
export const BasicTable = () => {
  const handleChange = (e) => {
    //console.dir(e.target);
    console.dir(e.target.value);
    console.dir(e.target.parentElement.dataset);
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
