import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import './Styles/TodoForm.css'
import { makeStyles } from '@material-ui/core/styles';
import { Input, TextareaAutosize, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function TodoForm() {
    const classes = useStyles();
    const [status, setstatus] = useState('');
    const handleChange = (event) => {
        setstatus(event.target.value);
    };
    return (
        <div className = "TodoForm">
            <Grid container direction="row" justify="center" alignItems="center" className="mainForm" >
                <form className="mainForm__div"  >
                    <Input placeholder="Title" style={{ width: "500px" }}></Input>
                    <br></br>
                    <br></br>
                    <TextareaAutosize style={{ width: "500px", height: "300px", resize: "none", padding: "12px" }} />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            onChange={handleChange}
                        >
                            <MenuItem value={"draft"}>Draft</MenuItem>
                            <MenuItem value={"pending"}>Pending</MenuItem>
                            <MenuItem value={"in-progress"}>In Progress</MenuItem>
                            <MenuItem value={"completed"}>Completed</MenuItem>
                        </Select>
                    </FormControl>
                    <div className = "mainForm__btns">
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary">
                        Close
                    </Button>
                    </div>
                    
                </form>
            </Grid>
        </div>
    )
}

export default TodoForm
