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
          <video controls="true" class="video" height="400" ref="video">
            <source src="@/assets/ThesisDemo.mp4" type="video/mp4">
          </video>
          <!-- <v-img max-height="400" src="@/assets/ThesisImage.png" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Slides from '@/components/Slides.vue'

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


</style>
