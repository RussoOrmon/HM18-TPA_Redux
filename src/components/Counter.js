import { useDispatch, useSelector } from "react-redux";
import { calculatorActionTypes } from "../store/calculator/calculatorReduce";
import classes from "./Counter.module.css";

const Calculator = () => {

  const result = useSelector((state)=>state.calculator.result);

  const dispatch = useDispatch()
  
  const addHandler=()=>{
    dispatch({type: calculatorActionTypes.ADD, payload: 5})
  }
  const substractHandler=()=>{
    dispatch({type: calculatorActionTypes.SUBTRACT, payload: 10})
  }
  const divideHandler=()=>{
    dispatch({type: calculatorActionTypes.DIVIDE, payload: 4})
  }
  const multiplyHandler=()=>{
    dispatch({type: calculatorActionTypes.MULTIPLY, payload: 2})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Results : {result} </div>
      <button onClick={addHandler}>+5</button>
      <button onClick={substractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculator;
