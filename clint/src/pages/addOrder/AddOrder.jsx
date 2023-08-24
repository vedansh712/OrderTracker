import { useState } from "react";
import "./addorder.scss";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { addorder } from "../../redux/orderSlice";

const AddOrder = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [state, setState] = useState({
    user_id: "",
    phone: "",
    order: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addorder({
        user_id: auth.currentUser.id,
        phone: state.phone,
        order: state.order,
      })
    );
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="addorder">
        <div className="addorder__left">
          <Sidebar />
        </div>
        <div className="addorder__right">
          <div className="order-form">
            <div className="order-form__wrapper">
              <span>Place Your Order</span>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone No"
                  value={state.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="order"
                  placeholder="Write Your Order"
                  value={state.order}
                  onChange={handleChange}
                />
                <button>Commit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
