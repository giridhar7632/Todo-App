---
name: 'Todo App'
description: 'Create a full stack Todo app using React and Firebase'
author: '@giridhar7632'
img: 'https://cloud-2nf3f60u4.vercel.app/0todo_app.png'
---

# Todo App

The combination of React and Firebase can move web applications to complete next level. In this workshop, we are going to create an awesome full stack Todo app using React for front-end and Firebase realtime database as back-end. By the end of this workshop, you will learn about implementing CRUD operations using Firebase. 

Take a peek at what we are going to build in this workshop. :point_down:

![Final todo app](https://cloud-2nf3f60u4.vercel.app/0todo_app.png)

Check out [Live Demo](https://Todo-App-Final.giridharhackclu.repl.co) and [Source Code](https://repl.it/@Giridharhackclu/Todo-App-Final#src/App.js). 

## Prerequisites

- You should have a basic understanding of HTML, CSS, and JavaScript.
- Some concepts of ES6 feature of JavaScript.
- You should know some fundamentals of React and React Hooks. 
- It's also a benefit to have a little bit of knowledge about Firebase. I recommend to complete [this]() workshop for knowledge about Firebase Realtime Database.

## Coding Environment

We will be using [Repl.it](https://repl.it) for building our project. [Repl.it](https://repl.it) is an online code editor where you can code in different languages without any installations.

Fork this starter repl [here](https://repl.it/@Giridharhackclu/todo-app-starter#src/App.js). It contains `create-react-app` and `firebase` installed. It also contains all the styles required so that we can concentrate on React and Firebase.

After forking press the `Run` button on the top. If you an output something like this, you are good to go.

![starter template](https://cloud-5vj1vtivl.vercel.app/0todo-starter-template.png)

## Creating a Firebase Project

Now create a [Firebase](https://firebase.google.com) account. You can access with your Google account

> **Firebase**: Google's Firebase is Backend-as-a-Service(BaaS), which makes us easy to add backend to our applications with some knowledge of server-side coding.

We are going to use Firebase Realtime Database as a database for our Todo App. 

The **Firebase Realtime Database** is cloud-hosted. Data is stored as JSON and synchronized in realtime to every connected client. We can store and sync data across all clients in realtime and remains available when your app goes offline.

Open [Firebase](https://firebase.google.com), after signing in, click the `Go to console` on the top right corner.

![firebase.com](https://cloud-swc0vwpr0.vercel.app/2firebase.png)

Then in your console, If you don't have any projects yet, it will be clean and empty. Click on Create project to add a new project.

![Firebase console](https://cloud-swc0vwpr0.vercel.app/0firebase_console.png)

Complete all the steps to create a firebase project. Name your project as you wish.

![Step-1](https://cloud-swc0vwpr0.vercel.app/6step-1.png)

After giving a name to your project click the `Continue` button to proceed further. Here is an optional step where you can use Google Analytics for your project, but in this workshop, you won't need it. Click on `Continue`.

![Step-2](https://cloud-swc0vwpr0.vercel.app/7step-2.png)

Finally hit `Create Project`. 

![Step-3](https://cloud-swc0vwpr0.vercel.app/8step-3.png)

:tada: Bingo!!! Your Firebase project will be created. You should see something like this.  

![Project created](https://cloud-swc0vwpr0.vercel.app/3project_created.png)

Click on `Continue` button.

Then let's configure our project with Firebase.

## Configuring Project with Firebase

Click on the Web`(</>)` icon.

![Project overview](https://cloud-swc0vwpr0.vercel.app/4project_overview.png)

Register your project with a name.

![Register name](https://cloud-swc0vwpr0.vercel.app/5register_app.png)

Here comes your app credentials. This code helps your project connect to your Firebase project. 

![Firebase config](https://cloud-swc0vwpr0.vercel.app/1firebase_sdk.png)

Make sure you copy the data.

Hop on to the forked Repl and create a new component `Firebase.js` inside the `src` folder.

In `Firebase.js` component, import `firebase` module, which is already installed and paste the data you copied from Firebase. Your `Firebase.js` file will be like this with **your API keys**.

```jsx
import firebase from 'firebase'           // <------------- importing firebase

var firebaseConfig = {
    apiKey: "AIzaSyCFg0consEutzxGmXo5zxcibJ2-ZUkGRps",
    authDomain: "todo-app-9f5a0.firebaseapp.com",
    databaseURL: "https://todo-app-9f5a0.firebaseio.com",
    projectId: "todo-app-9f5a0",
    storageBucket: "todo-app-9f5a0.appspot.com",
    messagingSenderId: "235166947516",
    appId: "1:235166947516:web:bca35a6c27a240d4bad8b9",
    measurementId: "G-JYGLVL9X55"
  }

firebase.initializeApp(firebaseConfig)          // <---------- initializing firebase
export default firebase
```

## Creating Database

Now let's create a database for our application.

Open the Firebase project console. Click on `Realtime Database` in `Develop` section on the left sidebar. 

![Project Sidebar](https://cloud-9uzz77u17.vercel.app/4project_overview-1.png)

You will se something like this :point_down:. Click on the `Create Database` button.

![Create Database](https://cloud-9uzz77u17.vercel.app/3create_database.png)

Set `Start in Test Mode` and click on `Enable`.

![Test Mode](https://cloud-9uzz77u17.vercel.app/5test_mode.png)

Then your Realtime Database will be created and initiated with `null`(nothing). 

![Realtime Database](https://cloud-9uzz77u17.vercel.app/2database.png)

Firebase intially allows anyone to read and write the database for 30 days. You can edit the rules anytime in `Rules` tab.

![Rules](https://cloud-9uzz77u17.vercel.app/1database_rules.png)

Now that we have database, let's create a Todo App using the database.

## CRUD Operations

According to [wikipedia](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)...

> “In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete. CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information; often using computer-based forms and reports. The term was likely first popularized by James Martin in his 1983 book managing the Data-base Environment. The acronym may be extended to CRUDL to cover listing of large data sets which bring additional complexity such as pagination when the data sets are too large to hold easily in memory.”

CRUD stands for Create, Read, Update and Delete.

These are the four most basic operations that can be performed with most traditional database systems and they are the backbone for interacting with any database. 

![CRUD](https://cloud-9uzz77u17.vercel.app/0crud_operations.png)

## Creating Todo App

Let's create the interface of Todo App to perform CRUD operations.

Create a new folder and name it as `components`. All of our Todo App components will be in this folder.

### Inputting a Todo

Create a new file in the `components` folder and name it as `Input.js`. Import `React` into the component and create the functional component and export it.

```jsx
import React from 'react'

function Input(){
  // code goes here
  }
 
 export default Input
```

Also import the `Firebase.js` file you created before at the top, so that we can use Firebase inside this component.

```jsx
import firebse from '../Firebase'
```

Create a `div` with a class of `input` inside the component.  

```jsx
import React from 'react'
import firebase from '../Firebase'

function Input(){
  return(
    <div className="input">
      // code goes here
    </div>
  )
}

export default Input
```

Add an `input` and a button `Add Todo` with class of `add-btn` inside the `div` element.

```html
<div className="input">
  <input type="text" placeholder="Enter a Todo..." />
  <button className="add-btn">
  <i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> 
  </button>
</div>
```

Here, `<i className="fa fa-plus-circle">` is the [plus icon](https://fontawesome.com/v4.7.0/icon/plus-circle) from [font awesome](https://fontawesome.com/v4.7.0/icons/) for styling. 

Form elements like `<input>`, `<select>` and `<textarea>` in React are slightly different from those of HTML. In HTML, they responsible on their own to handle the user input and update their respective values. But in React, the forms are controlled by components using state. Learn more about React forms [here](https://reactjs.org/docs/forms.html).

Create a state value and update it everytime the input changes using `handleChange` function.

```jsx
import React, { useState } from 'react'  // <-------------- importing useState hook
import firebase from '../Firebase'

function Input(){
  const [task, setTask] = useState()   // <------------ creating state variable

  function handleChange(e){
    setTask(e.target.value)    // <---------- updating the state value
  }

  return(
    <div className="input">
      <input type="text" placeholder="Enter a Todo..." value={task} onChange={handleChange} />
      <button className="add-btn">
      <i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> 
      </button>
    </div>
  )
}

export default Input
```

### 'Create' operation

Let's add the entered data into the database when the user clicks the `Add Todo` button.

Add a `onClick` attributewhich invokes `handleClick` function.

```html
<button className="add-btn" onClick={handleClick} >
  <i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> 
</button>
```

Now let's write the `handleClick` function.

Data in Firebase is structured as collections which we can access through `references`.

```js
function handleClick() {
  const todoRef = firebase.database().ref('todo')  // <---------- creating a reference in database
  // code goes here
  }
```

To add data to database, you can use `set()` to save data to a specified reference, replacing any existing data at that path. Use the `push()` method to append data to a list in multiuser applications. The `push()` method generates a unique key every time a new child is added to the specified Firebase reference. By using these auto-generated keys for each new element in the list, several clients can add children to the same location at the same time without write conflicts. The unique key generated by `push()` is based on a timestamp, so list items are automatically ordered chronologically.

:warning: **Note**: Using `set()` overwrites data at the specified location, including any child nodes.

```js
function handleClick() {
  const todoRef = firebase.database().ref('todo')  
  const newTodoRef = todoRef.push()
  const todo = {
      task,
      completed: false
    }
  newTodoRef.set(todo)
  setTask("")             
}
```

Here :point_up_2:, we added the data that we get as input into database. By default the task was incomplete. After the data is added to database, the input field is cleared by setting `task` to empty string(`setTask("")`).

Your final `Input.js` will look like this.

```jsx
import React, { useState } from 'react'
import firebase from '../Firebase'

function Input(){
  const [task, setTask] = useState()

  function handleChange(e){
    setTask(e.target.value)
  }
  function handleClick(){
    const todoRef = firebase.database().ref('todo')  
    const newTodoRef = todoRef.push()
    const todo = {
      task,
      completed: false
    }
    newTodoRef.set(todo)
    setTask("")
  }

  return(
    <div className="input">
      <input type="text" placeholder="Enter a Todo..." value={task} onChange={handleChange} />
      <button className="add-btn" onClick={handleClick}>
      <i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> 
      </button>
    </div>
  )
}

export default Input
```


Now import `Input.js` into `App.js` and check your output by adding some data.

```jsx
import React from 'react'
import Input from './components/Input'   // <----------- importing Input.js
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Input />                        // <------------ rendering the component
    </div>
  );
}

export default App;
```

![Output with input]()

Looks good, doesn't it! :joy: 

![Database]()

The data you add through `input`, after clicking the button, will be appended to Firebase in realtime.

### Creating Todo List

Create a new component `TodoList.js` in the components folder. Import `React`, `Firebase`, create and export a functional component. 

```jsx
import React, { useState, useEffect } from 'react'
import firebase from '../Firebase'

function TodoList(){
  // code goes here
  return(
    <div className="todo-list">

    </div>
}

export default TodoList
```

Now we are going to read the data in the database, fetch it into an array and display on the screen.

Create a state variable `todoList`. This will be the empty array to which we add the data fetched from database.

```jsx
 const [todoList, setTodoList] = useState([])           // <-------- state variable 
```

We will read the data only once, after the component is rendered. To do that we use `useEffect` hook.

```jsx
useEffect(() => {
  // code goes here
}, [])
```

We have get the data in specified reference. To read data at a path and listen for changes, use the `on()` method of `firebase.database.Reference` to observe events. `on()` method is used to synchronize data in real-time. 

```jsx
useEffect(() => {
  const todoRef = firebase.database().ref('todo')
  // Syncronizing
  todoRef.on()

}, [])
```

The `on()` method takes two parameters-
1 The event type - how you control the level of synchronization from the real-time database.
1 The callback function - the event type above controls the callback function.

Here, we are going to use the `value` event.

---
Event: `value`
Typical usage: 'Read and listen for changes to the entire contents of a path.'
---
