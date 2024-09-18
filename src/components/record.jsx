function Record({onDeleteClick, onChangeData}){
    return <div className="todoInput">
  
  <div>
      {onChangeData.map((item, index) => (
          <div className="row todoInput" key={index}>
            <div className="col-4 boxes info">{item.task}</div>
            <div className="col-4 boxes info">{item.date}</div>
            <div className="col-2 buttons">
              <center><button type="button" className="btn btn-danger" onClick={()=>onDeleteClick(index)}>Delete</button></center>
            </div>
          </div>
        ))}
  </div>
</div> 
}

export default Record;