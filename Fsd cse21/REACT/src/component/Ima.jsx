import React, { useState } from 'react';

let width = 100;
let height = 100;
const Ima = () => {
    const [size, setSize] = useState(width);
    const [size1, setSize1] = useState(height);
    function inc() {
        setSize(size + 10);
        s
    }
    function inc1() {
        setSize1(size1 + 10);
    }
    function dec() {
        setSize(size - 10);
    }
    function dec1() {
        setSize1(size1 - 10);
    }
    return (
        <div style={{ border: "2px solid black", width: "600px", height: "600px", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img src="https://i.pinimg.com/736x/5e/aa/bd/5eaabdf3f80d820675f1e99e3ca79fb7.jpg" alt="Image" style={{ width: size, height: size1 ,alignItems: "center", margin: "auto" ,}} />
            <button onClick={inc}>Increase Width</button>
            <button onClick={inc1}>Increase Height</button>
            <button onClick={dec}>Decrease Width</button>
            <button onClick={dec1}>Decrease Height</button>
        </div>
    );
};

export default Ima;