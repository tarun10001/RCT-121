import React from 'react';
import "../App.css";
import {useDispatch, useSelector} from "react-redux";
import {loginnow, logoutnow} from "../Redux/Auth/action";


const Navbar = () => {

    const auth = useSelector((store) =>store.auth)
    const dispatch = useDispatch();

    return (
        <div className="nav_div">
            <span>Todo App</span>
            <div>
                <button disabled={auth.login} onClick={() => dispatch(loginnow())}>Login</button>
                <button disabled={auth.logout} onClick={() => dispatch(logoutnow())}>Logout</button>
            </div>
        </div>
    )
};

export default Navbar;