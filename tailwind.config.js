/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                primary: "#E7272D",
                secondary: "#FDB217",
            },
            backgroundImage: {
                "ardoise": "url('images/background-slate.jpg')"
            }
        },
    },
    plugins: [],
}

