import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Profile from "./page/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [patientData, setPatientData] = useState([]);
    const [patientInfo, setPatientInfo] = useState();
    const [activeTab, setActiveTab] = useState("/");
    console.log(patientInfo);
    const API = "https://assessment.banoskolar.com/api/patientsList";

    useEffect(() => {
        const PatientList = async () => {
            try {
                const data = await axios.get(API);
                setPatientData(() => data.data.patients);
            } catch (error) {
                console.log(error);
            }
        };
        PatientList();
    });

    return (
        <>
            {patientData.length == 0 ? (
                <div>Loading</div>
            ) : (
                <div className="h-screen w-full">
                    <BrowserRouter>
                        <Navbar
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Home
                                        patientData={patientData}
                                        setPatientInfo={setPatientInfo}
                                        setActiveTab={setActiveTab}
                                    />
                                }
                            />

                            <Route
                                path="/profile"
                                element={<Profile patientInfo={patientInfo} />}
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
            )}
        </>
    );
}

export default App;
