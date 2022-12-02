import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram"; 
import TwitterIcon from "@mui/icons-material/Twitter";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = ( ) => {
  const { currentUser} = useContext(AuthContext);
    return (

        <div className="profile">
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon />
            </a>
           
            <a href="http://tweeter.com">
              <TwitterIcon/>
            </a>
          </div>
          <div className="center">
          <div className="user">
          <h3>User Information</h3>
          <p>Usernamr: {currentUser.username}</p>
          <p>Email: {currentUser.email}</p>
          <p> Name: {currentUser.name}</p>
        </div>
          </div>
          <div className="right">
             <a href="http://instagram.com">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
