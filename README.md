# 🏫 School Classes Project

This project demonstrates the use of **JavaScript class syntax and inheritance** to model a school system with multiple school types.

## 📦 What's Inside

- **School** – The base class with shared properties and methods for all school types.
- **PrimarySchool** – Extends `School`, includes a `pickupPolicy`.
- **HighSchool** – Extends `School`, includes a list of `sportsTeams`.

## ✅ Features Implemented

- Getters and setters for encapsulated data access
- Method `.quickFacts()` to display school info
- Static method `.pickSubstituteTeacher()` to randomly select from a list
- Instances of PrimarySchool and HighSchool created with test data

## 🧪 Sample Output

```text
Lorraine Hansbury educates 514 students at the primary school level.
Substitute Teacher: Jamal Crawford
Sports Teams: [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]
```

## 🚀 Extension Ideas

- Create a `MiddleSchool` class with unique properties
- Add more detailed properties (e.g. average test scores, school rating)
- Build a `SchoolCatalog` class to manage multiple school instances by type

## 🛠️ Technologies Used

- JavaScript (ES6+)
- No frameworks or external libraries

---

Built to explore object-oriented programming concepts in a fun, educational setting 🎓

