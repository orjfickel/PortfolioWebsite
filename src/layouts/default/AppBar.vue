<template>
  <v-div>
    <!-- The navigation drawer to the side of the screen if small enough -->
    <v-navigation-drawer :style="{background: $vuetify.theme.current.colors.header}"
        temporary v-model="sidebar" app location="right"
        >
      <v-list>
        <!-- Drawer icon at the top -->
        <v-list-item
          key="drawer"
          @click="sidebar = false"
          base-color="headertext"
          prepend-icon="$menu"
          >

        </v-list-item>
        <template v-for="section in sections" :key="section.name">
          <!-- If this section doesn't have subpages, just show a button that links to the section page -->
          <v-list-item
            v-if="!section.subpages || !section.subpages.length"
            base-color="headertext"
            :to="section.link"
            :title="section.name"
            :prepend-icon="section.icon"
            @click="sidebar = false"
            class="drawer-item"
          >
          </v-list-item>

          <!-- Show a section button that toggles a dropdown -->
          <v-list-group v-else :value="section.name" base-color="headertext">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                base-color="headertext"
                :title="section.name"
                :prepend-icon="section.icon"
                :class="{ 'v-list-item--active': isSectionActive(section) }"
                class="drawer-item"
              >
              </v-list-item>
            </template>

            <!-- Show as the first item in the dropdown a link to the main page of the section -->
            <router-link :to="section.link"  class="routerLink">
              <v-list-item
                base-color="headertext"
                :title="section.name + ' overview'"
                @click="sidebar = false"
                class="drawer-item"
                :class="{ 'v-list-item--active': isSectionActive(section) }"
              >
              </v-list-item>
            </router-link >
            <v-list-item
              v-for="subpage in section.subpages"
              :key="subpage.title"
              base-color="headertext"
              :to="subpage.external ? undefined : subpage.link"
              :href="subpage.external ? subpage.link : undefined"
              :target="subpage.external ? '_blank' : undefined"
              rel="noreferrer"
              :title="subpage.title"
              @click="sidebar = false"
              class="drawer-item"
            >
            </v-list-item>
          </v-list-group>
        </template>
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
          <div class="d-flex h-100 ml-auto">
            <template v-for="section in sections" :key="section.name">
              <!-- If this section has subpages, show a section button that toggles a menu dropdown -->
              <v-list-item
                v-if="section.subpages && section.subpages.length"
                :key="section.name"
                class="headerbutton px-0"
                base-color="headertext"
                link
                :class="{ 'v-list-item--active': isSectionActive(section) }"
              >
                <v-menu
                  :model-value="isMenuOpen(section.name)"
                  :open-on-hover="true"
                  :close-on-content-click="true"
                  @update:model-value="value => setMenuOpen(section.name, value)"
                >
                  <template v-slot:activator="{ props }">
                    <div v-bind="props" class="section-trigger">
                      <v-icon :icon="section.icon" class="mr-1" color="grey-lighten-1"></v-icon>
                      {{ section.name }}
                    </div>
                  </template>
                  <v-list>
                    <!-- Show as the first item in the dropdown a link to the main page of the section -->
                    <v-list-item
                      base-color="headertext"
                      :to="section.link"
                      :title="section.name + ' overview'"
                      @click="sidebar = false"
                    >
                    </v-list-item>
                    <v-list-item
                      v-for="subpage in section.subpages"
                      :key="subpage.title"
                      :value="subpage.title"
                      :to="subpage.external ? undefined : subpage.link"
                      :href="subpage.external ? subpage.link : undefined"
                      :target="subpage.external ? '_blank' : undefined"
                      rel="noreferrer"
                    >
                      <v-list-item-title>{{ subpage.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>

              <!-- If the section doesn't have subpages, just show a button that links to the section page -->
              <v-list-item
                v-if="!section.subpages || !section.subpages.length"
                :key="section.name"
                class="section-trigger"
                base-color="headertext"
                :to="section.link"
              >
                <v-icon :icon="section.icon" class="mr-1" color="grey-lighten-1"></v-icon>
                {{ section.name }}
              </v-list-item>
            </template>

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
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'

const store = useAppStore()
const theme = useTheme()
const route = useRoute()

const appBarRef = ref(null)
const appBarHeight = ref(80)
const appBarMarginTop = ref(0)
const lastScrollY = ref(0)
const lastToggleY = ref(0)
const openMenus = ref({})
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

function isMenuOpen (sectionName) {
  return !!openMenus.value[sectionName]
}

function setMenuOpen (sectionName, value) {
  openMenus.value = {
    ...openMenus.value,
    [sectionName]: value,
  }
}

// Whether we are currently on the given section page
function isSectionActive (section) {
  if (!section?.link) return false

  const currentPath = route.path || '/'
  const sectionPath = section.link.split('#')[0].split('?')[0]
  const normalizedCurrentPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '')
  const normalizedSectionPath = sectionPath === '/' ? '/' : sectionPath.replace(/\/$/, '')

  return normalizedCurrentPath === normalizedSectionPath
}

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
        { name: "Technical projects", link: "/homepage/#technicalprojects", icon: "mdi-wrench",
          subpages: [
            { title: "Master’s Thesis: Blue Noise Distributed MCMC", link: "/projects/masterthesis", external: false },
            { title: "Master’s Small Project: UV Ray Tracing", link: "/projects/smallproject", external: false },
            { title: "Bachelor’s Final Project: Applied Training Game", link: "https://softwareprojecten.sites.uu.nl/2021/07/29/applied-training-game-internationale-operaties-sequel/", external: true },
          ]
        },
        { name: "Hobby projects", link: "/homepage/#funprojects", icon: "mdi-star",
          subpages: [
            { title: "Minecraft Mod: Weaponized Baseball", link: "https://www.curseforge.com/minecraft/mc-mods/weaponized-baseball", external: true },
            { title: "Portfolio website", link: "https://oscar.fickel.nl/", external: false },
            { title: "Argus Kiesgame", link: "https://argusutrecht.wordpress.com/argus-kiesgame/", external: true },
          ]},
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

.section-trigger {
  min-height: 100%;
  padding: 19px 12px;
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

.routerLink{
     text-decoration: none;
 }
.drawer-item :deep(.v-list-item-title) {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
  line-height: 1.3;
}
</style>
