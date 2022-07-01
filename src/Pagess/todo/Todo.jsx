import { useState } from "react";
import { useDispatch ,useSelector } from "react-redux"
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import './Todo.css';
import {addTodoAction, deleteTodAction} from '../../redux/config';
import {addTodo,deleteTodo} from '../../redux/features/todo.slice';



function Todo() {


  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  console.log("todos",todos);

  const onAddTodo = (task) => {
    console.log("task",task);

    // dispatch(addTodoAction(task));
    dispatch(addTodo(task));

  };

  const onDeleteTodo = (index) => {
    // dispatch(deleteTodAction(index));
    dispatch(deleteTodo(index));

  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={onAddTodo} />
      <TodoList todos={todos} deleteTodo={onDeleteTodo} />
    </div>
  );
}

export default Todo;
