import { useState } from "react"
import InputText from "../components/InputText"
import InputSubmitButton from "../components/InputSubmitButton"
import ConvertedResultDisplay from "../components/ConvertedResultDisplay"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RomanNumeralConverter from "../components/RomanNumeralConverter"
import InformationCard from "../components/InformationCard"

const MainView = () => {
    const [romanNumeral, setRomanNumeral] = useState("")
    const [normalNumber, setNormalNumber] = useState(null)

    const handleInputChange = (event) => {
        setRomanNumeral(event.target.value)
    }

    const handleSubmit = () => {
        if (romanNumeral.trim().length === 0) {
            alert("Input feltet er tomt!")
            console.log("Input field is empty");
        } else {
            const regex = /^[IVXLCDM\s]*$/
            if (!regex.test(romanNumeral)) {
                alert("Ugyldige tegn i input feltet!")
                console.log("Invalid characters in input field");
            } else {
                const numberValue = RomanNumeralConverter({ romanNumeral })
                setNormalNumber(numberValue)
            }
        }
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="osg-grid">
                <div className="osg-grid__column--12">
                    <InformationCard />
                </div>
                <div className="osg-grid__column--12">
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-yellow">
                        <InputText value={romanNumeral} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="osg-grid__column--12">
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-white">
                        <InputSubmitButton label="Kalkuler" onClick={handleSubmit} />
                    </div>
                </div>
                <div className="osg-grid__column--12">
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-beige-dark">
                        <ConvertedResultDisplay value={normalNumber} />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainView
