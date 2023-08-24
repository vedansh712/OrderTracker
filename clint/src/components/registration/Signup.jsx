import { useState } from "react";
import "./registration.scss";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: state.username,
        phone: state.phone,
        password: state.password,
      })
    );
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <span>Sign Up</span>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={state.username}
              onChange={handleChange}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone No"
              value={state.phone}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
            <button>SignIn</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
