<template>
  <v-div>
    <v-navigation-drawer :style="{background: $vuetify.theme.current.colors.header}"
        temporary v-model="sidebar" app location="right"
        >
      <v-list>
        <v-list-item
          key="drawer"
          @click="sidebar = false"
          base-color="headertext"
          prepend-icon="$menu"
          >

        </v-list-item>
        <v-list-item
          v-for="item in sections"
          :key="item.name"
          base-color="headertext"
          :to="item.link"
          :title="item.name"
          :prepend-icon="item.icon"
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar ref="appBarRef" fixed class="fixed-bar"
                :style="[ { background: $vuetify.theme.current.colors.header }, appBarStyles ]"
                >
      <v-btn class="px-5 ml-0 h-100" href="/" title="Home" color="headertext">
        Oscar Fickel
      </v-btn>

      <template v-slot:append>
        <div class="headerbuttons h-100">
          <div class="d-flex h-100">
            <v-list-item
              v-for="section in sections"
              :key="section.name"
              class="headerbutton pl-3 pr-4"
              base-color="headertext"
              :to="section.link">
              <v-icon :icon="section.icon" class="mr-1" color="grey-lighten-1"></v-icon> {{ section.name }}
            </v-list-item>
          </div>
        </div>

        <v-btn @click="toggleTheme" icon="mdi-brightness-6" title="Toggle dark/light mode" class="ml-2" color="headertext">
        </v-btn>

        <span class="dropdown" title="Navigation bar">
          <v-app-bar-nav-icon @click="sidebar = !sidebar" color="headertext">
          </v-app-bar-nav-icon>
        </span>
      </template>
    </v-app-bar>
  </v-div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useTheme } from 'vuetify'
import { useAppStore } from '@/store/app'

const store = useAppStore()
const theme = useTheme()

const appBarRef = ref(null)
const appBarHeight = ref(80)
const appBarMarginTop = ref(0)
const lastScrollY = ref(0)
const lastToggleY = ref(0)
const toggleUpThreshold = 100
const toggledUp = ref(true)

const appBarStyles = computed(() => ({
  marginTop: `${appBarMarginTop.value}px`
}))

function measureAppBarHeight() {
  const element = appBarRef.value?.$el ?? appBarRef.value
  appBarHeight.value = element?.offsetHeight ?? 80
}

function updateAppBarMargin(currentY, delta) {
  let newMargin = 0
  const diff = currentY - lastToggleY.value;
  if(delta > 0){
    newMargin = Math.max(-appBarHeight.value, Math.min(0, -diff));
  } else if (delta < 0){
    newMargin = Math.max(-appBarHeight.value, Math.min(0, -diff));
  }

  if (newMargin !== appBarMarginTop.value) {
    appBarMarginTop.value = newMargin
  }
}


function handleScroll() {
  const currentY = window.scrollY
  const delta = currentY - lastScrollY.value

  if (delta > 0 && toggledUp.value){
      toggledUp.value = false;
      lastToggleY.value = Math.min(currentY, lastToggleY.value)
  } else if(!toggledUp.value){
      toggledUp.value = true;
      lastToggleY.value = Math.max(currentY - appBarHeight.value - toggleUpThreshold, lastToggleY.value)
  }
  updateAppBarMargin(currentY, delta)
  lastScrollY.value = currentY;
}

onMounted(() => {
  lastScrollY.value = window.scrollY
  measureAppBarHeight()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleTheme () {
  store.darkmode = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = store.darkmode
}
</script>

<script>
  //
export default {
  name: "AppBar",
  data() {
    return {
      temporaryVar: false,
      sidebar: false,
      sections: [
        { name: "Home", link: "/homepage/#home", icon: "mdi-home"},
        { name: "Technical projects", link: "/homepage/#technicalprojects", icon: "mdi-wrench"},
        { name: "Hobby projects", link: "/homepage/#funprojects", icon: "mdi-star"},
        { name: "Code sample", link: "/codesample", icon: "mdi-code-braces"},
        { name: "Education", link: "/cv/#education", icon: "mdi-school"},
        { name: "Experience", link: "/cv/#experience", icon: "mdi-briefcase"},
        { name: "Certificates", link: "/cv/#certificates", icon: "mdi-certificate"},
      ],
    };
  },
};
</script>

<style scoped>

.dropdown { display: none; }

@media (max-width: 1280px) {
  .headerbuttons     { display: none; }
  .dropdown { display: inline-block; }
}

.fixed-bar {
  will-change: margin-top;
}

.navbar {
  background: var(--color-background-mute);
  position: relative;
  flex: 0 1 auto;
  width: 100%;
  display: flex;
}
</style>
