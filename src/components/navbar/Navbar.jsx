import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
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
                <div>
                    <div
                        className="text-xs lg:text-[1rem]"
                        onClick={() => nevigate("/")}
                    >
                        Profile
                    </div>
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
                        src={Avatar}
                        alt="user"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
