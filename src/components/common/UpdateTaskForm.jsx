import {useState} from "react";
import {useDispatch} from "react-redux";
import {delAllTasks, updateTask} from "../../redux/todo/actions/index.js";
import InputComponent from "./inputComponent.jsx";
import {Button} from "@mui/material";

export const UpdateTaskForm = (props) => {
    const[task, settask] = useState(props.todo.task)
    const Dispatch = useDispatch();
    const handleSubmit = ()=>
    {
        const todo={id:props.todo.id,task:task}
         Dispatch(updateTask(todo))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputComponent value={task} HandleOnChange={(e)=>settask(e.target.value)}  />

                <Button type='submit' color="secondary" sx={{border:1,borderRadius:0,marginLeft:'5px'}}>Update</Button>
            </form>
        </div>
    )
}
