import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import MainView from "./containers/MainView"

// Routing for potential expanding on the application.
function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainView />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
