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
          background: '#f0f4f7',
          header: '#323c42',
          headertext: '#f0f4f7',
          bodytext: '#000000',
          button: '#f0f4f7',
          icon: '#757575',
        },
      },
      dark: {
        dark: true,
        variables: {
          'border-color': '#000000',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.60,
          'disabled-opacity': 0.38,
          'idle-opacity': 0.08,
          'hover-opacity': 0.08,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.12,
          'dragged-opacity': 0.08,
        },
        colors: {
          primary: '#1867C0',
          secondary: '#E1592E',
          background: '#0c1016',
          header: '#010408',
          headertext: '#f0f4f7',
          bodytext: '#f0f4f7',
          button: '#151a21',
          icon: '#BDBDBD',
        },
      },
    },
  },
  defaults: {
  }
})
