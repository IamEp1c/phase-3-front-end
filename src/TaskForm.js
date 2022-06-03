import React from "react";
import {useState} from 'react';

function TaskForm({listANDtasks, handleFetch}){

const [description, setDescription] = useState('')
const [isCompleted, setIsCompleted] = useState('')
const [priority, setPriority] = useState('')

const [listId, setListId] = useState('')

function handleCheck(){
    setIsCompleted(!isCompleted)
}



function handleSubmit(e){
    e.preventDefault(); 
    const obj = {
    description: description,
    isCompleted: isCompleted,
    priority: priority,
    list_id: listId
    }
    fetch("http://localhost:9292/tasks", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    })
    .then(handleFetch())
}

function enterNumber(){
    setPriority(priority)
}

return (
<div> <h3>Create a task here!</h3>
    <form onSubmit={handleSubmit}>
    <label>Task description:</label>
    <input name="description" type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
    <br/>
    {/* <label>Task completed:</label>
    <input type="checkbox" checked={isCompleted} onChange={handleCheck}/>
    <br/> */}
    {/* <label>Task Priority:</label>
    <input name="priority" type="number" placeholder="Enter a priority number" value={priority} onChange={(e) => setPriority(e.target.value)}/> */}
    <br/>
<label name="list_lablel">Choose a category:</label>
<select onChange={(e) => setListId(e.target.value)} name="list_id">

<option disabled selected value> -- select an option -- </option> 

  {listANDtasks.map(eachList => <option value={eachList.id}>{eachList.title}</option>)}
</select>
<br/>




    <button>Click here to submit</button>



    </form>




</div>
   )
}


export default TaskForm; 