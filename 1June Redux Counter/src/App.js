import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
const dispatch = useDispatch();


  return (
    <>
    <div className="container">
      <h1>Redux Counter</h1>

      <div className="quantity">
        <p className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></p>
        <input name="quantity" type="text" className="quantity__input" value={myState} />
        <p className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></p>
      </div>
    </div>
    </>
  );
}

export default App;
