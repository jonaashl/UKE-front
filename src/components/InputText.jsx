const InputText = (props) => {
    return (
        <input
            type="text"
            placeholder="Skriv inn et romersk tall! ex: VXI"
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default InputText
