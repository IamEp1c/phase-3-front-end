import React from 'react'

function List({key, list}) {

   const {deadline, id, tasks, title} = list

  const allTasks = tasks.map(task =>{
      return <p>{task.description}</p>
  })

  return (
    <div>
        <h1>{title}</h1>
        <em><h2>deadline: {deadline}</h2></em>
        <p>{allTasks}</p>
        

    </div>
  )
}

export default List; 
