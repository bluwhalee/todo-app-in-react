import {TextField} from "@mui/material";
const InputComponent = (props) =>
{
    return(
        <TextField sx={{flexGrow:1, bgcolor:'#F7F1F1', height:'40px',"& fieldset": { border: 'none', p:'0px',height:'40px' }, "& input":{p:'7px 10px'}}} onChange={props.HandleOnChange} value={props.value} placeholder={props.placeholder} multiline={false}/>
    )
}
export default InputComponent;
