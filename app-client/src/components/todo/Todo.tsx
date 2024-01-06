import React from "react";
import { TodoForm } from "../common/TodoForm";
import { TodoTable } from "../common/TodoTable";

const Todo = () => {
  return (
    <>
      <TodoForm></TodoForm>
      <TodoTable></TodoTable>
    </>
  );
};

export default Todo;
