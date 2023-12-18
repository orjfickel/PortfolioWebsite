/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    // defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1867C0',
          secondary: '#E1592E',
          // header: 'rgb(var(--v-theme-surface-variant))'
          background: '#f0f4f7',
          header: '#424242',
          headertext: '#f0f4f7',
          bodytext: '#000000',
          button: '#f0f4f7',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#1867C0',
          secondary: '#E1592E',
          header: '#010408',
          headertext: '#f0f4f7',
          bodytext: '#f0f4f7',
          button: '#151a21',
          background: '#0c1016',
        },
      },
    },
  },
  defaults: {
  }
})
