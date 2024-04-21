/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Main from "../../components/main/Main";

const Dashboard = ({
    patientData,
    setActiveTab,
    patientDetail,
    setPatientDetail,
    getPatientList,
}) => {
    useEffect(() => {
        getPatientList();
    }, []);
    return (
        <div>
            <Main
                patientData={patientData}
                setActiveTab={setActiveTab}
                patientDetail={patientDetail}
                setPatientDetail={setPatientDetail}
            />
        </div>
    );
};

export default Dashboard;
