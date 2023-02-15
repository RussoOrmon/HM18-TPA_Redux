import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { todoActionTypes } from "../../store/todo/todoReducer";
import TodoList from "./TodoList";

const TodoForm = () => {

    const [todos, setTodos] = useState('');

    const dispatch = useDispatch()

    const getValueInput=e=>{
        setTodos(e.target.value)
    }

    const submitHandler = e=>{
        e.preventDefault();
        const newTodo ={
            id: new Date().toString(),
            title:todos,
        }
        dispatch({type:todoActionTypes.ADD_TODO, payload: newTodo});
        setTodos('')

    }

    const deleteAll=()=>{
        dispatch({type: todoActionTypes.DELETE_ALL})
    }

  return (
    <>
    <div>
        <label htmlFor="name"> Введите курсы по программированию:  </label>
      <input id="name" type="text" value={todos} onChange={getValueInput}  />
      <button onClick={submitHandler} >Add todo </button>
      <button onClick={deleteAll} style={{background:'red'}}  >Delete All </button>

      <TodoList/>
    </div>
    </>
  );
};

export default TodoForm;
