import {TextField} from "@mui/material";

const InputComponent = (props) =>
{
    return(
        <TextField onChange={props.HandleOnChange} value={props.value} placeholder={props.placeholder}/>
    )
}
export default InputComponent;