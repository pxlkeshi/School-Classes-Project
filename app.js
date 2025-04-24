class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(number) {
    if (typeof number === "number") {
      this._numberOfStudents = number;
    } else {
      return "Invalid input: numberOfStudents must be set to a Number.";
    }
  }
  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`;
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const Index = Math.floor(substituteTeachers.length * Math.random());
    return (substituteTeachers = substituteTeachers[Index]);
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

// 15. Call .quickFacts()
lorraineHansbury.quickFacts();

// 16. Call .pickSubstituteTeacher()
const substitute = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);
console.log("Substitute Teacher:", substitute);

// 17. Create HighSchool instance
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

// 18. Get sportsTeams from alSmith
console.log("Sports Teams:", alSmith.sportsTeams);
