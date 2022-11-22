import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
//import logo from "./logo.svg";
import "./App.css";

var testData = [
  {
    id: 1,
    text: "create 3 columns layout.",
    title: "Layout",
    status: "finished",
  },
  {
    id: 2,
    text: "create main App and get basic react working",
    title: "create App",
    status: "finished",
  },
  {
    id: 3,
    text: "start basic css styling, create 3 columns and basic sticky styling.",
    title: "start css",
    status: "in progress",
  },
  {
    id: 4,
    text: "Create column class",
    title: "Column class",
    status: "in progress",
  },
  { id: 5, text: "give presentation", title: "Present", status: "to-do" },
  { id: 6, text: "Create test data", title: "test data", status: "finished" },
  { id: 7, text: "Add interactivity", title: "Events", status: "to-do" },
  { id: 8, text: "Create note class", title: "Create notes", status: "to-do" },
  {
    id: 9,
    text: "Create render sticky method",
    title: "Render sticky",
    status: "finished",
  },
  {
    id: 10,
    text: "Make notes draggable",
    title: "Add Drag features",
    status: "to-do",
  },
];

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.catagory = this.props.catagory;
    this.data = this.props.data;
  }

  renderNote(stickies) {
    let notes = [];
    for (let index in stickies) {
      const note = stickies[index];
      console.log(this.catagory);
      if (note.status === this.catagory) {
        notes.push(
          <li key={note.id}>
            <a href="#">
              <h2>{note.title}</h2>
              <p>{note.text}</p>
            </a>
          </li>
        );
      }
    }
    return notes;
  }
  render() {
    return this.renderNote(this.data);
  }
}

class Sticky extends Column {
  constructor(props) {
    this.data = this.props.data;
  }

  renderNote(stickies) {}
  render() {
    return null;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="wall" id="wall">
        <div className="gridtemplatecolumns" id="To-Do">
          <h1>To Do</h1>
          <ul>
            <Column catagory={"to-do"} data={testData} />
          </ul>
        </div>
        <div className="gridtemplatecolumns" id="in progress">
          <h1>In Progress</h1>
          <ul>
            <Column catagory={"in progress"} data={testData} />
          </ul>
        </div>

        <div className="gridtemplatecolumns" id="finished">
          <h1>Complete</h1>
          <ul>
            <Column catagory={"finished"} data={testData} />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
