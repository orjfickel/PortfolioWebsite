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

    <v-app-bar :style="{background: $vuetify.theme.current.colors.header}"
                scroll-behavior="hide" scroll-threshold="10">
      <v-btn class="px-5 ml-0 h-100" href="/" color="headertext">
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

        <v-btn @click="toggleTheme" icon="mdi-brightness-6" class="ml-2" color="headertext"></v-btn>

        <span class="dropdown">
          <v-app-bar-nav-icon @click="sidebar = !sidebar" color="headertext">
          </v-app-bar-nav-icon>
        </span>
      </template>
    </v-app-bar>
  </v-div>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { useAppStore } from '@/store/app'
import { useDisplay } from 'vuetify'

const { mdAndDown} = useDisplay()

const store = useAppStore()

const theme = useTheme()

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
        { name: "Just-for-fun projects", link: "/homepage/#funprojects", icon: "mdi-star"},
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

@media (max-width: 80em) {
  .headerbuttons     { display: none; }
  .dropdown { display: inline-block; }
}

.navbar {
  background: var(--color-background-mute);
  position: relative;
  flex: 0 1 auto;
  width: 100%;
  display: flex;
}
</style>
