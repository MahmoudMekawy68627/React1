import { useState } from "react";
import { useDispatch ,useSelector } from "react-redux"
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import './Todo.css';
import {addTodoAction, deleteTodAction} from '../../redux'
function Todo() {


  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  console.log("todos",todos);

  const addTodo = (task) => {
    console.log("task",task);

    dispatch(addTodoAction(task));

  };

  const deleteTodo = (index) => {
    dispatch(deleteTodAction(index))

  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
