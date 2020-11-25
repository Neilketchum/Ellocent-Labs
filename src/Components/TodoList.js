import React, { } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Styles/TodoList.css"
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { showUpdate, opKey, deleteTodo } from "../Actions/index"
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import UpdateTodo from './updateTodo';

import {


    Link,

} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: "30px",
        height: "300px",


    },
}));

function TodoList({ search }) {

    const todos = useSelector(state => state.todos);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleCanel = (e) => {
        // dispatch(opKey(e));
        dispatch(deleteTodo(e));
        // dispatch(opKey(null))

    }
    const handleEdit = (e) => {
        dispatch(opKey(e));
        dispatch(showUpdate())
        dispatch(opKey(null))
    }
    let renderTodos = todos.todos.filter(todo => todo.title.toLowerCase().substring(0, search.length) === search.toLowerCase())

    console.log(search)
    return (

        <div className="TodoList">

            {todos.showUpdate ? <UpdateTodo /> :

                <Grid container spacing={3} >
                    {renderTodos.map(todo => (


                        <Grid xs={12} sm={6}>
                            
                                <Paper className={classes.paper} key={todo.key}>
                                    <div className="TodoList__item">
                                        <div className="TodoList__item__title">
                                            <div className="TodoList__item__title__title">
                                                <Typography variant="h4">
                                                    {todo.title}
                                                </Typography>
                                            </div>
                                            <div className="TodoList__item__title__icon" id={todo.key} onClick={(e) => handleEdit(todo.key)} >
                                                <EditIcon style={{ marginRight: "8px", color: "#002884" }} />

                                            </div>
                                            <div>
                                                <CancelIcon style={{ color: "#ba000d" }} onClick={(e) => handleCanel(todo.key)} />
                                            </div>

                                        </div>
                                        <div className="TodoList__item__desc" >
                                            <div>
                                                {todo.description}
                                            </div>


                                        </div>
                                        <div>
                                            <div class="TodoList__Details">
                                                <div>
                                                    Status - {todo.status}
                                                </div>
                                                <div className = "TodoList__Details__btn">
                                                    <Button variant="contained" color="primary">
                                                        <Link to={`/${todo.key}`} style={{ textDecoration: 'none',color:"inherit" }}>
                                                            View Todo
                                                    
                                                        </Link>
                                                    </Button>
                                                </div>
                                                <div>
                                                    {todo.date}
                                                </div>
                                            </div>


                                        </div>


                                    </div>

                                </Paper>
                           
                        </Grid>




                    ))}
                </Grid>

            }

        </div>
    )
}

export default TodoList
