import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import AditionanDetails from "./page/AditionanDetails/AditionanDetails";
import { axiosClient } from "./api/axios";

function App() {
    const [patientData, setPatientData] = useState([]);
    const [patientDetail, setPatientDetail] = useState();
    const [activeTab, setActiveTab] = useState("/");
    const API = "api/patientsList";
    const getPatientList = async () => {
        try {
            const data = await axiosClient.get(API);
            setPatientData(() => data.data.patients);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getPatientList();
    }, []);

    const putUpdatePatient = async (payload) => {
        const URL = `api/patient-records/${payload.id}`;
        try {
            const data = await axios.put(URL, payload);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdatePatient = (patient) => {
        putUpdatePatient(patient);
    };
    useEffect(() => {
        let patient = localStorage.getItem("patient");
        if (patient) {
            setPatientDetail(JSON.parse(patient));
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
                                    <Dashboard
                                        patientData={patientData}
                                        setActiveTab={setActiveTab}
                                        setPatientDetail={setPatientDetail}
                                        patientDetail={patientDetail}
                                        getPatientList={getPatientList}
                                    />
                                }
                            />

                            <Route
                                path="/profile"
                                element={
                                    <AditionanDetails
                                        handleUpdatePatient={
                                            handleUpdatePatient
                                        }
                                        setPatientDetail={setPatientDetail}
                                        patientInfo={patientDetail}
                                    />
                                }
                            />
                            <Route path="*" element={<Dashboard />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            )}
        </>
    );
}

export default App;
