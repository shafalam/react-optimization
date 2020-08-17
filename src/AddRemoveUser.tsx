import React from "react";
import { v4 as uuidv4 } from "uuid";

const AddRemoveUser = React.memo(() => {
  console.log("add-remove component");
  const [users, setUsers] = React.useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);

  const [text, setText] = React.useState("");

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };

  const handleRemove = React.useCallback(
    (id: string) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
});

interface ListProps {
  list: any[];
  onRemove: (id: string) => void;
}

const List = React.memo(({ list, onRemove }: ListProps) => {
  console.log("list component");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

interface ListItemProps {
  item: any;
  onRemove: (id: string) => void;
}

const ListItem = React.memo(({ item, onRemove }: ListItemProps) => {
  console.log("list-item component");
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});

export default AddRemoveUser;
