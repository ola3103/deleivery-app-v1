import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const UserNavBar = () => {
  return (
    <nav className="user-navbar-container">
      <ul className="user-navbar-item container">
        <li className="user-navbar-single-item">
          <Link to="/" className="user-navbar-link">
            Logo
          </Link>
        </li>
        <li className="user-navbar-single-item user-navbar-menu">
          <a className="user-navbar-link">
            Menu
            <span>
              <IoIosArrowDown />
            </span>
          </a>
          <p className="user-menu-content">
            <span className="single-menu-content">My Bookings</span>
            <span className="single-menu-content">Profile</span>
          </p>
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
