import { useState } from "react";

function Input(){
  
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const [data,setData] = useState([]);

  function handleWork(e){
    setTask(e.target.value);
  }

  function handleDate(e){
    setDate(e.target.value);
  }

  function handleToDo(){
    if (task && date){
      let newSetData = { task, date };
      setData([...data, newSetData]);
      setTask("");
      setDate("");
    }
  }

  function handleDelete(index) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData); 
    }




    return <div>
  
    <div className="row todoInput">
      <div className="col-4 boxes"><input type="text" name="todo" placeholder="Enter To-Do" value={task} onChange={handleWork}/></div>
      <div className="col-4 boxes"><input type="date" name="date" value={date} onChange={handleDate} /></div>
      <div className="col-2 buttons"><button type="button" className="btn btn-success" onClick={handleToDo}>Add</button></div>
    </div>
    

    <div className="row">
      {data.map((item, index) => (
          <div className="row todoInput" key={index}>
            <div className="col-4 boxes">{item.task}</div>
            <div className="col-4 boxes">{item.date}</div>
            <div className="col-2 buttons">
              <button type="button" className="btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  </div>
}

export default Input;