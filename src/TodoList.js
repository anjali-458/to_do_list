import React from 'react'
import HeaderName from './components/HeaderName'
import TodoInput from './components/TodoInput'
import TodoDisplay from './components/TodoDisplay'
const TodoList = () => {
  return (
    <div className='main'>
      <HeaderName />
      <div className='display'>
        <TodoInput />
        <h3>Your Todo-List :</h3>
        <TodoDisplay />
      </div>

    </div>
  )
}

export default TodoList
