import React,{useState} from 'react';

const Counterapp = () => {
    const [count, setCount] = useState(0);
    function inc(){
        setCount(count + 1);
    }
    function dec(){
        setCount(count - 1);
    }
    return(
        <div style={{border: "2px solid black", width: "300px", height: "300px", margin: "auto", textAlign: "center", paddingTop: "100px"}}>
            <h1>Counter App</h1>
            <button onClick={inc}>Add+</button>
            <br />
            <span>{count}</span>
            <br/>
            <button onClick={dec}>Sub-</button>
        </div>
    );
};

export default Counterapp;