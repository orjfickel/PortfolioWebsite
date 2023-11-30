<template>

<v-container class="">
  <h1 class="text-h2 d-flex text-center justify-center">Technical Projects</h1>

  <v-divider class="mt-8 mb-10 "></v-divider>

  <div class="project">
    <v-row class="d-flex mb-auto">
      <v-col cols="auto" md="" class="d-flex flex-column pb-0">
        <h2 class="projecttitle text-h4">Master’s Thesis: Blue Noise Distributed
        MCMC Decorrelation of ReSTIR</h2>
        <div class="text-justify">
          <span class="">Reimplementing a paper on decorrelating ReSTIR
            via MCMC mutations and attempting to optimise it
            for a blue noise error distribution. <br>

            See the accompanying video for a demonstration of the reduction in correlation artifacts
            in the form of bright streaks across the ceiling.
          </span>
        </div>
        <Grade grade="8" morelink="/projects/masterthesis" codelink="https://git.science.uu.nl/vig/mscprojects/blue-noise-distributed-mcmc-decorrelation-of-restir"></Grade>
      </v-col>
      <v-col cols="auto" class="d-flex mx-auto justify-center pb-0">
          <video controls="true" loop autoplay muted class="video" style="width: 100%; height: 100%; min-width: 400px; max-width: 440px;" ref="video">
            <source src="@/assets/ThesisDemo.mp4" type="video/mp4">
          </video>
      </v-col>
    </v-row>
  </div>

  <v-divider class="mt-8 mb-10 "></v-divider>

  <div class="project">
    <v-row class="d-flex mb-auto ">
      <v-col class="d-flex justify-center mx-auto order-last order-md-first pb-0">
        <video autoplay loop muted class="video"
          style="z-index: 1; width: 100%; height: 100%; min-width: 400px; max-width: 700px;" ref="video">
            <source src="@/assets/RotatingDosageHeatmapSlower.mp4" type="video/mp4">
          </video>
      </v-col>
      <v-col class=" pb-0 d-flex flex-column" cols="auto" md="">
    <h2 class="projecttitle text-h4">Master’s Small Project: Ray tracing UV light
  sterilization of hospital rooms</h2>
        <v-responsive min-width="200" class="text-justify">
          <span>Developing a program for ZorgSaam to show the
            effect of different UV lamp positions and durations
            on the UV doses received by surfaces in the room. <br>
          </span>
        </v-responsive>
        <Grade grade="8.5" morelink="/projects/smallproject" codelink="https://github.com/orjfickel/Small-Project-UV-Robot-Ray-Tracer"></Grade>
      </v-col>
    </v-row>
  </div>

  <v-divider class="mt-8 mb-10 "></v-divider>

  <div class="project">
    <v-row class="d-flex mb-auto">
      <v-col cols="auto" md="" class="pb-0 d-flex flex-column">
        <h2 class="projecttitle text-h4">Bachelor’s Final Project: Applied Training
          Game Internationale Operaties</h2>
        <div  class="text-justify">
          <span>Working in a team as Scrum master to develop
          a point-and-click training game and accompanying
          web-based scenario editor for the Politieacademie. <br>

          See the accompanying video for a trailer of the final product.
          </span>
        </div>
        <Grade grade="8.5" pagelink="https://softwareprojecten.sites.uu.nl/2021/07/29/applied-training-game-internationale-operaties-sequel/" ></Grade>
      </v-col>
      <v-col cols="auto" class="d-flex mx-auto justify-center align-center pb-0">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YrXMOzlAu_Q?si=npIBIsQq9Di3ff9f"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </v-col>
    </v-row>
  </div>

  <v-divider class="mt-8 mb-10 "></v-divider>

  <div class="project">
    <h2 class="projecttitle text-h4">Miscellaneous Master Course Projects</h2>
    <v-row class="d-flex mb-auto">
      <v-col class="text-justify">
        <span>Some examples of the smaller projects that were the by-products of following courses for the Game and Media Technology Master's programme</span>
      </v-col>
    </v-row>
    <v-row class="d-flex mb-auto">
      <v-col
        v-for="card in cards"
        :key="card.title"

      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
        <v-img
          :src="card.src"
          height="200px"
          cover
        ></v-img>
        <v-card-title v-text="card.title">
        </v-card-title>
        <v-card-text class="" v-text="card.description">
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </div>

  <v-divider class="mt-8"></v-divider>


</v-container>
</template>

<script setup>
  import Grade from '@/components/Grade.vue'

</script>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Motion and Manipulation', description: 'Programming a 4-jointed digital ping pong robot', src: 'MOMA.png'},
        { title: 'Game Physics', description: 'Implementing rope physics with position based dynamics', src: 'GP2.png'},
        { title: 'Advanced Graphics', description:
        "Implementing a mesh level and top level BVH acceleration structure that supports animations for a whitted style ray tracer", src: 'MAGR.png'},
        { title: 'Mobile Interaction', description: 'Comparing the usability and efficiency of different VR typing methods', src: 'MOB1.png'},
        { title: 'Optimisation and Vectorisation', description: 'Optimising a voxel based water simulation program for 50% speedup', src: 'MOV.png'},
        { title: 'Computer Vision', description: 'Using different camera angles to reconstruct a voxel representation of people\'s trajectories', src: 'CV.png'},
      ],
    }),
    methods: {
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
