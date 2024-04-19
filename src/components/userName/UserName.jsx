import React from "react";

const UserName = ({ name }) => {
    return (
        <div className="text-2xl flex gap-3 text-teal-800">
            Welcome <h1 className="font-bold ">{name}!</h1>
        </div>
    );
};

export default UserName;
