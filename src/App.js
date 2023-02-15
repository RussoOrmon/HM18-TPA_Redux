import "./App.css";
import Auth from "./components/Auth";
import Calculator from "./components/Counter";
import { Provider} from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <h1>#hELlo@</h1>

      <Provider store={store}>
      <Calculator />
      <Auth />
      
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/todo" element={<TodoForm />} />

              <Route path="/todolist" element={<TodoList />} />
            </Route>
          </Routes>
      </Provider>
    
    </div>
  );
}

export default App;
