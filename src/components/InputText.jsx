import "../styles/inputStyle.css"
const InputText = (props) => {
    return (
        <div className="osg-input">
            <label className="osg-input__label">
                Skriv inn et romertall og trykk på knappen *
                <input
                    className="osg-input__input"
                    type="text"
                    maxLength={20}
                    placeholder="*Skriv inn et romertall - ex: XIV"
                    aria-describedby="required-1"
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
            <div className="osg-input__required" id="required-1">
                * Nødvendig
            </div>
        </div>
    )
}

export default InputText
