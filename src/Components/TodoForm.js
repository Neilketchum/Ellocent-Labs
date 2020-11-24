import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import './Styles/TodoForm.css'
import { useDispatch,useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Input, TextareaAutosize, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { uuid } from 'uuidv4';
import {addTodo} from "../Actions/index"
import {showForm} from "../Actions/index"
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
    const dispatch = useDispatch();
    const classes = useStyles();
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [status, setstatus] = useState('');
    const handleChange = (event) => {
        setstatus(event.target.value);
    };
    const handleSubmit = e =>{
        e.preventDefault();
        const todo = {
            key:uuid(),
            title : title,
            description:description,
            status:status
        }
        
        
        dispatch(addTodo(todo))
        dispatch(showForm())
    } 
    const todos = useSelector(state => state.todos);
    return (
        <div className = "TodoForm">
            <Grid container direction="row" justify="center" alignItems="center" className="mainForm" >
                <form className="mainForm__div"  onSubmit = {handleSubmit}>
                    <Input placeholder="Title" style={{ width: "500px" }} onChange = {(e)=>settitle(e.target.value)} value = {title}></Input>
                    <br></br>
                    <br></br>
                    <TextareaAutosize style={{ width: "500px", height: "300px", resize: "none", padding: "12px" }} value = {description} onChange = {(e)=>setdescription(e.target.value)} />
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
                    <Button variant="contained" color="primary" type = "submit">
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => dispatch(showForm())}>
                        Close
                    </Button>
                    </div>
                    
                </form>
            </Grid>
        </div>
    )
}

export default TodoForm
