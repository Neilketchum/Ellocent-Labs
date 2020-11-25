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
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker } from "@material-ui/pickers";
import {updateTodo, showUpdate, opKey} from "../Actions/index"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function UpdateTodo() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [status, setstatus] = useState('');
    const todos = useSelector(state => state.todos);
    const key = todos.operationKey;
    const handleChange = (event) => {
        setstatus(event.target.value);
    };
    const handleSubmit = e =>{
        e.preventDefault();
        const todo = {
            key:key,
            title : title,
            description:description,
            status:status,
            date:selectedDate.toDateString()
        }
        
        
        dispatch(updateTodo(key,todo))
        dispatch(opKey(null))
        dispatch(showUpdate())
    } 
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
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
                            <MenuItem value={"Draft"}>Draft</MenuItem>
                            <MenuItem value={"Pending"}>Pending</MenuItem>
                            <MenuItem value={"In-progress"}>In Progress</MenuItem>
                            <MenuItem value={"Completed"}>Completed</MenuItem>
                        </Select>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                fullWidth
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Select Due Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                    <div className = "mainForm__btns">
                    <Button variant="contained" color="primary" type = "submit">
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => dispatch(showUpdate())}>
                        Close
                    </Button>
                    </div>
                    
                </form>
            </Grid>
        </div>
    )
}

export default UpdateTodo
