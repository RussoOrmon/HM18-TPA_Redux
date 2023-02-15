
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todo/todoReducer";

const TodoList = () => {



  const todos = useSelector((state) => state.todo);
 
  const dispatch =useDispatch()

  
  const deleteTodo=(id)=>{

    dispatch({type: todoActionTypes.DELETE_TODO, payload: id})
}
  const completedTodo=(id)=>{

    dispatch({type: todoActionTypes.COMPLETED_TODO, payload: id})
}

  return (
    <Container>
      {todos.map((todo) => (
        <TodoContainer key={todo.id}   >
            <p className={todo.completed ? 'underline' : ''}   > {todo.title} </p>
            <button>Edit</button>
            <button onClick={()=>{completedTodo(todo.id)}} >Completed</button>
            <button onClick={()=>{deleteTodo(todo.id)}} style={{background:'red'}} >Delete</button>
    
        </TodoContainer>
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
    
    background-color: #63c763;
`

const TodoContainer=styled.div`

    /*background-color: tomato;*/

    .underline{
        text-decoration: line-through;
    }

`