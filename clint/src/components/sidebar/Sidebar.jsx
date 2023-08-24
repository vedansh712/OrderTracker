import "./sidebar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__listitems">
          <h3>{currentUser.username}</h3>
        </li>
        {/* <li className="sidebar__listitems">
          <h3>{currentUser.id}</h3>
        </li> */}
        <li className="sidebar__listitems">
          <Link to="/Dashboard" style={{ textDecoration: "none" }}>
            DashBoard
          </Link>
        </li>
        <li className="sidebar__listitems">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
