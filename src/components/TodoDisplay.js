import React from 'react'
import Todo from './Todo'
const TodoDisplay = ({ List, deleteTask }) => {

  return (
    <div className='todoItems'>
      {
        List.map((todo) => {
          return (   // yha pr usecontext ka use krke dekhna h
            <Todo todo={todo} deleteTask={deleteTask} />
          )
        })
      }
    </div>
  )
}

export default TodoDisplay
