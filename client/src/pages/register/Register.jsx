import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import axios from "axios"
import logo from "../../assets/logo.png"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4200/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="register">
    <div className="auth">
    <img src={logo} alt="logo" />
    <h1>Register</h1>
        <form>
          <input type= "text" placeholder="Username"  name = "username" onChange= {handleChange}></input>
          <input type= "email" placeholder="Email" name = "email" onChange= {handleChange}></input>
          <input type="text" placeholder="Name" name = "name" onChange= {handleChange}></input>
          <input type="password" placeholder="Password" name = "password" onChange= {handleChange}></input>
          <button onClick = {handleSubmit}>Register</button>
        </form>
        {err && err}

        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
    </div>
    </div> 
  );
};

export default Register;
