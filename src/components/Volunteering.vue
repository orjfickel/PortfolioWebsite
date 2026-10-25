<template>
<div class="pt-4">
  <h1 class="text-h3 font-weight-light d-flex justify-center">Volunteering</h1>
  <v-divider class=" my-8 "></v-divider>
  <v-timeline side="end" align="start" class="timeline-year"
  >
    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <div class="d-flex">
        <div>
        <div><strong class="mr-13 text-no-wrap timeline-year">2025-</strong></div>
        </div>

        <div class="">
          <strong class="me-4">Supervisor VR Program</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
              Both at Nederlands Film Festival & Imagine Film Festival
          </div>
          <div class="text-caption">
            Welcoming, informing, and supporting visitors during the VR experiences at film festivals.</div>
        </div>

        <v-img class="d-flex ma-2 ml-auto" min-width="50" max-width="50" :src="imagineFilmLogo" />
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <div class="d-flex">
        <div>
        <div><strong class="mr-13 text-no-wrap timeline-year">2025-</strong></div>
        </div>

        <div class="">
          <strong class="me-4">Day Coordinator Volunteer Cooking</strong>

          <div class="text-caption">
            <v-icon start color="secondary" icon="mdi-map-marker" class="mr-0"></v-icon>
              BuurtBuik
          </div>
          <div class="text-caption">
            Once a month being responsible for smooth operations as our group of volunteers that day cooks a free meal for visitors,
            made mostly from leftovers of nearby local supermarkets.</div>
        </div>

        <v-img class="d-flex ma-2 ml-auto" min-width="50" max-width="50" :src="buurtBuikLogo" />
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="primary"
      size="small"
      min-width="100%"
    >
      <div class="d-flex">
        <div>
        <div><strong class="me-3 timeline-year text-no-wrap">2019-2021</strong></div>
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

  </v-timeline>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import imagineFilmImage from '@/assets/project_logos/ImagineFilm.png'
import imagineFilmDarkImage from '@/assets/project_logos/ImagineFilmDark.png'
import buurtBuikDarkImage from '@/assets/project_logos/BuurtBuikDark.png'
import buurtBuikImage from '@/assets/project_logos/BuurtBuik.png'

const theme = useTheme()
const imagineFilmLogo = computed(() => (
  theme.global.current.value.dark ? imagineFilmDarkImage : imagineFilmImage
))
const buurtBuikLogo = computed(() => (
  theme.global.current.value.dark ? buurtBuikDarkImage : buurtBuikImage
))
</script>

<style scoped>
</style>
