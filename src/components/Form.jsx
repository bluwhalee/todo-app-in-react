import {useState} from "react";
import {useId} from "react";
import {useDispatch} from "react-redux";
import {addtodo} from "../redux/todo/actions"
import { v4 as uuid } from 'uuid';

export function Form() {
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

                    <input type="text" value={task} onChange={handleChange} placeholder="Add new task" />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}