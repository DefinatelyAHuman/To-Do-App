import Heading from "./components/heading";
import Input from "./components/input";
import Record from "./components/record";
import "./App.css";
import { useState } from "react";


function App() {
  
  const [data,setData] = useState([]);

  function handleToDo(task,date){
    let newSetData = {task, date};
    setData([...data, newSetData]);
    
    if (data===""){
      <div><center>Enter the task</center></div>
    }
    }
  

  function handleDelete(index) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData); 
  }

  return (
    <>
    
      <Heading />
      <Input onAddClick={handleToDo}/>
      <hr/>
      <Record onDeleteClick={handleDelete} onChangeData={data}/>
    
    
    </>
  );
}

export default App;
