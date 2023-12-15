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
          codebg: '#aab7c2',
          header: '#424242',
          headertext: '#ffffff',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#1867C0',
          secondary: '#E1592E',
          codebg: '#7f8991',
          header: '#010408',
          background: '#0c1016',
          button: '#151a21',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      // color: 'button'
    }
  }
})
