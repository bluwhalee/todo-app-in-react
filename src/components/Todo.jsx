
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
        textAlign: 'left',
        padding: '10px 40px',
    },
    descText: {
        borderBottom:'1px solid',
        display:'block',
        p:'10px',
        marginBottom : '20px',
    },
    todoContainer: {

        padding: '0px 0px',
        color: '#F7F1F1',
    },
    taskContainer: {
        background: '#FF7776',
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        padding:'5px 10px'
    },
    updateForm:{
      margin:'10px'
    },

})
export function Todo() {
    const todoClasses = useStyles();
    const todos = useSelector((state) => state.todoOperationsReducer);
    const Dispatch = useDispatch();
    const [updateForm,setUpdateForm] = useState(false);
    return (
        <Box className={todoClasses.mainCont}>
            <Box className={todoClasses.innerContainer}>
                <Box className={todoClasses.titleContainer}>
                    <Typography variant='h4'>Todo App</Typography>
                    <Typography variant='p' className={todoClasses.descText} >A simple React Todo List app</Typography>

                </Box>
                {todos.map((todo)=>{

                    return(
                        <Box key={todo.id} className={todoClasses.todoContainer}>

                            <Box className={todoClasses.taskContainer}>

                                <Box>
                                    <p style={todo.status?{textDecoration:"line-through"}:{textDecoration:"none"}} onClick={()=>{console.log(23);Dispatch(toggleStatus(todo.id))}} >{todo.task}</p>
                                </Box>
                                <Box>
                                    <EditIcon onClick={()=>setUpdateForm((prev) => ({...prev,[todo.id]:!prev[todo.id]}))}/>
                                    <DeleteIcon onClick={()=>Dispatch(removeTask(todo.id))} />
                                </Box>
                            </Box>
                            {updateForm[todo.id]?
                                <Box className={todoClasses.updateForm}>
                                    <UpdateTaskForm todo={todo} />
                                </Box>:<h1></h1>
                            }

                        </Box>
                    )}
                )}
                <AddTodo />
                <Button sx={{
                    background: "#f44336",
                    color: "#ffffff",
                    borderColor: "#f44336",
                    height: 48,
                    "&:hover": {
                        backgroundColor: "#d32f2f",
                        borderColor: "#d32f2f",
                    },
                }} variant="contained" color="secondary" onClick={()=>Dispatch(delAllTasks())}>Delete All</Button>
            </Box>
        </Box>
        )
}
