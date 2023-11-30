<template>
<div>
  <h1 class="text-h2 d-flex justify-center">Experience</h1>
  <v-divider class=" my-9 "></v-divider>
  <v-timeline side="end" align="start"
  >
    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <!-- <template v-slot:icon>
        <v-avatar image="@/assets/project_logos/uu.png"></v-avatar>
      </template> -->

      <div class="d-flex">
        <div>
        <div><strong class="me-4 text-no-wrap">2020-2021</strong></div>
        </div>

        <div class="">
          <strong class="me-4">Teaching Assistant</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
              Utrecht University
          </div>
          <div class="text-caption">
            Teaching assistant for Informatica, specifically the
courses ‘Modelleren en Systeemontwikkeling’ and
‘Concurrency’.</div>
        </div>

        <v-img class="d-flex ma-2 ml-auto" min-width="50" max-width="50" src="@/assets/project_logos/uu.png" />
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <div class="d-flex">
        <div>
        <div><strong class="me-4 text-no-wrap">2019-2021</strong></div>
        </div>

        <div class="">
          <strong class="me-4">Treasurer</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
              DGDARC
          </div>
          <div class="text-caption">
            Treasurer for the ’Dutch Game Development And
Research Committee’ of study association Sticky.</div>
        </div>

        <v-img class="d-flex ma-2 ml-auto" min-width="50" max-width="50" src="@/assets/project_logos/DGDARCL.png" />
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <div class="d-flex">
        <div>
        <div><strong class="mr-15 text-no-wrap">2018</strong></div>
        </div>

        <div class="">
          <strong class="me-4">Customer Service Employee</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
            Buyitdirect
          </div>
          <div class="text-caption">
            Digitising invoices and managing the order backlog.</div>
        </div>

        <v-img class="d-flex ma-2 ml-auto" min-width="50" max-width="50" src="@/assets/project_logos/buyitdirect.png" />
      </div>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<style>
.projecttitle{
margin-bottom: 1em;
}

</style>
