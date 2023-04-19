import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTask} from "../../redux/todo/actions/index.js";

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
                <input value={task} onChange={(e)=>settask(e.target.value)}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}