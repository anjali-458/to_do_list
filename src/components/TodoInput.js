import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';


const TodoInput = ({ addTask }) => {

    const [userInput, setUserInput] = useState({});

    const handleInput = (ele) => {
        setUserInput(ele.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

    return (
        <div className='row'>
            <div className='todo_input'>
                <Stack direction="row" spacing={4}>
                    <TextField onChange={handleInput} sx={{ width: '1000px' }} id="outlined-basic" label="Add your item in Todo-List" variant="outlined" />
                    <Button onClick={handleSubmit} sx={{ bgcolor: 'rgb(38, 115, 115)' }} variant="contained" color="primary">
                        < AddIcon />
                    </Button>
                </Stack>
            </div>
        </div>
    )
}

export default TodoInput
