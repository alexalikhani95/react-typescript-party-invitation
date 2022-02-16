import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface PeopleState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

const App = () => {
  const [people, setPeople] = useState<PeopleState["people"]>([])


  return (
    <div className="App">
      <h1>People invited to the Party</h1>
    </div>
  );
};

export default App;
