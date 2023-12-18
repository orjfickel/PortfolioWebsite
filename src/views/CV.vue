<template>
  <v-container class="pt-0">
    <div class="edusperience d-flex pt-4 justify-center">
      <div>
        <Education id="education"/>
      </div>
      <v-divider class="divider mt-8 mb-4 "></v-divider>
      <div>
        <Experience id="experience"/>
      </div>
    </div>
    <v-divider class=" my-9 "></v-divider>
    <div>
      <Certificates id="certificates"/>
    </div>
    <v-divider class="mt-8 "></v-divider>
  </v-container>
</template>


<script setup>
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Certificates from '@/components/Certificates.vue'
</script>

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
