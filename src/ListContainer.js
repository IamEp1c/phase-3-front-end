import React from 'react'
import { useEffect, useState } from 'react'
import List from './List'

function ListContainer({handleFetch, listsANDtasks}) {


useEffect(() => {
  handleFetch()
}, [])

  const renderedLists = listsANDtasks.map(list => {
    return <List key={list.id} list = {list}/>
  })

  return (
    <div>{renderedLists}</div>
  )
}

export default ListContainer; 
