import React from "react";

interface PeopleProps {
  people: {
    id: number
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<PeopleProps> = ({ people }) => {

  // Typescript would throw and error if its not defined that we are returning an array of jsx elements
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key={person.id}>
        <div className="List-header">
          <img className="List-img" src={person.url} alt={person.name}/>
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note ">{person.note}</p>
      </li>
      )
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  );
};

export default List;
