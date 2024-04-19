import React, { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
const PatientDetails = () => {
    const [activeTab, setActiveTab] = useState("/Summery");
    const nevigate = useNavigate();

    const handleTabClick = (path) => {
        setActiveTab(path);
    };
    return (
        <div className="bg-white w-full rounded-lg shadow-xl border border-gray-200 p-2  ">
            <div className="p-2  h-auto">
                {/* heading  */}
                <div className="flex items-center justify-between">
                    {/* name */}
                    <div className="text-xl font-bold text-teal-800">
                        Next Patient's Details
                    </div>
                    {/* logo */}
                    <div
                        className="cursor-pointer"
                        onClick={() => nevigate("/profile")}
                    >
                        <CiShare1 />
                    </div>
                </div>

                {/* image  & details*/}
                <div className="flex flex-col items-center justify-center my-2">
                    <div className="flex items-center justify-center my-1">
                        <img
                            className=" w-[3rem] h-[3rem] rounded-full"
                            src={Avatar}
                            alt="pic"
                        />
                    </div>

                    {/* details */}
                    <div className="flex items-center flex-col my-1">
                        <div className="text-xl font-bold text-teal-800">
                            Patient xyz
                        </div>
                        <div className="flex items-center text-sm ">
                            <div>25 year old | </div>
                            <div className="flex items-center">
                                <div>
                                    {" "}
                                    <MdLocationPin />
                                </div>
                                <div className="text-teal-800 font-semibold">
                                    New York, USA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* extra details */}
                <div className=" text-center grid grid-cols-3  my-3 text-sm">
                    {/* blood */}
                    <div>
                        <div>Blood</div>
                        <div className="text-teal-800 font-bold">0+</div>
                    </div>
                    <div>
                        <div>Height</div>
                        <div className="text-teal-800 font-bold">16CM</div>
                    </div>
                    <div>
                        <div>Weight</div>
                        <div className="text-teal-800 font-bold">86Kg</div>
                    </div>
                </div>

                {/* details navbar */}
                <div className="my-4">
                    <div className="flex justify-center gap-4 my-1 lg:my-2 font-semibold text-center">
                        <div
                            className={`cursor-pointer text-xs lg:text-[1rem] ${
                                activeTab === "/Summery"
                                    ? "text-blue-500 underline"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("/Summery")}
                        >
                            Summery
                        </div>
                        <div
                            className={`cursor-pointer text-xs lg:text-[1rem] ${
                                activeTab === "/Condition"
                                    ? "text-blue-500 underline"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("/Condition")}
                        >
                            Condition
                        </div>
                        <div
                            className={`cursor-pointer text-xs lg:text-[1rem] ${
                                activeTab === "/Notes"
                                    ? "text-blue-500 underline"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("/Notes")}
                        >
                            Notes
                        </div>
                    </div>

                    <div className="text-xs text-gray-400">
                        You can also use these utility classes within your HTML
                        elements or in conjunction with other Tailwind CSS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;
