import {useState} from "react";
import {useDispatch} from "react-redux";
import {addtodo} from "../redux/todo/actions"
import { v4 as uuid } from 'uuid';
import InputComponent from "./common/inputComponent.jsx";

export function AddTodo() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    function handleSubmit(event) {
        event.preventDefault();
        const unique_id = uuid();
        const todo = {
            id:unique_id,
            task:task,
            status:false,
        }
        setTask('');
        dispatch(addtodo(todo))
    }
    function handleChange(event) {
        setTask(event.target.value);
    }
    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <InputComponent  type="text" value={task} HandleOnChange={handleChange} placeholder="Add new task" />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
