// import "../custom-osg.scss"

const InputText = (props) => {
    return (
        <div className="osg-input">
            <label className="osg-input__label">
                Skriv inn et romertall og trykk på knappen
                <input
                    className="osg-input__input"
                    type="text"
                    maxLength={20}
                    placeholder="Skriv inn et romersk tall! ex: XIV"
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
        </div>
    )
}

export default InputText
