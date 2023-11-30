<template>
  <v-app-bar class="bg-surface-variant">
    <v-btn
      href="/"
    >
    Oscar Fickel
    </v-btn>

    <!-- <router-link :to="{ hash: '#users' }">{{ $t('navigation.users') }}</router-link> -->

    <template v-slot:append>
    <div class="headerbuttons ">
      <v-btn  @click="$router.push('/#home')">Home</v-btn>
      <v-btn  @click="$router.push('/#projects')">Projects</v-btn>
      <v-btn  @click="$router.push('/#education')">Education</v-btn>
      <v-btn  @click="$router.push('/#experience')">Experience</v-btn>
      <v-btn  @click="$router.push('/#certificates')">Certificates</v-btn>
    </div>

      <v-menu class="dropdown" open-on-hover >
        <template v-slot:activator="{ props }">
          <v-btn  class="dropdown" icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item @click="$router.push('/#home')">
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/#projects')">
            <v-list-item-title> Projects </v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/#education')">
            <v-list-item-title> Education </v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/#experience')">
            <v-list-item-title> Experience </v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/#certificates')">
            <v-list-item-title> Certificates </v-list-item-title>
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
    };
  },
};
</script>

<style scoped>

.dropdown { display: none; }

@media (max-width: 50em) {
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
