<template>
  <v-app>
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { useTheme } from 'vuetify'
  import { useAppStore } from '@/store/app'


</script>

<script>
export default {
  beforeMount () {
    //check if browser supports dark mode.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      const store = useAppStore()
      console.log(store.darkmode)
      if (store.darkmode == 'default') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          useTheme().global.name.value = 'dark'
          store.darkmode = true
        }
      } else if (store.darkmode == 'dark') {
          useTheme().global.name.value = 'dark'
      }
    }

  },
}
</script>
