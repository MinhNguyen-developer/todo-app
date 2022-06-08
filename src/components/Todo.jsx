/** @format */

import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
const Todo = ({ completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const [todoArr, setTodoArr] = useState([]);
  const _todoArr = [];
  useEffect(() => {
    const getCollection = async () => {
      const querySnapshot = await getDocs(collection(db, "todo-list"));
      querySnapshot.forEach((doc) => {
        _todoArr.push(doc.data());
      });
      setTodoArr(_todoArr);
    };

    getCollection();
  }, []);

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todo-list", id));
  };

  if (edit.id) {
    return <TodoForm edit={edit} />;
  }

  return todoArr.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
