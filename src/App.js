import React from 'react'
import ToDoList from './components/ToDoList'
import './css/App.css'
import Header from './components/Header'

function App() {
  return (
    <div className='main'>
      <Header/>
      <ToDoList/>
    </div>
  )
}

export default App
