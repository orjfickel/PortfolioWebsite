<template>

<div>
  <h1 class="text-h2 d-flex justify-center">Education</h1>

  <v-divider class=" my-9 "></v-divider>
  <v-timeline side="end" align="start" class=""
  >
    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <div class="d-flex">
        <div>
        <div><strong class="me-4 text-no-wrap">2021-2023</strong></div>
        </div>

        <div class="d-flex flex-column">
          <strong class="me-4">Master Game and Media Technology</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
              Utrecht University
          </div>
          <div class="text-caption">
            Average grade: 7.85.</div>
          <div class="text-caption">
            Included courses such as Advanced Graphics,
    Game Physics, and Optimisation & Vectorisation.</div>
        </div>

        <v-img class="d-flex ma-2 ml-auto" min-width="50" max-width="50" src="@/assets/project_logos/uu.png" />
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
      class=" timeline_item "
    >
      <div class="d-flex">
        <div class="d-flex">
        <div><strong class="me-4 text-no-wrap">2018-2021</strong></div>
        </div>

        <div class="d-flex flex-column">
          <strong class="me-4">Bachelor Computer Science</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
              Utrecht University
          </div>
          <div class="text-caption">
            Average grade: 8.</div>
          <div class="text-caption">
            With judicium Cum Laude and specialisation Game-
technology.</div>
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
        <div><strong class="me-4 text-no-wrap">2012-2018</strong></div>
        </div>

        <div class="d-flex flex-column">
          <strong class="me-4">VWO (TTO)</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
            Haarlemmermeer Lyceum
          </div>
          <div class="text-caption">
            Subjects: WI-B, WI-D, ENG (International Baccalaureate - Higher Level), NL, NA, SK, EC, DU</div>
        </div>

        <v-img class="d-flex ma-2 ml-auto" min-width="50" max-width="50" src="@/assets/project_logos/hlml.jpg" />
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
