import "./navbar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>HomePage</span>
        </Link>
        {currentUser ? (
          <span onClick={logout}> Logout</span>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
         <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <div className="user">
          <Link to={`/profile/${currentUser.name}`} 
          style={{ textDecoration: "none" }}>
            <span>User:'{currentUser.name}'</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
