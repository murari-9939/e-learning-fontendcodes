"use client";

import React, { useState } from "react";

export default function Show() {
  const [data, setData] = useState([
    { id: 1, name: "Murari" },
    { id: 2, name: "Alice" },
  ]);

  const [name, setName] = useState(""); // Input value
  const [editId, setEditId] = useState(null); // Track editing

  // 1️⃣ Handle input change
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 2️⃣ Handle Add
  const handleAdd = () => {
    if (!name.trim()) return;

    const newItem = {
      id: data.length + 1,
      name: name,
    };

    setData([...data, newItem]);
    setName(""); // Clear input
  };

  // 3️⃣ Handle Edit (populate input)
  const handleEdit = (item) => {
    setName(item.name);
    setEditId(item.id);
  };

  // 4️⃣ Handle Update
  const handleUpdate = () => {
    if (!name.trim()) return;

    setData(
      data.map((item) =>
        item.id === editId ? { ...item, name: name } : item
      )
    );
    setName(""); // Clear input
    setEditId(null); // Exit edit mode
  };

  // 5️⃣ Handle Delete
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>CRUD Example</h2>

      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter name"
        required
      />

      {editId === null ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleEdit(item)}>Edit</button>{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
