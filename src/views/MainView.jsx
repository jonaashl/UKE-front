import { useState } from "react"
import InputText from "../components/InputText"
import InputSubmitButton from "../components/InputSubmitButton"
import ConvertedResultDisplay from "../components/ConvertedResultDisplay"

const MainView = () => {
    const [romanNumeral, setRomanNumeral] = useState("")
    const [normalNumber, setNormalNumber] = useState(null)

    const handleInputChange = (event) => {
        setRomanNumeral(event.target.value)
    }

    const handleSubmit = () => {
        // Backend request for logic handling
    }

    return (
        <div>
            <ConvertedResultDisplay value={normalNumber} />
            <InputText value={romanNumeral} onChange={handleInputChange} />
            <InputSubmitButton label="Kalkuler" onClick={handleSubmit} />
        </div>
    )
}

export default MainView
