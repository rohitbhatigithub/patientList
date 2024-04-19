import React, { useState } from "react";
import UserName from "../userName/UserName";
import Task from "../task/Task";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Main = ({ patientData, setPatientInfo, setActiveTab }) => {
    const nevigate = useNavigate();
    const [patientDetail, setPatientDetail] = useState();

    const patientShortDec = (ele, id) => {
        setPatientDetail(ele);
        setPatientInfo(() => ele);
        nevigate("/profile");
        setActiveTab("/profile");
    };
    return (
        <>
            <div className="bg-background px-4 ">
                {" "}
                <UserName name="Dr.Doe" />
            </div>

            <div className="bg-background p-2">
                {/* /first section */}

                <div className=" grid grid-cols-1  lg:grid-cols-2 bg-gray-200 gap-1 lg:gap-4">
                    <div>
                        <Task patientDetail={patientDetail} />
                    </div>

                    {/* second section */}
                    <div className="bg-white rounded-lg overflow-y-auto h-[87vh]">
                        <div className="">
                            <div className="">
                                <div className="  rounded-lg overflow-hidden">
                                    <ul className="divide-y divide-gray-200">
                                        {patientData.length !== 0 &&
                                            patientData.map((ele, id) => {
                                                return (
                                                    <li
                                                        className="p-3 flex justify-between items-center user-card"
                                                        onClick={() =>
                                                            patientShortDec(
                                                                ele,
                                                                id
                                                            )
                                                        }
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <img
                                                                className="w-10 h-10 rounded-full"
                                                                src="https://unsplash.com/photos/oh0DITWoHi4/download?force=true&w=640"
                                                                alt="Christy"
                                                            />
                                                            <div>
                                                                <div className="">
                                                                    <span className=" font-medium">
                                                                        {
                                                                            ele.name
                                                                        }
                                                                    </span>
                                                                    <div className="text-xs text-gray-400 ">
                                                                        {" "}
                                                                        18 March
                                                                        2024 |
                                                                        09:00 PM
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Button text="Clinical Record" />{" "}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
