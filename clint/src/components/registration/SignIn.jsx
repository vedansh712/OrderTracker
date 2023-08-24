import { useState } from "react";
import "./registration.scss";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signin({
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
      <div>
        <div className="signup-form">
          <div className="signup-form__wrapper">
            <span>Log In</span>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="number"
                name="phone"
                placeholder="Phone No"
                onChange={handleChange}
                value={state.phone}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={state.password}
              />
              <button>LogIn</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
