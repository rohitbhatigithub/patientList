import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeTab, setActiveTab }) => {
    const nevigate = useNavigate();

    const handleTabClick = (path) => {
        setActiveTab(path);
    };
    return (
        <div className="bg-brandGray w-full  h-10 flex justify-end  ">
            <div className="flex items-center gap-2 lg:gap-10">
                {/* home tab */}
                <div
                    className={`cursor-pointer text-xs lg:text-[1rem] ${
                        activeTab === "/" ? "text-blue-500 underline" : ""
                    }`}
                    onClick={() => handleTabClick("/")}
                >
                    <div onClick={() => nevigate("/")}>Home</div>
                </div>
                {/* consultrations tab */}
                <div
                    className={`cursor-pointer text-xs lg:text-[1rem] ${
                        activeTab === "/Consultrations"
                            ? "text-blue-500 underline"
                            : ""
                    }`}
                    onClick={() => handleTabClick("/Consultrations")}
                >
                    <div>Consultrations</div>
                </div>
                {/* profile tab */}
                <div
                    className={`cursor-pointer text-xs lg:text-[1rem] ${
                        activeTab === "/profile"
                            ? "text-blue-500 underline"
                            : ""
                    }`}
                    onClick={() => handleTabClick("/profile")}
                >
                    <div onClick={() => nevigate("profile")}>Profile</div>
                </div>
                {/* search icon */}
                <div className="cursor-pointer  ">
                    <CiSearch />
                </div>
                {/* notification icon */}
                <div className="cursor-pointer">
                    <IoMdNotificationsOutline />
                </div>
                {/* user Image */}
                <div className="cursor-pointer">
                    <img
                        className="rounded-full w-11 h-11 p-2 "
                        src="https://images.pexels.com/photos/21038404/pexels-photo-21038404/free-photo-of-passerby-on-the-escalator-of-the-hamburg-subway-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="user"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
