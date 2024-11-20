/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth:{
        'container':"1280px",
      },
    },
    fontFamily:{
      Roboto_Regular:['Roboto-Regular'],
      Roboto_Bold:['Roboto-Bold'],
      Roboto_SemiBold:['Roboto-SemiBold'],
      Roboto_ExtraBold:['Roboto-ExtraBold'],
      Roboto_Medium:['Roboto-Medium'],
    }
  },
  plugins: [],
}

