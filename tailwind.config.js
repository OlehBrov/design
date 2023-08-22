/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./tmp/**/*.{html,js,ts,jsx,tsx}",
    "./src/index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "15px",
        md: "30px",
        lg: "45px",
        xl: "89px",
      },
    },
    extend: {
      screens: {
        xl: "1280px",
        wide: "1440px",
      },
      spacing: {
        _1: "1px",
        _2: "2px",
        _3: "3px",
        _4: "4px",
        _5: "5px",
        _6: "6px",
        _7: "7px",
        _8: "8px",
        _10: "10px",
        _12: "12px",
        _13: '13px',
        _14: "14px",
        _16: "16px",
        _18: "18px",
        _20: "20px",
        _22: "22px",
        _25: "25px",
        _30: "30px",
        _35: "35px",
        _36: "36px",
        _40: "40px",
        _44: "44px",
        _45: "45px",
        _46: "46px",
        _48: "48px",
        _59: "59px",
        _60: "60px",
        _64: "64px",
        _72: "72px",
        _75: "75px",
        _80: "80px",
        _88: "88px",
        _89: "89px",
        _100: "100px",
        _110: "110px",
        _120: "120px",
        _122: "122px",
        _145: "145px",
        _160: "160px",
        _170: "170px",
        _200: "200px",
        _220: "220px",
        _300: "300px",
        _390: "390px",
        _400: "400px",
        _450: "450px",
        _480: "480px",
        _700: "700px",
        _9999: "9999px",
        pr50: '50%',
        pr65: "65%",
        pr200: "200%",
      },
      backgroundSize: {
        "50%": "50%",
      },
      width: {
        inherit: "inherit",
        45: "45px",
        pr57: "57%",
      },
      height: {
        35: "35px",
      },
      margin: {
        half: "50%",
      },
      translate: {
        120: "120%",
        150: "150%",
        52: "52%",
      },
      transitionDuration: {
        900: "900ms",
      },
      transitionTimingFunction: {
        "submit-form": "cubic-bezier(0.67, 0.17, 0.40, 0.83)",
      },
      strokeWidth: {
        3: "3",
      },
      colors: {
        beige: "#DCC1AB",
        lightBeige: "#F5F0EC",
        beige_tr: "#d6b79e00",
        black_btn: "#111",
        greenSubs: "#1b5b31",
        greenTr: "rgb(27,91,49, .9);",
      },
      boxShadow: {
        inputBsh: "0px 5px 8px rgba(66,66,66,.42)",
        chckBxShadow: "inset 0 1px 3px rgba(0, 0, 0, .1)",
        prodListItems:'0px 14px 16px 8px rgba(0,0,0,0.44);;'
      },
      dropShadow: {
        inputTextSh: "0px 0px 5px rgba(66,66,66,.75);",
      },
      borderWidth: {
        b5: "5px",
      },
      fontSize: {
        xxs: "10px",
        "8px": "8px",
        "6px": "6px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "28px": "28px",
      },
      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
        Inter: "Inter, sans",
      },
      letterSpacing: {
        semitight: "-.01em",
        "-0088": "-0.088em",
      },
      lineHeight: {
        "115%": "1.15",
      },
    
      transformOrigin: {
        5050: "50% 50%",
      },
      rotate: {
        720: "720deg",
      },
      scale: {
        "001": "0.01;",
        1: "1",
      },
      transitionDuration: {
        400: "400ms",
        900: '900ms',
      },
      transitionTimingFunction: {
        "submitBtn-trnsition": 'cubic-bezier(0.67, 0.17, 0.40, 0.83)'
      },
      animation: {
        circling: 'circle 300ms ease-out 500ms forwards',
        buttonGrows: 'button_grow 200ms ease-in 2000ms forwards',
        growAnim: 'grow 1500ms ease-out 500ms forwards', 
        checkAnim: 'check 400ms ease-out 2300ms forwards',
        bounceAnim: 'bounce 300ms ease-in-out 0s none',
        disapearAnim: 'disapear 100ms linear 600ms forwards',
        unfoldIn:
          "unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;",
        unfoldOut:
          "unfoldOut 1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        "zoom-in":
          "zoomIn .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        "zoom-out":
          "zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        SRipple: "s_ripple 250ms ease-out",
        SRippleDup: "s_ripple_dup",
      },
      keyframes: {
        unfoldIn: {
          "0%": {
            transform: "scaleY(.005) scaleX(0)",
          },
          "50%": {
            transform: "scaleY(.005) scaleX(1)",
          },
          "100%": {
            transform: "scaleY(1) scaleX(1)",
          },
        },
        unfoldOut: {
          "0%": {
            transform: "scaleY(1) scaleX(1)",
          },
          "50%": {
            transform: "scaleY(.005) scaleX(1)",
          },
          "100%": {
            transform: "scaleY(.005) scaleX(0)",
          },
        },
        zoomIn: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        zoomOut: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
        s_ripple: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "20%": {
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0.01",
            transform: "scale(1)",
          },
        },
        s_ripple_dup: {
          "0%": {
            transform: "scale(0)",
          },
          "30%": {
            transform: "scale(1)",
          },
          "60%": {
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1)",
          },
        },
        bounce: {
          "30%": { fontSize: "20px" },
        },
        circle: {
          "100%": {
            width: "60px",
            border: "solid 6px #ccc",
          },
        },
        disapear: {
          "100%": {
            opacity: "0",
          },
        },
        grow: {
          "99.9%": {
            width: "60px",
            height: "60px",
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        button_grow: {
          "0%": {
            border: "solid 2px #1ECD97",
            backgroundColor: "#1ECD97",
            width: "60px",
          },
          "100%": {
            border: "solid 2px #1ECD97",
            backgroundColor: "#1ECD97",
            width: "60px",
          },
        },
        check: {
          "25%": {
            opacity: "1",
          },
          "60%": {
            opacity: "1",
            transform: "scale(1.3) rotate(-45deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(-45deg)",
          },
        },
      },
    },
  },
   plugins: [require("tw-elements/dist/plugin.cjs")],
}

