// import { useState } from "react";

function Input(){
  
  function handleWork(e){
    console.log(e.target.value);
    let work =e.target.value;
  }

  function handleDate(e){
    console.log(e.target.value);
    let date =e.target.value;
  }

  function handleToDo(){
    console.log("clicked");
    
  }





    return <div className="todoInput text-center">
  
    <div className="row">
      <div className="col-4 boxes"><input type="text" name="todo" placeholder="Enter To-Do" onChange={handleWork}/></div>
      <div className="col-4 boxes"><input type="date" name="date" onChange={handleDate} /></div>
      <div className="col-2 buttons"><button type="button" className="btn btn-success" onClick={handleToDo}>Add</button></div>
    </div>
  </div>
}

export default Input;