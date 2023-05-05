import { useState } from "react"
import InputText from "../components/InputText"
import InputSubmitButton from "../components/InputSubmitButton"
import ConvertedResultDisplay from "../components/ConvertedResultDisplay"
import Footer from "../components/Footer"
import Header from "../components/Header"

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
            <div>
                <Header />
            </div>
            <div className="osg-grid">
                <div className="osg-grid__column--12">
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-beige-dark">
                        <ConvertedResultDisplay value={normalNumber} />
                    </div>
                </div>
                <div className="osg-grid__column--12">
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-yellow">
                        <InputText value={romanNumeral} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="osg-grid__column--12">
                    <div className="osg-padding-3 osg-text--align-center osg-color-bg-blue-light">
                        <InputSubmitButton label="Kalkuler" onClick={handleSubmit} />
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
