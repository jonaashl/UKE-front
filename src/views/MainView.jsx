import { useState } from "react"
import InputText from "../components/InputText"
import InputSubmitButton from "../components/InputSubmitButton"
import ConvertedResultDisplay from "../components/ConvertedResultDisplay"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InformationCard from "../components/InformationCard"

const MainView = () => {
    const [romanNumeral, setRomanNumeral] = useState("")
    const [normalNumber, setNormalNumber] = useState(null)

    const handleInputChange = (event) => {
        setRomanNumeral(event.target.value)
    }

    // handling what to do with the input from the user. Also filters user input.
    const handleSubmit = async () => {
        if (romanNumeral.trim().length === 0) {
            alert("Input feltet er tomt!")
            console.log("Input field is empty")
        } else {
            const regex = /^[IVXLCDM\s]*$/
            if (!regex.test(romanNumeral)) {
                alert("Ugyldige tegn i input feltet!")
                console.log("Invalid characters in input field")
            } else {
                // FRONTEND LOGIC FOR MANDATORY TASK - DO NOT REMOVE
                // const numberValue = RomanNumeralConverter({ romanNumeral })
                // setNormalNumber(numberValue)
                try {
                    const response = await fetch("https://localhost:7284/RomanNumeral", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ Numeral: romanNumeral }),
                    })
                    const normalNumberValue = await response.json()
                    setNormalNumber(normalNumberValue)
                } catch (error) {
                    console.log(error)
                    alert("en feil oppstod med backenden")
                }
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
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-yellow">
                        <InputSubmitButton label="Kalkuler" onClick={handleSubmit} />
                    </div>
                </div>
                <div className="osg-grid__column--12 osg-margin-bottom-5">
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-blue-light">
                        <ConvertedResultDisplay value={normalNumber} />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Footer />
            </div>
        </div>
    )
}

export default MainView
