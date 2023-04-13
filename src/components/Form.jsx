import {useState} from "react";
import {useId} from "react";

export function Form() {
    const [task, setTask] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        setTask('');
    }

    function handleChange(event) {
        setTask(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task:
                <input type="text" value={task} onChange={handleChange} />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
}