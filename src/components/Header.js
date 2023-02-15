import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { authActionTypes } from "../store/auth/authReducer";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  const logoutHandler = () => {
    console.log(isAuthorized);
    dispatch({ type: authActionTypes.LOGOUT });
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>
          <ul>
            {isAuthorized && (
              //<li>
              //  <Link  to='/todo' > My Courses Todos </Link>

              //</li>,
              <li>
                <Link to="/todo"> My Sales Todos </Link>
              </li>
            )}
            <li>
              <Link to='/'  >
                <button onClick={logoutHandler}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
