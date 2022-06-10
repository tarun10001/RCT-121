import React, { useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { postData } from "../Redux/action";
import { useNavigate ,Link} from 'react-router-dom';
import styled from "styled-components";


const Registration = () => {
  const myState = useSelector((state) => state.reducer.message)
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
   const dispatch = useDispatch();
    const handleChange = (e) => {
        let name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      dispatch(postData(formData,"register"));
     
  }

  useEffect(() => {
    if (myState) {
      navigate("/login");
    }
  },[myState])
  


  return (
    <Form>
        <h1>Registration</h1>
      <h3>{myState}</h3>
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="name">Enter Name</label><br />
              <input type="text" name="name" required onChange={handleChange}/><br />
              <label htmlFor="email">Enter Email</label><br />
              <input type="email" name="email" required onChange={handleChange}/><br />
              <label htmlFor="password">Enter Password</label><br />
              <input type="password" name="password" required onChange={handleChange}/><br />
              <label htmlFor="username">Enter Username</label><br />
              <input type="text" name="username" required onChange={handleChange}/><br />
              <label htmlFor="mobile">Enter Mobile Number</label><br />
              <input type="number" name="mobile" required onChange={handleChange}/><br />
              <label htmlFor="description">Description</label><br />
              <textarea name="description" placeholder="Enter description" required onChange={handleChange}/><br />
              <input className="qw" type="submit" value="REGISTER" />
      </form>
      <p>Already have account <Link to="/login">Login</Link></p>
    </Form>
  )
}

export default Registration;

export const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height:100vh ;
background-color: #8787c5;
color: #151414;

h1 {
    color: #322e2e;
}

.qw {
    color: white;
    background-color: #42a742;
    width: 150px;
    height: 40px;
    cursor: pointer;
    border: none;
    letter-spacing:2.5px;
    margin-top: 12%;
    font-size: 17px;
}
.qw:hover{
    background-color: #46d146;
}

input {
    height: 30px;
    width: 200px;
    font-size: 20px;
}
`