import "./lesson_16.scss";
import {
  Button,
  RoundButton,
  LinkButton,
  FakeRoundButton
} from "../common/button";

const cancelButton = new Button(
  document.querySelector("body"),
  "Log in",
  () => {
    prompt("Enter username");
  },
  "rgb(255, 0, 0)"
);

cancelButton.render();

const roundedButton = new RoundButton(
  document.querySelector("body"),
  "Log in",
  () => {
    prompt("Enter username");
  },
  "#ff00ff"
);
roundedButton.render();

const roundedButtonFake = new FakeRoundButton(
  document.querySelector("body"),
  "Log in",
  () => {
    prompt("Enter username");
  },
  "#ff00ff"
);
roundedButtonFake.render();

const linked = new LinkButton(
  document.querySelector("body"),
  "Log in",
  () => {
    prompt("Enter username");
  },
  "rgb(0, 0, 255)"
);
linked.render();

console.log(linked, roundedButton, roundedButtonFake, cancelButton);

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  greet() {
    console.log("Hello my name is " + this.name);
  }
}

class Pm extends Person {
  toManage() {
    console.log("Manage the project!! Jira is up to day!");
  }
}

class Developer extends Person {
  constructor(name, gender, lang) {
    super(name, gender);
    this.lang = lang;
  }

  toCode() {
    console.log("Code in " + this.lang);
  }
}

// Composition|Delegation
class DevManager extends Person {
  constructor(name, gender, lang) {
    super(name, gender);
    this.dev = new Developer(name, gender, lang);
    this.pm = new Pm(name, gender, lang);
  }

  toCode() {
    this.dev.toCode();
  }

  toManage() {
    this.pm.toManage();
  }
}

const ilya = new Developer("Ilya", "male", "JS");
ilya.greet();
ilya.toCode();
const alice = new DevManager("Alice", "female", ".NET");
alice.greet();
alice.toManage();

const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
