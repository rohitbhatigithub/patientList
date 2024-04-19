import React from "react";

const Button = ({ text }) => {
    return (
        <div>
            <button className="text-white text-xs m-2 lg:text-sm bg-brandBlue  rounded-lg px-2 lg:px-4 py-1 lg:py-2">
                {text}
            </button>
        </div>
    );
};

export default Button;
