/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
      xxl: '1300px'
    },
    colors: {
      brand: '#F2994A',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      transparent: 'transparent'
    }
  },
  plugins: [
    plugin(({ addBase, theme, config }) => {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars = typeof value === 'string' ? { [`-${colorGroup}-${colorKey}`]: value } : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }
      addBase({
        ':root': extractColorVars(theme('colors'))
      })
    })
  ]
}
