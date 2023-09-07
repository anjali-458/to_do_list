import React, { useState } from 'react'
import HeaderName from './components/HeaderName'
import TodoInput from './components/TodoInput'
import TodoDisplay from './components/TodoDisplay'
import data from './components/data.json'
const TodoList = () => {

  const [List, setList] = useState(data);

  const addTask = (userInput) => {
    let updated_list = [...List];
    updated_list = [...updated_list, { id: List.length + 1, task: userInput, complete: false }];
    setList([...updated_list]);
  };

  const deleteTask = (id) => {
    let updated_list = List;
    updated_list.splice(id - 1, 1);
    setList([...updated_list]);
  };

  return (
    <div className='main'>

      <HeaderName />

      <div className='display'>

        <TodoInput addTask={addTask} />

        <h3>Your Todo-List :</h3>

        <TodoDisplay List={List} deleteTask={deleteTask} />
      </div>

    </div>
  )
}

export default TodoList
