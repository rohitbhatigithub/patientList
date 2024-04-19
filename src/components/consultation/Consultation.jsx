import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { HiClipboardList } from "react-icons/hi";
const Consultation = () => {
    return (
        <div className="bg-white w-full rounded-lg  scrollbar-thin scrollbar-track-slate-200   scrollbar-thumb-black overflow-y-auto">
            <div className="p-4 ">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <div className="text-xl font-bold text-teal-800">
                            March 2024
                        </div>
                        <div>
                            <IoMdArrowDropdown className="w-8 h-6" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <AiFillPlusCircle />
                        </div>
                        <div>Add reminder</div>
                    </div>
                </div>

                {/* date */}
                <div></div>

                <div className="flex flex-col gap-2">
                    {" "}
                    <div className=" flex  items-center gap-3">
                        {/* logo */}
                        <div className="bg-blue-500 p-2 rounded-lg">
                            <FaCalendarAlt className="text-white" />
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex flex-col items-start ">
                                <div className="text-base font-semibold">
                                    Consultation
                                </div>
                                <div className="text-xs font-medium">
                                    With Sam Lewis
                                </div>
                                <div className="text-xs text-gray-400">
                                    09:30 AM - 11:30 AM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex  items-center gap-3">
                        {/* logo */}
                        <div className="bg-blue-500 p-2 rounded-lg">
                            <FaCalendarAlt className="text-white" />
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex flex-col items-start ">
                                <div className="text-base font-semibold">
                                    Consultation
                                </div>
                                <div className="text-xs font-medium">
                                    With Sam Lewis
                                </div>
                                <div className="text-xs text-gray-400">
                                    09:30 AM - 11:30 AM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex  items-center gap-3">
                        {/* logo */}
                        <div className="bg-blue-500 p-2 rounded-lg">
                            <FaCalendarAlt className="text-white" />
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex flex-col items-start ">
                                <div className="text-base font-semibold">
                                    Consultation
                                </div>
                                <div className="text-xs font-medium">
                                    With Sam Lewis
                                </div>
                                <div className="text-xs text-gray-400">
                                    09:30 AM - 11:30 AM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex  items-center gap-3">
                        {/* logo */}
                        <div className="bg-blue-500 p-2 rounded-lg">
                            <FaCalendarAlt className="text-white" />
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex flex-col items-start ">
                                <div className="text-base font-semibold">
                                    Consultation
                                </div>
                                <div className="text-xs font-medium">
                                    With Sam Lewis
                                </div>
                                <div className="text-xs text-gray-400">
                                    09:30 AM - 11:30 AM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
