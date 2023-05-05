// import "../custom-osg.scss"

const InputText = (props) => {
    return (
        <div className="osg-input">
            <label className="osg-input__label">
                Skriv inn et romertall og trykk på knappen
                <input
                    className="osg-input__input"
                    type="text"
                    placeholder="Skriv inn et romersk tall! ex: VXI"
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
        </div>
    )
}

export default InputText
