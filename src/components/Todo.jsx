import {AddTodo} from "./AddTodo.jsx"
import {useState} from "react";
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Typography, Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {delAllTasks,removeTask, toggleStatus} from "../redux/todo/actions/index.js";
import {UpdateTaskForm} from "./common/UpdateTaskForm.jsx";
export function Todo() {
    const todos = useSelector((state) => state.todoOperationsReducer);
    const Dispatch = useDispatch();
    const [updateForm,setUpdateForm] = useState(false);
    return (
        <div>
            <div className="innerContainer">
                <div className="titleContainer">
                    <Typography variant='h4'>Todo App</Typography>
                    <Typography variant='p' sx={{borderBottom:'1px solid', display:'block',p:'10px'}}>A simple React Todo List app</Typography>

                </div>
                {todos.map((todo)=>{

                    return(
                        <div className="taskContainer">
                            <Box display="flex" justifyContent="space-between" alignItems="center">

                                <div>
                                    <p style={todo.status?{textDecoration:"line-through"}:{textDecoration:"none"}} onClick={()=>{console.log(23);Dispatch(toggleStatus(todo.id))}} >{todo.task}</p>
                                </div>
                                <div>
                                    <EditIcon onClick={()=>setUpdateForm((prev) => ({...prev,[todo.id]:!prev[todo.id]}))}/>
                                    <DeleteIcon onClick={()=>Dispatch(removeTask(todo.id))} />
                                </div>
                            </Box>
                            {updateForm[todo.id]?<UpdateTaskForm todo={todo}/>:<h1></h1>}
                        </div>
                    )}
                )}
                <AddTodo />
                <Button sx={{
                    backgroundColor: "#f44336",
                    color: "#ffffff",
                    borderColor: "#f44336",
                    height: 48,
                    "&:hover": {
                        backgroundColor: "#d32f2f",
                        borderColor: "#d32f2f",
                    },
                }} variant="contained" color="secondary" onClick={()=>Dispatch(delAllTasks())}>Delete All</Button>
            </div>
        </div>
        )
}
