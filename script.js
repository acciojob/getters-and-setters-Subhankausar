class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

const student = new Student("Alice", 20);
const teacher = new Teacher("Bob", 35);

student.study(); // Logs: "Alice is studying"
teacher.teach(); // Logs: "Bob is teaching"

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
