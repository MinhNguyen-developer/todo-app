/** @format */

import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const uniq = "id" + Math.random().toString(16).slice(2);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const updateDocucment = async (id, value) => {
    await updateDoc(doc(db, "todo-list", id), {
      text: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    await setDoc(doc(db, "todo-list", uniq), {
      id: uniq,
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      {props.edit ? (
        <form
          onClick={(e) => {
            e.preventDefault();
            updateDocucment(props.edit.id, input);
          }}
          className="todo-form"
        >
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button type="submit" className="todo-button edit">
            Update
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </form>
      )}
    </div>
  );
}

export default TodoForm;
