export class Binomial {
  binomialDataId;
  agentsArray;
  hoursInPatrol;
  allottedPatrolTime;

  constructor(
    binomialDataId = 1,
    agentsArray = [],
    hoursInPatrol = [],
    allottedPatrolTime = "06:00"
  ) {
    this.binomialDataId = binomialDataId;
    this.agentsArray = agentsArray;
    this.hoursInPatrol = hoursInPatrol;
    this.allottedPatrolTime = allottedPatrolTime;
  }

  get Agents() {
    return this.agentsArray;
  }

  set Agents(newAgentsArray) {
    Array.isArray(newAgentsArray)
      ? (this.agentsArray = newAgentsArray)
      : console.warn(
          "No agents were set. Agents setter must receive an array."
        );
  }

  get patrolTime() {
    return this.hoursInPatrol;
  }

  set patrolTime(patrolTimeHHMM) {
    this.hoursInPatrol = patrolTimeHHMM;
  }

  getTotalHoursInPatrol = () => {
    return this.hoursInPatrol.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  getUnallottedHours = () => {
    return this.allottedPatrolTime - this.getTotalHoursInPatrol();
  };
}
