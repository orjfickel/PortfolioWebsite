<template>

<div class="">
  <h1 class="text-h2 d-flex justify-center">Certificates</h1>

  <v-divider class=" my-8 "></v-divider>

  <v-timeline side="end" align="start"
  >
    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <div class="d-flex "
      >
        <div>
        <div><strong class=" mr-15 text-no-wrap">2018</strong></div>
        </div>

        <div class="d-flex flex-column "
        >
          <strong class="me-4">International Baccalaureate - Higher Level - Language and Literature</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
              International Baccalaureate Organization
          </div>
        </div>
        <v-img class="d-flex ma-2 mx-auto" min-width="50" max-width="50" src="@/assets/project_logos/ib.png" />
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
