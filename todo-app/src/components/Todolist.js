import React, { useState, useEffect } from 'react'
import firebase from '../Firebase'
import Todo from './Todo'

export default function Todolist(){
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todoRef = firebase.database().ref('todo')
    todoRef.on("value", (snapshot) => {
      //console.log(snapshot.val())
      const todos = snapshot.val()
      const todoList = []
      for(let id in todos){
        todoList.push({id,...todos[id]})
      }
      console.log(todoList)
      setTodoList(todoList)
    })
  }, [])

  return(
    <div className="todo-list">
      {!todoList.length ? <div className="placeholder">Your Todos appear here...</div> : null}
      {todoList ? todoList.map((todo, i) => <Todo todo={todo} key={i}/>) : ''}
    </div>
  )
}