<template>
  <v-div>
    <v-navigation-drawer :style="{background: $vuetify.theme.current.colors.header,
                                  color: $vuetify.theme.current.colors.headertext}"
        temporary v-model="sidebar" app location="right">
      <v-list>
        <v-list-item
          key="drawer"
          @click="sidebar = false"
          prepend-icon="$menu"
          >

        </v-list-item>
        <v-list-item
          v-for="item in sections"
          :key="item.name"
          :to="item.link"
          :title="item.name"
          :prepend-icon="item.icon"
          >

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :style="{background: $vuetify.theme.current.colors.header,
                        color: $vuetify.theme.current.colors.headertext}"
                scroll-behavior="hide">
      <v-btn class="pa-2" href="/">
        Oscar Fickel
      </v-btn>

      <template v-slot:append>
        <div class="headerbuttons">
          <v-btn v-for="section in sections" :prepend-icon="section.icon"
            class="headerbutton" @click="$router.push(section.link)">{{ section.name }}</v-btn>
        </div>

        <v-btn @click="toggleTheme" icon="mdi-brightness-6"></v-btn>

        <span class="dropdown">
          <v-app-bar-nav-icon @click="sidebar = !sidebar">
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
        { name: "Home", link: "/home/#home", icon: "mdi-home"},
        { name: "Technical projects", link: "/home/#technicalprojects", icon: "mdi-wrench"},
        { name: "Just-for-fun projects", link: "/home/#funprojects", icon: "mdi-star"},
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

.headerbutton {
  padding: 0px 15px;
}

@media (max-width: 52em) {
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
