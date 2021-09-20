import React from "react";

function Input(props){
    return (
        <div className="form">
        <input value={props.value} type={props.type} onChange={props.onChange}/>
        <button onClick={props.onClick}>
        <span>Add</span>
        </button>
      </div>
    )
}

export default Input;