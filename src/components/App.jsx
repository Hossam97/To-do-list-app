import React, { useState } from "react";
import ToDoItem from "./todoitem";
import Input from "./Input";


function App() {

const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

function handleChange(event){
  const value = event.target.value;
  setInputText(value)
}

function handleButton(){
  setItems((prevItems) => {
    return [...prevItems, inputText];
  });
  setInputText("");
}

function deleteItems(id){
  setItems(prevItems => {
    return prevItems.filter((item, index) => {
      return index !== id; 
    })
  })
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

        <Input 
          value={inputText}
          type={"text"}
          onChange={handleChange}
          onClick={handleButton}
        />
         

      <div>
        <ul>
          {items.map((oneItem, index) => (
            <ToDoItem
             key={index}
             id={index}
             text= {oneItem}
             onChecked={deleteItems}
             />))}
        </ul>
      </div>
      <div className="pageBottom">
      <footer>
      <p>Developed by Hossam Eldin | 2021</p>
      </footer>
      </div>
    </div>
    
  );
}

export default App;
