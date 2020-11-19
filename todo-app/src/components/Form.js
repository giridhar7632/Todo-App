import React, { useState } from 'react'
import firebase from '../Firebase'

export default function Form(){
  const [title, setTitle] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleClick = (e) => {
    const todoRef = firebase.database().ref('todo')
    const todo = {
      title,
      completed: false
    }
    todoRef.push(todo)
    setTitle("")
  }
  console.log(document.getElementsByClassName("input"));
  console.log(document.getElementsByTagName("input"));

  return(
    <div className="input">
      <input type="text" value={title} onChange={handleChange} placeholder="Enter a Todo..."/>
      <button className="add-btn" onClick={handleClick} disabled={!title}><i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> </button>
    </div>
  )
}