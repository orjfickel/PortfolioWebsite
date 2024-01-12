/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


// Plugins
import { registerPlugins } from '@/plugins'
import { watchStore } from '@/store/app.js'

const app = createApp(App)

registerPlugins(app)

watchStore()

app.mount('#app')

