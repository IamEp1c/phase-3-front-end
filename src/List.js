import React from 'react'

function List({list, handleFetch, }) {

    

   const {deadline, id, tasks, title} = list

    function handleDelete(id){
        console.log(id)
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: 'DELETE'
        }).then(handleFetch)
    }

    function handleToggle(id){
        fetch(`http://localhost:9292/complete/${id}`)
        .then(handleFetch())
    
    }

  const allTasks = tasks.map(task =>{
      return <p>
      <button onClick={() => handleDelete(task.id)}>&times;</button>
      <p>{task.description}</p>
      <input type={"checkbox"} onChange={() => handleToggle(task.id)}
      checked={task.completed}/>
      </p>
  })

  return (
    <div>
        <h1>{title}</h1>
        <p>{allTasks}</p>
        

    </div>
  )
}

export default List; 
