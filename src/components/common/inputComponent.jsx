const InputComponent = (props) =>
{
    return(
        <input type={props.type} value={props.value} onChange={props.HandleOnChange} placeholder={props.placeholder} />
    )
}
export default InputComponent;