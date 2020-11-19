import React from 'react'
import firebase from '../Firebase'

export default function Todo({ todo }){

  const completedStyle = {
        fontStyle: "italic",
        opacity: 0.4,
        textDecoration: "line-through"
    }

  const deleteTodo = () => {
    const todoRef = firebase.database().ref('todo')
    setTimeout(() => {
      todoRef.child(todo.id).remove()
    }, 500)
  }
  const completeTodo = () => {
    const todoRef = firebase.database().ref('todo')
    todoRef.child(todo.id).update({
      completed: !todo.completed
    })
    console.log(todo.completed)
  } 
  return(
    <div className="todo-item">
      <div className="task">
        <input type="checkbox" onClick={completeTodo} />
        <p style={todo.completed ? completedStyle:null}>{todo.title}</p>
      </div>
      <div className="buttons">
        <button className="del-btn" onClick={deleteTodo}><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
  )
}