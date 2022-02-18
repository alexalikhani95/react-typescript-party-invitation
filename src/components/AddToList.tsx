import { useState } from "react";
import { PeopleState as Props } from "../App";

interface PeopleProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<PeopleProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  // Ensuring that this can be applied to input elements and also text areas
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    // Set input to whetver it currently is, (current state) but change the event,
    // and override the value of e.target.name to e.target.value
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    // if the name, age, or image url is empty (note is optional)
    if (!input.name || !input.age || !input.img) {
      return;
    }

    //Set people to everyone in th list, plus a brand new object
    setPeople([
      ...people,
      {
        name: input.name,
        // parsing age to an integer otherwise typescript will take it as a string and throw an error
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    })
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="note"
        value={input.note}
        placeholder="Note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
