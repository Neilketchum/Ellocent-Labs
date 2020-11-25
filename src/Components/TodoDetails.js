import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Link,
    useParams
} from "react-router-dom";
import {useSelector} from "react-redux"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import "./Styles/TodoDetails.css"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
export default function TodoDetails() {
    let { id } = useParams();
    const classes = useStyles();

    const todos =  useSelector(state=>state.todos)
    
    const todo = todos.todos.filter(todo=>parseInt(todo.key) === parseInt( id))
        
    console.log()
  
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to = "/" style={{ textDecoration: 'none',color:"inherit" }}>
                            <ArrowBackIosIcon/>
                        </Link> 
                    </IconButton>
                
                </Toolbar>
            </AppBar>
           
            <div class="card-container">
                
                <div class="card">
                    <h2 class="card__title">{todo[0].title}</h2>
                    <p className = "card__desc">{todo[0].description}</p>
                    <div className  = "card__details">
                        <p class="card__date">Due Date - {todo[0].date} </p>
                        <p className = "card__status">Status  - {todo[0].status}</p>
                    </div>
                   
                </div>
                
            </div>
           
                
        </div>
    )
}
