import "./header.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../../redux/authSlice";
import history from "../../history/history";

const Header = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem("auth");
    history.push("/login-user");
    window.location.reload();
  };
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <h1>Order Tracker</h1>
        </div>
        <div className="header__button">
          {currentUser && currentUser.token ? (
            <Link to="/login-user" className="buttons" onClick={handleClick}>
              SignOut
            </Link>
          ) : (
            <>
              <Link to="/login-user" className="buttons">
                LogIn
              </Link>
              <Link to="/add-user" className="buttons">
                SignIn
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
