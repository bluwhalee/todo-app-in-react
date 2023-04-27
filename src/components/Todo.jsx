
// External libraries
import { Button, Box, Typography } from "@mui/material";
import {makeStyles} from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Internal components
import { AddTodo } from "./AddTodo.jsx";
import { UpdateTaskForm } from "./common/UpdateTaskForm.jsx";

// Local state
import { delAllTasks, removeTask, toggleStatus } from "../redux/todo/actions/index.js";
import bgimg from '../assets/pexels-codioful-(formerly-gradienta)-7130494.jpg'

const useStyles = makeStyles({
    mainCont:
    {
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundImage: 'url("src/assets/pexels-codioful-(formerly-gradienta)-7130494.jpg")',
        backgroundSize: 'cover'
    },
    innerContainer: {
        background: '#FE6666',
        padding: '10px 0px',
        minWidth  : '500px',
        boxShadow: '-14px -14px 0px -2px rgba(0,0,0,0.15)',
        WebkitBoxShadow: '-14px -14px 0px -2px rgba(0,0,0,0.15)',
        MozBoxShadow: '-14px -14px 0px -2px rgba(0,0,0,0.15)',

    },
    titleContainer: {
        display:'flex',
        textAlign:'left',
        justifyContent:'space-between',
        alignItems:'flex-end',
        padding: '10px 40px',
    },
    descText: {
        borderBottom:'1px solid',
        display:'block',
        p:'10px',
        marginBottom : '20px',
    },
    todoInnerContainer: {
        background: '#ff7776',
        padding: '0px 40px',
        color: '#F7F1F1',
        margin:'2px 0px'
    },
    taskContainer: {
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        padding:'10px 10px'
    },
    updateForm:{
      margin:'10px 0px',
      padding: '0px 40px',
      background: '#FE6666',
    },
})
export function Todo() {
    const todoClasses = useStyles();
    const todos = useSelector((state) => state.todoOperationsReducer);
    const Dispatch = useDispatch();
    const [updateForm,setUpdateForm] = useState(-1);
    return (
        <Box className={todoClasses.mainCont}>
            <Box className={todoClasses.innerContainer}>
                <Box className={todoClasses.titleContainer}>
                    <Box>
                        <Typography variant='h4'>Todo App</Typography>
                        <Typography variant='p' className={todoClasses.descText} >A simple React Todo List app</Typography>
                    </Box>
                    {todos.length!==0 && <Button type='submit' color="secondary" sx={{'&:hover': {cursor: 'pointer',},height:'default', border:1,borderRadius:0,marginLeft:'5px'}} onClick={()=>Dispatch(delAllTasks())}>Delete All</Button>}
                </Box>
                {todos.map((todo)=>{
                    return(
                        <Box key={todo.id}>
                            <Box  className={todoClasses.todoInnerContainer}>
                                <Box className={todoClasses.taskContainer}>
                                    <Box>
                                        <Typography variant='p' sx={{textDecoration: todo.status?'line-through':'none','&:hover': {cursor: 'pointer',}}} onClick={()=>{console.log(23);Dispatch(toggleStatus(todo.id))}}>{todo.task}</Typography>
                                        </Box>
                                    <Box>
                                        <EditIcon sx={{'&:hover': {cursor: 'pointer',}}} onClick={()=>{setUpdateForm((prev) => {
                                            return prev === todo.id ? -1 : todo.id;
                                        });} }/>
                                        <DeleteIcon sx={{'&:hover': {cursor: 'pointer',}}} onClick={()=>Dispatch(removeTask(todo))} />
                                    </Box>
                                </Box>
                            </Box>
                            {updateForm === todo.id &&
                                <Box className={todoClasses.updateForm}>
                                    <UpdateTaskForm todo={todo} />
                                </Box>
                            }
                        </Box>
                    )}
                )}
                <AddTodo />
            </Box>
        </Box>
        )
}
