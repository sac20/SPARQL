import React from "react";
import { doit } from "./src/connection";


function Counter() {
    const[count, setCount] = React.useState(0);

    const increase = () => setCount(count+1);
    const decrease = () => setCount(count-1);
    const connect = async() => {
        await doit()
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={connect}>connect</button>
        </div>
    )
}

export default Counter;