module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      // #Primary
      Cyan: 'hsl(180, 66%, 49%)',
      DarkViolet: 'hsl(257, 27%, 26%)',
      White: '#fff',
      // #Secondary
      Red: 'hsl(0, 87%, 67%)',
      // #Neutral
      Gray: 'hsl(0, 0%, 75%)',
      GrayishViolet: 'hsl(257, 7%, 63%)',
      VeryDarkBlue: 'hsl(255, 11%, 22%)',
      VeryDarkViolet: 'hsl(260, 8%, 14%)',
      AbuAbu: 'hsl(257.6, 100%, 96.7%)'
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
         '72': '18rem',
         '84': '21rem',
         '96': '24rem',
      },
      inset: {
          '90px': '90px',
          '-12': '-4rem',
          '-10': '-3rem'
      },
      backgroundImage: theme => ({
                'boost-desktop': "url('/src/asset/images/bg-boost-desktop.svg')",
                'boost-mobile': "url('/src/asset/images/bg-boost-mobile.svg')",
                'shorten-desktop': "url('/src/asset/images/bg-shorten-desktop.svg')",
                'shorten-mobile': "url('/src/asset/images/bg-shorten-mobile.svg')",
                })
    },
  },
  variants: {},
  plugins: [],
}
