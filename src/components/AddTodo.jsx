import {useState} from "react";
import {useDispatch} from "react-redux";
import {addtodo} from "../redux/todo/actions";
import { v4 as uuid } from 'uuid';
import InputComponent from "./common/inputComponent.jsx";
import {Box, Button ,Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles({
    formCont:{
        textAlign:'left',
        padding : '10px 20px'
    },
})
export function AddTodo() {
    const AddClasses =  styles();
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    function handleSubmit(event) {
        event.preventDefault();
        if(task === ""){return;}
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
        <Box className={AddClasses.formCont}>
            <Typography variant='h6'>New Todo</Typography>
            <form onSubmit={handleSubmit}>
                <InputComponent  type="text" value={task} HandleOnChange={handleChange} placeholder="New Todo" />
                <Button type='submit' color="secondary" sx={{border:1,borderRadius:0,marginLeft:'5px'}}>Add Todo</Button>
            </form>
        </Box>
    );
}
