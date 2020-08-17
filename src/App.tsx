import React from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  console.log("app component");
  const [users, setUsers] = React.useState([
    { id: "a", name: "timmi" },
    { id: "b", name: "mitu" },
  ]);

  const [text, setText] = React.useState("");

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} />
    </div>
  );
};

interface ListProps {
  list: any[];
}

const List = React.memo(({ list }: ListProps) => {
  console.log("list component");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});

interface ListItemProps {
  item: any;
}

const ListItem = React.memo(({ item }: ListItemProps) => {
  console.log("list-item component");
  return <li>{item.name}</li>;
});

export default App;
