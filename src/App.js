import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListContainer from './ListContainer';
import TaskForm from './TaskForm';


function App() {


  const [listsANDtasks, setListsANDtasks] = useState([])

  function handleFetch(){
    fetch("http://localhost:9292/lists")
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setListsANDtasks(data)
      console.log(setListsANDtasks)
    })
  }

  

  return (
    <div className="App">
      <em><h1>Unconvential To Do List!</h1></em>
      <ListContainer handleFetch = {handleFetch} listsANDtasks={listsANDtasks}/>
      <TaskForm handleFetch = {handleFetch} listANDtasks = {listsANDtasks}/>
    </div>
  );

}

export default App;
