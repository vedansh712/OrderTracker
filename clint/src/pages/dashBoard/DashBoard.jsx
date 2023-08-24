import "./dashboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getallorders } from "../../redux/orderSlice";

const DashBoard = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const order = useSelector((state) => state.order);
  console.log(auth.currentUser.token);
  const { allOrders } = order;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallorders(auth.currentUser.token, auth.currentUser.id));
  }, []);

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <Sidebar />
        </div>
        <div className="dashboard__middle">
          <h2>Previous Orders</h2>
          {Object.values(allOrders).map((item) => {
            return (
              <div key={item._id} className="orderlist">
                <p>{item.order}</p>
                <p>{item.phone}</p>
              </div>
            );
          })}
        </div>
        <div className="dashboard__right">
          <div>
            <Link to="/add-Order" className="createbutton">
              + Create Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
