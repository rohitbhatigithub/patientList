/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                brandBlue: "rgb(2 132 199)",
                brandGray: "rgb(249 251 253)",
                background: "rgb(229 231 233)",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
