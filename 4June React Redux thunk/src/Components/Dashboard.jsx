import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch } from "react-redux";
import { logout } from "../Redux/action";


const Dashboard = () => {
  const token = useSelector((state) => state.reducer.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  },[token])
  return (
    <>
  <h1>Dashboard</h1>
    <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  
  )
}

export default Dashboard;