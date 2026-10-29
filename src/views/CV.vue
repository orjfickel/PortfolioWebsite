<template>
  <v-container class="pt-0">
    <div class="edusperience d-flex pt-4 justify-center">
      <div>
        <Experience id="experience"/>
      </div>
      <v-divider class="divider mt-8 mb-4 "></v-divider>
      <div>
        <Education id="education"/>
      </div>
    </div>
    <v-divider class=" my-9 "></v-divider>
    <div class="edusperience d-flex pt-4 justify-center">
      <div>
        <Volunteering id="volunteering"/>
      </div>
      <v-divider class="divider mt-8 mb-4 "></v-divider>
      <div>
        <Certificates id="certificates"/>
      </div>
    </div>
    <v-divider class="mt-8 "></v-divider>
  </v-container>
</template>


<script setup>
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Volunteering from '@/components/Volunteering.vue'
import Certificates from '@/components/Certificates.vue'
</script>

<style>
.timeline-year-column {
  flex: 0 0 4rem;
}
.timeline-year {
  margin-left: -1em;
  font-size: small;
}
.timeline {
  margin-left: -1em;
}

.v-theme--dark .v-timeline .v-timeline-divider__dot {
  background-color: rgba(var(--v-theme-on-surface), 0.1);
}
</style>

<style scoped>
.edusperience{
    flex-flow: row;
  }

.divider { display: none; }

@media (max-width: 960px) {
  .divider { display: inline-block; }

  .edusperience{
    flex-flow: column;
  }
}
</style>
