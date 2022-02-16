import React, { useState } from "react";
import List from "./components/List";
import "./App.css";

interface PeopleState {
  people: {
    id: number,
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

const App = () => {
  const [people, setPeople] = useState<PeopleState["people"]>([
    {
      id: 1,
      name: "Thierry Henry",
      url: "https://i2-prod.dailystar.co.uk/incoming/article19289670.ece/ALTERNATES/s615b/Thierry-Henry-1403994",
      age: 40,
      note: "Greatest striker in premier league era"
    }
  ])


  return (
    <div className="App">
      <h1>People invited to the Party</h1>
      <List people={people}/>
    </div>
  );
};

export default App;
