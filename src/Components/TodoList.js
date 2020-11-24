import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Styles/TodoList.css"
import { Typography } from '@material-ui/core';
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
   
    
    return (

        <div className = "TodoList">
                <Grid container spacing = {3} >
                {todos.todos.map(todo => (
                    <Grid xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <div className = "TodoList__item">
                            <div className = "TodoList__item__title">
                                <Typography variant="h4">
                                 {todo.title}
                                </Typography>
                                
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
                </Grid>
          
        </div>
    )
}

export default TodoList
