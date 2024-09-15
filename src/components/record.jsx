function Record(props){
    return <div className="todoInput text-center">
  
    <div className="row">
      <div className="col-4 boxes">{props.task}</div>
      <div className="col-4 boxes">{props.date}</div>
      <div className="col-2 buttons"><button type="button" className="btn btn-danger">Delete</button></div>
    </div>
  </div> 
}

export default Record;