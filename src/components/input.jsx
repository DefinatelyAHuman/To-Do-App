import { useState } from "react";

function Input({onAddClick}){
  
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  

  function handleWork(e){
    setTask(e.target.value);
  }

  function handleDate(e){
    setDate(e.target.value);
  }

  function handleAddButton(){
    
    if (task && date){
      onAddClick(task, date);
      setTask("");
      setDate("");
    }
  }

  



    return <div>
  
    <div className="row todoInput">
      <div className="col-4 boxes"><input type="text" name="todo" placeholder="Enter To-Do" value={task} onChange={handleWork}/></div>
      <div className="col-4 boxes"><input type="date" name="date" value={date} onChange={handleDate} /></div>
      <div className="col-2 buttons">
        <center><button type="button" className="btn btn-success" onClick={handleAddButton}>Add</button></center>
      </div>
    </div>
    

    
  </div>
}

export default Input;