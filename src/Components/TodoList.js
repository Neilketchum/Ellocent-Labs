import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Styles/TodoList.css"
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {showUpdate, opKey, deleteTodo} from "../Actions/index"

import CancelIcon from '@material-ui/icons/Cancel';
import UpdateTodo from './updateTodo';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin:"30px",
        height:"300px",
        
        
    },
}));

function TodoList() {
    
    const todos = useSelector(state => state.todos);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleCanel = (e)=>{
        // dispatch(opKey(e));
        dispatch(deleteTodo(e));
        // dispatch(opKey(null))

    }
    const handleEdit = (e) =>{
        dispatch(opKey(e));
        dispatch(showUpdate())
        dispatch(opKey(null))
    }
    
    return (

        <div className = "TodoList">
                
                {todos.showUpdate?<UpdateTodo />:<h2><Grid container spacing = {3} >
                {todos.todos.map(todo => (
                    <Grid xs={12} sm={6}>
                    <Paper className={classes.paper} key = {todo.key}>
                        <div className = "TodoList__item">
                            <div className = "TodoList__item__title">
                                <div className = "TodoList__item__title__title">
                                    <Typography variant="h4">
                                    {todo.title} 
                                    </Typography>
                                </div>
                                <div className = "TodoList__item__title__icon" id = {todo.key} onClick = {(e)=>handleEdit(todo.key)} >
                                    <EditIcon style = {{marginRight:"8px",color:"#002884"}} />
                                    
                                </div>
                                <div>
                                    <CancelIcon style = {{color:"#ba000d"}} onClick = {(e)=>handleCanel(todo.key)}/>
                                </div>
                                
                            </div>
                            <div className = "TodoList__item__desc" >
                                {todo.description}  
                            </div>
                            <div>
                               Status - {todo.status}
                            </div>
                            
                            
                        </div>
                        
                    </Paper>
                    </Grid>
                ))}
                </Grid></h2>}
          
        </div>
    )
}

export default TodoList
