import React, { useState } from "react";

export default function ArrayState() {
  const [item, setItem] = useState([]);
  const [employee, setEmployee] = useState("");

  const updateEmployee = (e) => {
    setEmployee(e.target.value);
  };
  const addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        name: employee,
      },
    ]);
  };
  return (
    <div>
      <h2>Add Employee</h2>
      <input type="text" name="" id="" onChange={updateEmployee} />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {item.map((items) => {
          return <li key={items.id}>{items.name}</li>;
        })}
      </ul>
    </div>
  );
}
