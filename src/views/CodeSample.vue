<template>
  <!-- :style="{background: $vuetify.theme.current.colors.codebg}"-->
  <v-container class="pt-9">
    <h1 class="text-h2 d-flex text-center justify-center">Code sample</h1>

    <v-divider class="mt-8 mb-10 "></v-divider>

    <span class="">
      Here I'll present an example of some of C++ and OpenCL code I
      have written for the <router-link to="/projects/smallproject">UV ray tracer project</router-link>.<br>

      I'll outline the main loop over the OpenCL computation kernels.
      The Tick() function calls the computation functions if the dosage map hasn't already been computed.
    </span>

    <v-img src="@/assets/code/Tick.png" />

    <span>
      ComputeDosageMap() runs a few kernels to perform the photon counting.
      Shade() then uses this dosage map to determine the triangle colors.
    </span>

    <v-img src="@/assets/code/ComputeDosageMap.png" />

    <span>
      blablabla
    </span>

    <v-img max-width="500" src="@/assets/code/tools.png" />

    <span>
      blablabla
    </span>

    <v-img src="@/assets/code/generate.png" />

    <span>
      blablabla
    </span>

    <v-img src="@/assets/code/extend.png" />

    <span>
      blablabla
    </span>

    <v-img src="@/assets/code/accumulate.png" />

    <span>
      blablabla
    </span>

    <v-img src="@/assets/code/shade.png" />

    <span>
      blablabla
    </span>
  </v-container>
</template>

<style scoped>
.v-img{
  margin-top: 1em;
  margin-bottom: 1em;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.v-container {
  /* background-color: header; */
  /* background-color: #a6b3be; */
  /* color: black; */
}
</style>
