import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListContainer from './ListContainer';
import TaskForm from './TaskForm';


function App() {


  const [listsANDtasks, setListsANDtasks] = useState([])

  function handleFetch(){
    // debugger
    fetch("http://localhost:9292/lists")
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setListsANDtasks(data)
    })
  }


  

  return (
    <div className="App">
      <em><h1>Non CSS task maker!</h1></em>
      <ListContainer handleFetch = {handleFetch} listsANDtasks={listsANDtasks}/>
      <TaskForm handleFetch = {handleFetch} listANDtasks = {listsANDtasks}/>
    </div>
  );

}

export default App;
