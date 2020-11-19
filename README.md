---
name: 'Todo App'
description: 'Create a full stack Todo app using React and Firebase'
author: '@giridhar7632'
img: 'https://cloud-2nf3f60u4.vercel.app/0todo_app.png'
---

# Todo App

The combination of React and Firebase can move web applications to complete next level. In this workshop, we are going to create an awesome full stack Todo app using React for front-end and Firebase realtime database as back-end. By the end of this workshop, you will learn about implementing CRUD operations using React. 

Take a peek at the final project. :point_down:

![Final todo app](https://cloud-2nf3f60u4.vercel.app/0todo_app.png)

Check out [Live Demo](https://Todo-App-Final.giridharhackclu.repl.co) and [Source Code](https://repl.it/@Giridharhackclu/Todo-App-Final#src/App.js). 

## Prerequisites

- You should have a basic understanding of HTML, CSS, and JavaScript
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

Then Let's configure our project with Firebase.

## Configuring Project with Firebase

Click on the Web`(</>)` icon.

![Project overview](https://cloud-swc0vwpr0.vercel.app/4project_overview.png)

Register your project with a name.

![Register name](https://cloud-swc0vwpr0.vercel.app/5register_app.png)

Here comes your app credentials. This code helps your project connect to your Firebase project. 

![Firebase config](https://cloud-swc0vwpr0.vercel.app/1firebase_sdk.png)

Make sure you copy the data.

Hop on to the forked Repl and create a new component `Firebase.js` inside thr `src` folder.

First of all import `firebase` module, which is already installed and paste the data you copied from Firebase. Your Firebase.js file will be like this with **your API keys**.

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



