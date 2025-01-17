/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        'container': "1280px",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%": { transform: "translateX(10px)" },
          "80%": { transform: "translateX(8px)" },
          "90%": { transform: "translateX(-8px)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
    },
    fontFamily: {
      Roboto_Regular: ['Roboto-Regular'],
      Roboto_Bold: ['Roboto-Bold'],
      Roboto_SemiBold: ['Roboto-SemiBold'],
      Roboto_ExtraBold: ['Roboto-ExtraBold'],
      Roboto_Medium: ['Roboto-Medium'],
    },
    screens: {
      'xs': '400px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1920px'
  },
  },
  plugins: [],
}

