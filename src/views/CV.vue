<template>
  <v-container class="">
    <div class="edusperience d-flex mt-5">
      <div>
        <Education id="education"/>
      </div>
      <v-divider class="divider my-9 "></v-divider>
      <div>
      <Experience id="experience"/>
      </div>
    </div>
    <v-divider class=" my-9 "></v-divider>
    <div>
    <Certificates id="certificates"/>
    </div>
    <v-divider class="my-9 "></v-divider>
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
