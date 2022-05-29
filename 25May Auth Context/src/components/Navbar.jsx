import { useContext } from "react";

import React from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar=()=> {

   

     const {isAuth,toggleAuth} =useContext(AuthContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        fontSize: "28px",
        margin: "10px",
        border: "1px solid",
        backgroundColor: "gray"
      }}
    >
        {isAuth ? (
            <button onClick={()=>{
                toggleAuth()
            }}
            >Logout</button>

        ):(
            <button onClick={()=>{
                toggleAuth()
            }}>Login</button>
        )}
    </nav>
  );
}