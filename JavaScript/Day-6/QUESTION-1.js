class Person {
  constructor(firstName, lastName, age, gender, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  displayDetails() {
    console.log(`Name: ${this.getFullName()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Address: ${this.address}`);
    console.log(`Email: ${this.email}`);
  }
}

// Example usage:
const person1 = new Person("YELIA", "BANDARU", 27, "Male", "23 mariamman kovil street kaylanapuram, Ambattur Chennai-600053", "eliyabandar@gmail.com");
person1.displayDetails();
