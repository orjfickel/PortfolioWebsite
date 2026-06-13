<template>
  <Slides pdfName="/ThesisSlides.pdf"/>



  <v-container class="" id="maintext">

    <h2 class="projecttitle text-h4">Master’s Thesis: Blue Noise Distributed
MCMC Decorrelation of ReSTIR</h2>


    <v-row class="d-flex mb-auto">
      <v-col cols="auto" md="" class="d-flex text-justify"><span> The slides above were used for my thesis defense and should provide an overview
        of the concepts involved in my thesis and its results.
        The <a target="_blank" href="https://studenttheses.uu.nl/handle/20.500.12932/45244">full thesis</a> as well as
        the <a target="_blank" href="https://git.science.uu.nl/vig/mscprojects/blue-noise-distributed-mcmc-decorrelation-of-restir">source code</a> have been made publicly available.
        <br>
        My master's thesis was twofold in its contribution.
        Using the code for <a target="_blank" href="https://github.com/DQLin/ReSTIR_PT">ReSTIR PT</a> as basis,
          I (re)implemented the <a target="_blank" href="https://doi.org/10.48550/arXiv.2211.00166">paper by Sawhney et al.</a>
          on adding MCMC mutations to decorrelate ReSTIR PT.
In addition to this, I modified the acceptance probability to optimise for blue noise.
The effects of this were marginal, but I was able provide reasoning as to how, in hindsight, this is actually an expected result.

<br> See the accompanying video for a demonstration of the reduction in correlation artifacts
  in the form of bright streaks across the ceiling.
</span>
      </v-col>
      <v-col class="d-flex justify-center">
        <div v-if="showThesisDemoVideo" class="video-wrapper">
          <video controls="true" autoplay loop muted onclick="this.paused ? this.play() : this.pause()"
            class="video-gif" style="z-index: 1; width: 100%; height: 100%; min-width: 200px; max-width: 500px;" ref="video">
            <source src="@/assets/ThesisDemo.mp4" type="video/mp4">
          </video>
        </div>
        <div v-else class="video-poster" @click="showThesisDemoVideo = true">
          <img src="@/assets/ThesisDemoScreenshot.jpg" alt="Thesis demo screenshot" />
          <div class="poster-overlay">
            <span class="poster-play">▶</span>
            <span>Click to load video</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import Slides from '@/components/Slides.vue'

const showThesisDemoVideo = ref(false)
</script>


<script>
  //
export default {
  name: "MasterThesis",

 data() {
    return {
      overlay: true
    };
  },
};
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.video-poster, .video-wrapper {
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  position: relative;
  cursor: pointer;
}

.video-poster img {
  display: block;
  width: 100%;
  height: auto;
}

.poster-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  text-shadow: 0 0 8px rgba(0,0,0,0.7);
  background: rgba(0,0,0,0.25);
}

.poster-play {
  font-size: 2.5rem;
}

</style>
