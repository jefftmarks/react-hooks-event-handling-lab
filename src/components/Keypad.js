import React from "react";

function Keypad (){
    function handleChange() {
        console.log('Entering password...')
    };

    return (
        <>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" onChange={handleChange}></input>
        </>
    );
}

export default Keypad;