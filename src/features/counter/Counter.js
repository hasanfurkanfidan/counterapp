import React,{useState} from "react";
// import styles from ".counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount,incrementByAmount } from "./counterSlice";
 const Counter = () => {
  const value = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount,setAmount]=useState(2)
  return(
  <div>
    <div >
      <button onClick={() => dispatch(increment())} >
        +
      </button>
      <span>{value}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
    <div>
        <input value={amount} onChange={e=>setAmount(e.target.value)} aria-label="Set Incremet Amount"/>
        <button onClick={() => dispatch(incrementByAmount(amount))} >
        inccccc
      </button>
      <button onClick={() => dispatch(incrementByAmount(amount))} >
        inccccc async
      </button>
    </div>
  </div>
  );
};

export default Counter;