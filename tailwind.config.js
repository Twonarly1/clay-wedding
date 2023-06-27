/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./core/**/*.{js,ts,jsx,tsx}"],
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("tailwind-scrollbar"),
        require("@tailwindcss/typography"),
    ],

    theme: {
        extend: {
            colors: {
                terracotta: "#e2725b",
                fern_green: "#4B5320",
            },
            keyframes: {
                "tilt-rotate": {
                    "0%": {
                        transform: "rotate(0deg) scale(1)",
                    },
                    "50%": {
                        transform: "rotate(10deg) scale(1.2)",
                    },
                    "100%": {
                        transform: "rotate(0deg) scale(1)",
                    },
                },
            },
            animation: {
                "tilt-rotate": "tilt-rotate 2s ease-in-out infinite",
            },
        },
    },
}
