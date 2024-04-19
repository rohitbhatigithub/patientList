import React from "react";
import Main from "../../components/main/Main";

const Home = ({ patientData, setPatientInfo, setActiveTab }) => {
    return (
        <div>
            <Main
                patientData={patientData}
                setPatientInfo={setPatientInfo}
                setActiveTab={setActiveTab}
            />
        </div>
    );
};

export default Home;
