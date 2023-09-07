import React from 'react'
import { Button, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
const Todo = ({ todo, deleteTask }) => {
  return (
    <div className='todo'>
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <h4>{todo.task}</h4>
        <Button onClick={() => deleteTask(todo.id)} sx={{ bgcolor: 'rgb(38, 115, 115)' }} variant="contained" color="primary">
          <DeleteIcon />
        </Button>

      </Stack>
    </div>
  )
}

export default Todo
