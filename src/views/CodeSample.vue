<template>
  <v-container class="pt-8">
    <h1 class="text-h2 d-flex text-center justify-center">Code sample</h1>

    <v-divider class="mt-8 mb-10 "></v-divider>

    <span class="">
      Here I'll present an example of some of the C++ and OpenCL code I
      have written, specifically the central code for the <router-link to="/projects/smallproject">UV ray tracer project</router-link>
      (click for more details, including the full source code).<br>

      The function of this code is to use the input of a 3D model of a room
      and a number of UV lamps, and show how much UV light is received by the
      room's surfaces. This is done by shooting rays from these lamps and counting
      how often the room mesh's triangles are hit. The rationalisation behind this
      method can be found in the
      <a target="_blank" href="https://github.com/orjfickel/Small-Project-UV-Robot-Ray-Tracer/blob/main/Final_Report_Small_Project_UV_Ray_Tracer.pdf">
        project's report</a>. <br>

      To keep it brief, I'll only outline the main loop over the OpenCL computation kernels.
      The Tick() function directly calls the computation functions if the dosage map hasn't already been computed.
    </span>

    <v-img src="@/assets/code/Tick.png" />

    <span>
      ComputeDosageMap() runs a few kernels to trace and count the rays for each light position.
      Shade() then uses the resulting photon counts to determine UV dosage
      and the corresponding triangle colors.
    </span>

    <v-img src="@/assets/code/ComputeDosageMap.png" />

    <span>
      Below are the relevant data structures used by the computation kernels.
    </span>

    <v-img max-width="400" src="@/assets/code/tools.png" />

    <span>
      The first kernel in the ComputeDosageMap() loop simply generates an array of photon rays for a
      given light position. To this end, first a random position on the line is picked.
      Then the direction is calculated by first setting the vertical y component to a
      random value between -1 and 1, then generating a random point on the unit
      circle in the x-z plane, and finally scaling these x and z components to match the
      y component. By doing this we ensure that the direction has a cosine distribution
      vertically along the light source, and is uniformly distributed horizontally
      around the light source.
    </span>

    <v-img src="@/assets/code/generate.png" />

    <span>
      The second kernel extends these rays and intersects them with the scene
      geometry using its BVH. I've excluded the code for building and intersecting the BVH,
      as this was directly adapted from elsewhere. This kernel also immediately performs an atomic increment of
      the number of photons that the hit triangle has received.
    </span>

    <v-img src="@/assets/code/extend.png" />

    <span>
      The last kernel in the loop then accumulates these numbers into an array
      for all the light positions together. For the cumulative dosage heatmap these
      values are multiplied by the duration corresponding to the light position, and
      then summed together. For the max irradiation heatmap on the other hand the
      number of photons is only replaced if the new value is larger.
    </span>

    <v-img src="@/assets/code/accumulate.png" />

    <span>
      After finishing this loop, the final two kernels compute the actual irradiance
      and UV dose. These values are then normalised and scaled over the heatmap gradient.
      The color values are inserted into an OpenGL vertex buffer which has been made
      directly available to the OpenCL kernel. This buffer is used by the OpenGL
      vertex shader to directly shade the vertex with the color stored in the buffer.
    </span>

    <v-img src="@/assets/code/shade.png" />

    <v-divider class="my-8 "></v-divider>

    <i> Code is licensed under the
    <a rel="license" target="_blank" href="https://github.com/orjfickel/Small-Project-UV-Robot-Ray-Tracer/blob/main/LICENSE">MIT License</a>
    </i>

    <v-divider class="mt-8 "></v-divider>
  </v-container>
</template>

<style scoped>
.v-img{
  margin-top: 1em;
  margin-bottom: 1em;
  min-width: 10px;
  margin-left: auto;
  margin-right: auto;
}

.v-container {
  /* background-color: header; */
  /* background-color: #a6b3be; */
  /* color: black; */
}
</style>
