const InputSubmitButton = (props) => {
    return (
        <button className="osg-button" onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default InputSubmitButton
