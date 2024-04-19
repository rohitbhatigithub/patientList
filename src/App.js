import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Profile from "./page/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [patientData, setPatientData] = useState([]);
    const [patientDetail, setPatientDetail] = useState();
    const [activeTab, setActiveTab] = useState("/");
    const API = "https://assessment.banoskolar.com/api/patientsList";
    const PatientList = async () => {
        try {
            const data = await axios.get(API);
            setPatientData(() => data.data.patients);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        PatientList();
    }, []);

    const updatePatient = async (payload) => {
        const URL = `http://assessment.banoskolar.com/api/patient-records/${payload.id}`;
        try {
            const data = await axios.put(URL, payload);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const hendleUpdatePatient = (patient) => {
        updatePatient(patient);
    };
    useEffect(() => {
        let patient = localStorage.getItem("patient");
        if (patient) {
            let p = JSON.parse(patient);
            console.log(p);
            setPatientDetail(p);
        }
    }, []);
    return (
        <>
            {patientData.length === 0 ? (
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="rounded-full p-10 border-t-4 border-black animate-spin"></div>
                </div>
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
                                        setActiveTab={setActiveTab}
                                        setPatientDetail={setPatientDetail}
                                        patientDetail={patientDetail}
                                        PatientList={PatientList}
                                    />
                                }
                            />

                            <Route
                                path="/profile"
                                element={
                                    <Profile
                                        hendleUpdatePatient={
                                            hendleUpdatePatient
                                        }
                                        setPatientDetail={setPatientDetail}
                                        patientInfo={patientDetail}
                                    />
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
            )}
        </>
    );
}

export default App;
