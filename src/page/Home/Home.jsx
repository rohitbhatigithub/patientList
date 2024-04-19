import React, { useEffect } from "react";
import Main from "../../components/main/Main";

const Home = ({
    patientData,
    setActiveTab,
    patientDetail,
    setPatientDetail,
    PatientList,
}) => {
    useEffect(() => {
        PatientList();
    }, [PatientList]);
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

export default Home;
