<template>
  <v-app>
    <default-bar />

    <default-view :style="{
                           color: $vuetify.theme.current.colors.bodytext}"/>

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
    const store = useAppStore()
    if (store.darkmode != 'light') {
      if (store.darkmode == 'dark') {
        useTheme().global.name.value = 'dark'
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        //check if browser supports dark mode.
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          useTheme().global.name.value = 'dark'
          store.darkmode = 'dark'
        }
      }
    }
  },
}
</script>
