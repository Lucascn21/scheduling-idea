import "./BasicTable.css";

//Use a folder or structure this better
const hhmmToDecimal = (hourHHMM = "00:00") => {
  //console.dir(hourHHMM);

  //console.dir(typeof hourHHMM);
  let timeArray = hourHHMM.split(":");
  // console.dir(timeArray.length === 2);
  if (timeArray[0] === "00") timeArray[0] = "12";
  return parseFloat(
    parseInt(timeArray[0], 10) + parseInt(timeArray[1], 10) / 60
  );
};

const decimalToHHMM = (decimalHour) => {
  let hrs = parseInt(Number(decimalHour));
  let min = Math.round((Number(decimalHour) - hrs) * 60);
  //console.dir(min);
  //console.dir(min.toString().length);
  return `${hrs}:${
    min.toString().length < 2 ? min.toString().padStart(2, "0") : min
  }`;
};

export const BasicTable = ({ shiftTime, groupQuantity, binomials }) => {
  const handleChange = (e) => {
    let amTime = undefined,
      pmTime = undefined;
    let amInput = e.target.parentElement.children[0];
    let pmInput = e.target.parentElement.children[1];
    let potentialPatrolTime = 0;

    if (amInput.value && pmInput.value) {
      let { binomial, sector } = e.target.dataset;
      console.dir(binomials[binomial]);
      //12 to 24 hours format shenanigans
      amTime = 13 - hhmmToDecimal(amInput.value);
      pmTime = hhmmToDecimal(pmInput.value) - 13;
      potentialPatrolTime = amTime + pmTime;

      //This could be cleaner, must think how to handle error / warning messages/toasts so it stays like this for now
      binomials[binomial].patrolTime[sector] = potentialPatrolTime;
      if (binomials[binomial].getUnallottedHours() < 0) {
        /*
        alert(
          `binomial ${binomial} in sector ${sector} Expected patrol time: ${binomialTest.getTotalHoursInPatrol()} exceeds ${hhmmToDecimal(
            maxTimeForGroup
          )} which is the max patrol time per group`
        );
        */
        amInput.setCustomValidity("wtf richard");
        pmInput.setCustomValidity("wtf richard");
      } else {
        amInput.setCustomValidity("");
        pmInput.setCustomValidity("");

        //alert(`binomial ok. Remaining ${binomialTest.getUnallottedHours()}`);
      }

      //Make a function that handles this so its cleaner
      const elements = document.querySelectorAll(
        `[data-binomial="${binomials[binomial].binomialDataId}"]`
      );
      if (binomials[binomial].getUnallottedHours() === 0) {
        for (const binomialRow of elements) {
          !binomialRow.value && binomialRow.setAttribute("disabled", true);
        }
      } else {
        for (const binomialRow of elements) {
          !binomialRow.value && binomialRow.removeAttribute("disabled");
        }
      }
    }
  };

  //Still deciding how to handle constants and models
  let sectors = [...Array(7).keys()];

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
              <tr key={binomial.binomialDataId + 1}>
                <th>Group {binomial.binomialDataId + 1}</th>
                {sectors.map((sector) => {
                  return (
                    <td key={`${binomial.binomialDataId + 1}${sector + 1}`}>
                      <input
                        id={`PatrolStart-B${binomial.binomialDataId + 1}-S${
                          sector + 1
                        }`}
                        data-binomial={binomial.binomialDataId + 1}
                        data-sector={sector + 1}
                        data-meridiem={"AM"}
                        type="time"
                        onChange={handleChange}
                        min="00:00"
                        max="11:59"
                        pattern="[0-2][0-9]:[0-5][0-9]"
                        onKeyDown={(e) => {
                          // console.dir(e);
                          //  console.dir(e.key === "Enter");
                        }}
                        onInput={(e) => {
                          //console.dir(e);
                        }}
                        required
                      />
                      <input
                        id={`PatrolEnd-B${binomial.binomialDataId + 1}-S${
                          sector + 1
                        }`}
                        data-binomial={binomial.binomialDataId + 1}
                        data-sector={sector + 1}
                        data-meridiem={"PM"}
                        type="time"
                        onChange={handleChange}
                        min="12:00"
                        max="23:59"
                        pattern="[0-2][0-9]:[0-5][0-9]"
                        onKeyDown={(e) => {
                          //console.dir(e);
                          //console.dir(e.key === "Enter");
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
