import {useState} from "react";
import {useId} from "react";

export function Form() {
    const [task, setTask] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const todo = {
            id:useId(),
            task:task,
            status:false,
        }
        setTask('');
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