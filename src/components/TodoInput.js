import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const TodoInput = () => {
    return (
        <div className='row'>
        <div className='todo_input'>
            <Stack direction="row" spacing={4}>
                <TextField sx={{ width:'1000px'}}id="outlined-basic" label="Add your item in Todo-List" variant="outlined" />
                <Button sx={{ bgcolor: 'rgb(38, 115, 115)' }} variant="contained" color="primary">
                    < AddIcon />
                </Button>
            </Stack>
        </div>
        </div>
    )
}

export default TodoInput
