import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {postData,logout } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Form } from "./Registration";

const Login = () => {
  const token = useSelector((state) => state.reducer.token)
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
}
const handleSubmit = (event) => {
    event.preventDefault();
  dispatch(postData(formData,"login"));
  }
  
  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    }
    
  },[token]);
  return (
      <div>
        <Form>
              <form action="" onSubmit={handleSubmit}>
              <label htmlFor="username">Enter Username</label><br />
              <input type="text" name="username" required onChange={handleChange}/><br />
              <label htmlFor="password">Enter Password</label><br />
              <input type="password" name="password" required onChange={handleChange}/><br />
              <input type="submit" className="qw" value="Login" />
        </form>
        <p>Don't have account ? <Link to="/">Register</Link> </p>
    </Form>  
    </div>
  )
}

export default Login;