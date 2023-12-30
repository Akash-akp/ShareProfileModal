/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        cardBorder : "#ffffff30",
        cardBackground : "#ffffff1a",
        btnBg:"#ffffff00",
        btnFocus:"#ffffffb9",
        facebookclr: "#1771e6",
        twitterclr : "#1c99e6",
        instagramclr : "#cb2770",
        whatsappclr : "#2fe664",
        telegramclr : "#0081c2",
        githubclr : "rgb(88, 101,242)"
      },
      boxShadow: {
        upperCircleShadow :"0px 0px 50px #d84869",
        bottomCircleShadow :"0px 0px 50px #5648d8",
      },
      keyframes:{
        movelr: {
          '100%': {translate: '50% 10%', scale: '120%'},
        },
        moverl: {
          '100%': {translate: '-50% -10%', scale: '120%'},
        },
      },
      animation:{
        'moveltr': 'movelr 10s ease-in-out infinite alternate',
        'movertl': 'moverl 8s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}

