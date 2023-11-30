<template>

<v-container class="">
  <h1 class="text-h2 d-flex text-center justify-center">Just For Fun Projects</h1>

  <v-divider class="mt-8 mb-10 "></v-divider>

  <div class="project">
    <v-row class="d-flex mb-auto">
      <v-col cols="auto" md="" class="pb-0 d-flex flex-column">
    <h2 class="projecttitle text-h4">Minecraft Mod: Weaponized Baseball</h2>
        <v-responsive min-width="200">
          <span>A personal summer vacation project written in Java
            that introduces bouncy ball physics to Minecraft.</span>
        </v-responsive>
        <Grade pagelink="https://www.curseforge.com/minecraft/mc-mods/weaponized-baseball" codelink="https://github.com/orjfickel/Weaponized-Baseball-Mod"></Grade>
      </v-col>
      <v-col class="d-flex justify-center mx-auto pb-0">
        <video autoplay loop muted class="video" style="width: 100%; height: 100%; min-width: 400px; max-width: 700px;" ref="video">
            <source src="@/assets/BounceOffTheWall.mp4" type="video/mp4">
          </video>
      </v-col>
    </v-row>
  </div>

  <v-divider class="mt-8 mb-10 "></v-divider>

  <div class="project">
    <v-row class="d-flex mb-auto">
      <v-col class="d-flex justify-center mx-auto order-last order-md-first pb-0">
        <v-sheet v-if="!inIframe()" class="d-flex" :elevation="2" border style="width: 100%; height: 330px; min-width: 400px; max-width: 700px;">
          <iframe class="w-100" src="https://oscar.fickel.nl/"></iframe>
        </v-sheet>
        <v-card v-else variant="tonal" class=" d-flex justify-center align-center text-center" width="500" height="200" align-center justify-center
        style="min-width: 200px;">
          <v-card-body> Nice try, but no recursion allowed! </v-card-body>
        </v-card>
      </v-col>
      <v-col cols="auto" md="" class="pb-0 d-flex flex-column">
    <h2 class="projecttitle text-h4">Portfolio Website</h2>
        <v-responsive min-width="200"  class="text-justify">
          <span>A simple responsive website to showcase my portfolio, made with Vue</span>
        </v-responsive>
        <Grade pagelink="https://oscar.fickel.nl" codelink="https://github.com/orjfickel/PortfolioWebsite"></Grade>
      </v-col>
    </v-row>
  </div>

  <v-divider class="mt-8 mb-10 "></v-divider>

  <div class="project">
    <v-row class="d-flex mb-auto">
      <v-col cols="auto" md="" class="pb-0 d-flex flex-column">
        <h2 class="projecttitle text-h4">Argus Kiesgame</h2>
        <v-responsive min-width="200"  class="text-justify">
          <span>A short satirical political voting guide in the form of a choose your own adventure game, in collaboration with the student paper Argus.
            Mostly made as a fun exercise in learning Godot.</span>
        </v-responsive>
        <Grade pagelink="https://argusutrecht.wordpress.com/argus-kiesgame/"></Grade>
      </v-col>
      <v-col class="d-flex justify-center mx-auto pb-0">
        <v-img min-width="400" max-width="700" src="@/assets/kiesgame.webp" />
      </v-col>
    </v-row>
  </div>

  <v-divider class="mt-8 "></v-divider>

</v-container>
</template>

<script setup>
  import Grade from '@/components/Grade.vue'

</script>

<script>
  export default {
    data: () => ({
    }),
    methods: {
      // https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
      inIframe () {
        try {
          return window.self !== window.top;
        } catch (e) {
            return true;
        }
      }
    }
  }
</script>

<style>
.projecttitle{
margin-bottom: 1em;
}
video {
  height:100%;
  width:500px;
  object-fit: contain;
}
</style>
