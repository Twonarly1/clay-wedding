/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./core/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("@tailwindcss/aspect-ratio"), require("@headlessui/tailwindcss")],

    theme: {
        extend: {
            colors: {
                terracotta: "#e2725b",
                fern_green: "#4B5320",
            },
        },
    },
}
