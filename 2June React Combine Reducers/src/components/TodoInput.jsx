import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {postTodoSuccess, postTodoRequest} from "../Redux/Todos/action";


const TodoInput = () => {

const [text, setText] = useState();
const dispatch = useDispatch();
const todos = useSelector(store => store.todos);
const auth = useSelector(store => store.auth);

const handleSubmit = () => {
    dispatch(postTodoRequest())
    dispatch(postTodoSuccess(text));
}

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Write Here..." />
            <input onClick={handleSubmit} disabled={auth.logout} type="submit" />

        </div>
    )
};


export default TodoInput;