import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import Button from "../../components/Button/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Avatar from "../../assets/avatar.png";
import InputField from "../../components/input/InputFiled";

const AditionanDetails = ({ handleUpdatePatient, patientInfo }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [editMode, seEditMode] = useState(false);
    const [editDetails, setEditDetails] = useState(patientInfo);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const editForm = () => seEditMode(!editMode);

    const hendleEditMode = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditDetails({ ...editDetails, [name]: value });
    };

    const hendleFormSubmit = (e) => {
        e.preventDefault();
        handleUpdatePatient(editDetails);
    };

    return (
        <div className="w-full relative ">
            <form onSubmit={hendleFormSubmit}>
                <div className="flex items-start gap-10  pl-2  ">
                    {/* sidebar */}
                    <div
                        className={`absolute lg:relative duration-300 h-[92.5vh] ${
                            !isOpen ? "w-[300px]" : "w-0"
                        } bg-white text-white`}
                    >
                        {isOpen ? (
                            <div className="text-black" onClick={toggleSidebar}>
                                <MdKeyboardDoubleArrowRight
                                    className="w-8 h-8"
                                    onClick={toggleSidebar}
                                />
                            </div>
                        ) : (
                            <div className="text-black" onClick={toggleSidebar}>
                                <MdKeyboardDoubleArrowRight
                                    className="w-8 h-8 rotate-180"
                                    onClick={toggleSidebar}
                                />
                            </div>
                        )}

                        {isOpen ? (
                            ""
                        ) : (
                            <div className="px-2">
                                <div className="flex items-center justify-center flex-col my-4">
                                    <div className="text-xl text-teal-800 font-bold">
                                        Patient Profile
                                    </div>
                                    {/* img */}
                                    <div>
                                        <img
                                            className="rounded-full w-16 h-16 p-2 "
                                            src={Avatar}
                                            alt="user"
                                        />
                                    </div>
                                    {/* patient name */}
                                    <div className="text-sm lg:text-lg text-teal-800 font-semibold">
                                        {editDetails.name}
                                    </div>
                                    {/* patient location */}
                                    <div className="flex items-center flex-col md:flex-row text-xs md:text-sm ">
                                        <div className="text-gray-500">
                                            {editDetails.age} year old |
                                        </div>
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

                                {/* gernal information */}
                                <div className="text-xs md:text-sm text-white bg-brandBlue py-1 px-1 lg:py-3 rounded-lg pl-1 lg:pl-4">
                                    General Information
                                </div>

                                {/* service list */}
                                <div>
                                    <ul className="text-gray-500 text-xs md:text-sm">
                                        <li className="my-2">
                                            Medical History
                                        </li>
                                        <li className="my-2">
                                            Consultation Notes
                                        </li>
                                        <li className="my-2">Action Plans</li>
                                        <li className="my-2">Files</li>
                                        <li className="my-2">
                                            Wearable Status
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Additional content */}
                    <div className="w-full">
                        <div
                            className=" flex items-center ml-16  lg:justify-end lg:m-2"
                            onClick={editForm}
                        >
                            {editMode ? (
                                <>
                                    <Button text="X" />
                                    <Button
                                        text="Save"
                                        type="submit"
                                        onClick={hendleFormSubmit}
                                    />
                                </>
                            ) : (
                                <Button text="Edit Information" />
                            )}
                        </div>
                        <div className="pt-8 pl-10 h-[85vh]  flex-col bg-white">
                            {/* Demographics */}
                            <div className="my-2">
                                <div className="text-xl font-bold text-teal-800 my-2">
                                    Demographics
                                </div>
                                <div className=" text-xs lg:text-sm text-gray-400">
                                    {/* name */}
                                    <div className="flex items-center gap-[2.4rem] lg:gap-[20rem] py-1 lg:py-2">
                                        <div>Name</div>
                                        {editMode ? (
                                            <InputField
                                                type="text"
                                                name="name"
                                                onChange={hendleEditMode}
                                                value={editDetails.name}
                                            />
                                        ) : (
                                            <div>{editDetails.name}</div>
                                        )}
                                    </div>

                                    {/* gender */}
                                    <div className="flex items-center gap-[2rem] lg:gap-[19.5rem] py-1 lg:py-2">
                                        <div>Gender</div>
                                        {editMode ? (
                                            <InputField
                                                type="text"
                                                name="gender"
                                                onChange={hendleEditMode}
                                                value={editDetails.gender}
                                            />
                                        ) : (
                                            <div>{editDetails.gender}</div>
                                        )}
                                    </div>
                                    {/* Date of birth */}
                                    <div className="flex items-centergap-6 py-1 gap-[2.8rem] lg:gap-[20.4rem] lg:py-2 ">
                                        <div>DOB</div>
                                        {editMode ? (
                                            <InputField
                                                type="date"
                                                name="dob"
                                                onChange={hendleEditMode}
                                                value={
                                                    editDetails.date_of_birth
                                                }
                                            />
                                        ) : (
                                            <div>
                                                {editDetails.date_of_birth}
                                            </div>
                                        )}
                                    </div>
                                    {/* age */}
                                    <div className="flex items-center py-1 gap-[3rem] lg:gap-[20.8rem]">
                                        <div>Age</div>
                                        {editMode ? (
                                            <InputField
                                                type="number"
                                                name="age"
                                                onChange={hendleEditMode}
                                                value={editDetails.age}
                                            />
                                        ) : (
                                            <div>{editDetails.age}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* contact information */}
                            <div className="my-2">
                                <div className="text-xl font-bold text-teal-80 my-2">
                                    Contact Information
                                </div>
                                <div className="text-xs lg:text-sm text-gray-400 lg:py-2">
                                    {/* Email */}
                                    <div className="flex items-center gap-[2.5rem] py-1 lg:gap-[20.8rem]">
                                        <div>Email</div>
                                        {editMode ? (
                                            <InputField
                                                type="email"
                                                name="email"
                                                onChange={hendleEditMode}
                                                value={editDetails.email}
                                            />
                                        ) : (
                                            <div>{editDetails.email}</div>
                                        )}
                                    </div>

                                    {/* phone */}
                                    <div className="flex items-center gap-[2.2rem] py-1 lg:py-2 lg:gap-[20.4rem]">
                                        <div>Phone</div>
                                        {editMode ? (
                                            <InputField
                                                type="text"
                                                name="phone"
                                                onChange={hendleEditMode}
                                                value={editDetails.phone}
                                            />
                                        ) : (
                                            <div>{editDetails.phone}</div>
                                        )}
                                    </div>
                                    {/* Address */}
                                    <div className="flex items-start gap-[1.8rem] py-2 lg:py-2 lg:gap-[19.8rem]">
                                        <div>Address</div>
                                        {editMode ? (
                                            <InputField
                                                className="border-2 h-6"
                                                type="text"
                                                name="address"
                                                onChange={hendleEditMode}
                                                value={editDetails.address}
                                            />
                                        ) : (
                                            <div className="h-6 text-left">
                                                {editDetails.address}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* insurance */}
                            <div>
                                <div className="text-xl font-bold my-4 text-teal-80">
                                    Insurance
                                </div>
                                <div className="text-xs lg:text-sm text-gray-400">
                                    {/* Member ID */}
                                    <div className="flex items-center py-1 gap-[1rem] lg:py-2 lg:gap-[19rem]">
                                        <div>Member ID </div>
                                        {editMode ? (
                                            <InputField
                                                type="number"
                                                name="id"
                                                onChange={hendleEditMode}
                                                value={editDetails.id}
                                            />
                                        ) : (
                                            <div>{editDetails.id}</div>
                                        )}
                                    </div>

                                    {/* Policy Holder */}
                                    <div className="flex items-center py-1 gap-[0.5rem] lg:py-2 lg:gap-[18.4rem]">
                                        <div>Policy Holder</div>
                                        {editMode ? (
                                            <InputField
                                                type="text"
                                                name="policy_holder"
                                                onChange={hendleEditMode}
                                                value={
                                                    editDetails.policy_holder
                                                }
                                            />
                                        ) : (
                                            <div>
                                                {editDetails.policy_holder}
                                            </div>
                                        )}
                                    </div>
                                    {/* Additional Info */}
                                    <div className="flex items-start py-1 gap-[0.5rem] lg:py-2 lg:gap-[18rem]">
                                        <div>Additional Info</div>
                                        {editMode ? (
                                            <InputField
                                                type="text"
                                                name="additional_info"
                                                onChange={hendleEditMode}
                                                value={editDetails.additional_info.slice(
                                                    0,
                                                    100
                                                )}
                                            />
                                        ) : (
                                            <div className="text-left">
                                                {editDetails.additional_info.slice(
                                                    0,
                                                    100
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AditionanDetails;
