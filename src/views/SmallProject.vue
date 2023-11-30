<template>
  <Slides pdfName="/SPSlides.pdf"/>

  <v-container class="">

    <h2 class="projecttitle text-h4">Master’s Small Project: Ray tracing UV light
  sterilization of hospital rooms</h2>

    <v-row class="d-flex mb-auto">
      <v-col cols="auto" md="" class="d-flex text-justify"><span> The slides above should provide an overview
        of the concepts involved in this project and its results.
        The <a target="_blank" href="https://github.com/orjfickel/Small-Project-UV-Robot-Ray-Tracer/blob/main/Final_Report_Small_Project_UV_Ray_Tracer.pdf">project report</a> as well as
        the <a target="_blank" href="https://github.com/orjfickel/Small-Project-UV-Robot-Ray-Tracer">source code</a> have been made publicly available.

This project was performed during my masters, being equivalent to following two courses and taking up 10 weeks of full time work.
It involved developing a program that uses a sort of per-triangle photon counting to compute the UV doses received by the surfaces of a hospital room, given a number of positions
and durations for a UV light.
This program was meant to be used by researchers working with ZorgSaam hospital to more efficiently figure out the optimal placement
of a simple robot fitted with a UV light, such that the room is sufficiently decontaminated.
In addition to this, the program helped gain a visual perspective of how this UV light placement affects how the UV doses are
spread out in the room.

</span>
      </v-col>
      <v-col class="d-flex justify-center align-start">
        <v-img max-height="400" src="@/assets/RotatingDosageHeatmapSlower.gif" />
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
  name: "SmallProject",
};
</script>
