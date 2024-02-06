import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const UserNavBar = () => {
  return (
    <nav className="user-navbar-container">
      <ul className="user-navbar-item container">
        <li className="user-navbar-single-item">
          <Link to="/user-homepage" className="user-navbar-link">
            Logo
          </Link>
        </li>
        <li className="user-navbar-single-item user-navbar-order-link">
          <Link to="/orders" className="user-navbar-link">
            Order History
          </Link>
        </li>
        <li className="user-navbar-single-item user-navbar-notification">
          <button>
            <IoNotificationsOutline />
          </button>
        </li>
        <li className="user-navbar-single-item user-logout-btn">
          <button>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavBar;
