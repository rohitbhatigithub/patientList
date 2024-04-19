import React from "react";
import Button from "../Button/Button";
import { FaCalendarAlt } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { CiShare1 } from "react-icons/ci";
import PatientDetails from "../patientDetails/PatientDetails";
import Consultation from "../consultation/Consultation";

export default function Task({ patientDetail }) {
    return (
        <div className="  ">
            {/* first task */}
            <div className="grid grid-col-1 md:grid-cols-2 gap-2 lg:gap-4 items-start bg-white px-4 py-2 rounded-lg">
                <div className="w-[90%] ">
                    {/* heading */}
                    <div className="text-xl font-bold text-teal-800 mb-2">
                        Daily Read
                    </div>
                    {/* news Image */}
                    <div>
                        <img
                            className=" w-full h-[10rem] lg:w-[18rem] lg:h-[8rem] rounded-lg"
                            src="https://images.pexels.com/photos/2045600/pexels-photo-2045600.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="pic"
                        />
                    </div>

                    {/* image details */}
                    <div className="text-xs text-gray-400 text-justify my-1">
                        It's important to note that TDZ is a behavior specific
                        to let and const declarations,
                    </div>

                    {/* button */}
                    <div className="">
                        <Button text="Read more" />
                    </div>
                </div>

                <div>
                    {/* heading  */}

                    <div className="flex items-center justify-between mb-2">
                        <div className="text-xl text-teal-800 font-bold">
                            Today's Task
                        </div>
                        <div className="bg-brandBlue rounded-lg px-4 text-white font-semibold">
                            12
                        </div>
                    </div>

                    {/* consultation */}
                    <div className="flex flex-col items-start gap-2">
                        <div className="border w-full px-4  rounded-lg py-1">
                            <div className=" flex  items-center justify-between  ">
                                {/* logo */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500 p-2 rounded-lg">
                                        <FaCalendarAlt className="text-white" />
                                    </div>
                                    <div>
                                        <div className="flex flex-col items-start">
                                            <div className="font-medium text-sm">
                                                Consultation with George gill
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                11:30 AM
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cursor-pointer">
                                    <CiShare1 />
                                </div>
                            </div>
                        </div>
                        <div className="border w-full px-4  rounded-lg py-2">
                            <div className=" flex  items-center justify-between  ">
                                {/* logo */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500 p-2 rounded-lg">
                                        <GiMedicines className="text-white" />
                                    </div>
                                    <div>
                                        <div className="flex flex-col items-start">
                                            <div className=" text-sm font-medium">
                                                Consultation with George gill
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                11:30 AM
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cursor-pointer">
                                    <CiShare1 />
                                </div>
                            </div>
                        </div>
                        <div className="border w-full px-4  rounded-lg py-1">
                            <div className=" flex  items-center justify-between  ">
                                {/* logo */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500 p-2 rounded-lg">
                                        <GiMedicines className="text-white" />
                                    </div>
                                    <div>
                                        <div className="flex flex-col items-start">
                                            <div className=" text-sm font-medium">
                                                Consultation with George gill
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                11:30 AM
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cursor-pointer">
                                    <CiShare1 />
                                </div>
                            </div>
                        </div>
                        <div className="border w-full px-4  rounded-lg py-1">
                            <div className=" flex  items-center justify-between  ">
                                {/* logo */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500 p-2 rounded-lg">
                                        <GiMedicines className="text-white" />
                                    </div>
                                    <div>
                                        <div className="flex flex-col items-start">
                                            <div className=" text-sm font-medium">
                                                Consultation with George gill
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                11:30 AM
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cursor-pointer">
                                    <CiShare1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 my-2">
                <Consultation />
                <PatientDetails patientDetail={patientDetail} />
            </div>
        </div>
    );
}
