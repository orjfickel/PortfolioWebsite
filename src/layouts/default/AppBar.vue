<template>
  <v-app-bar class="bg-surface-variant">
    <v-btn
      href="/"
    >
    Oscar Fickel
    </v-btn>

    <template v-slot:append>
    <div class="headerbuttons ">
      <v-btn v-for="section in sections" @click="$router.push(section.link)">{{ section.name }}</v-btn>
    </div>

      <v-menu class="dropdown" ref="menuRef">
        <template v-slot:activator="{ props }">
          <v-btn  class="dropdown" icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="section in sections" @click="$router.push(section.link)">
            <v-list-item-title>{{ section.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </template>
  </v-app-bar>
</template>

<script>
  //
export default {
  name: "AppBar",
  data() {
    return {
      temporaryVar: false,
      sections: [
        { name: "Home", link: "/#home"},
        { name: "Technical Projects", link: "/#technicalprojects"},
        { name: "Just-For-Fun Projects", link: "/#funprojects"},
        { name: "Education", link: "/#education"},
        { name: "Experience", link: "/#experience"},
        { name: "Certificates", link: "/#certificates"},
      ],
    };
  },
};
</script>

<style scoped>

.dropdown { display: none; }

@media (max-width: 43em) {
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
