import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
//import logo from "./logo.svg";
import "./App.css";

var testData = [
  {
    id: 1,
    text: "create 3 columns and add a render sticky function.",
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
  { id: 5, text: "give presentation", title: "Presentation", status: "to-do" },
  { id: 6, text: "Create test data", title: "test data", status: "finished" },
  { id: 7, text: "Add interactivity", title: "Events", status: "to-do" },
];

// const column = (catagory, data) => {
//   let notes = [];
//   for (let index in data) {
//     const note = data[index];
//     if (note.status === catagory) {
//       notes.push(<p key={note.id}>{note.text}</p>);
//     }
//   }
//   return notes;
// };

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

class App extends React.Component {
  render() {
    return (
      <div className="wall" id="wall">
        <div className="gridtemplatecolumns" id="To-Do">
          <h1>To Do</h1>
          {/* {column("to-do", testData)} */}
          <ul>
            <Column catagory={"to-do"} data={testData} />
          </ul>
        </div>
        <div className="gridtemplatecolumns" id="in progress">
          <h1>In Progress</h1>
          <ul>
            <Column catagory={"in progress"} data={testData} />
          </ul>
          {/* {column("in progress", testData)} */}
        </div>

        <div className="gridtemplatecolumns" id="finished">
          <h1>Complete</h1>
          <ul>
            <Column catagory={"finished"} data={testData} />
          </ul>
          {/* {column("finished", testData)} */}
        </div>
      </div>
    );
  }
}

export default App;
