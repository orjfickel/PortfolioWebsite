<template>

<div  class="mb-4" :style="{
  background: $vuetify.theme.current.colors.header,
  color: $vuetify.theme.current.colors.headertext}">
<v-container class=" ">
    <div v-if="isExtraSmallPhone" class="text-justify"><span>Okay now you're being ridiculous, no one has a phone this small!</span></div>
    <div v-if="isExtraWide" class="text-justify"><span>Okay now you're being ridiculous, can you even read this??</span></div>
    <div class="d-flex mt-5">
      <v-spacer ></v-spacer>
      <div class="d-flex flex-column">
      <div class="d-flex me-header">
        <div class="me-text mb-4 mr-auto">
          <h2 class="me-text-title d-flex text-h4 mb-4">About me</h2>

          <div
          class="mr-auto text-justify"
            >
            <span>
              Simulation software developer at InControl, with a background in Game & Media Technology.
              <br>
              <br>
              Note: website content was last updated on februari 2024.
            </span>
          <!-- <span
          >Recently graduated with a Master’s degree in Computer Science
(Game and Media Technology). I have spent the last year of my
master’s focused on ray tracing, and hope to continue specialising
in computer graphics and/or engine programming</span> -->
</div>

        </div>

        <div class="me-avatar-container d-flex justify-end ml-auto mb-3 mt-3"
        >
          <v-avatar size="160px" variant="elevated"  class="ml-3 my-auto">
            <v-img height="200" src="@/assets/face.jpg" />
          </v-avatar>
        </div>
      </div>
      <div class="chips-container d-flex align-end mt-n1 mb-1" style=" gap: 10px;">
          <v-chip
            color="primary"
            variant="elevated"
            href="mailto:oscarfickel@gmail.com"
            target="_blank"
          >
            <v-icon start icon="mdi-email"></v-icon>
            E-mail
          </v-chip>

          <v-chip
            color="primary"
            variant="elevated"
            href="https://www.linkedin.com/in/oscar-fickel/"
            target="_blank"
          >
            <v-icon start icon="mdi-linkedin"></v-icon>
            LinkedIn
          </v-chip>

          <v-chip
            color="primary"
            variant="elevated"
            href="https://github.com/orjfickel/"
            target="_blank"
          >
            <v-icon start icon="mdi-github"></v-icon>
            Github
          </v-chip>

          <v-chip
            color="primary"
            variant="elevated"
            href="/OscarFickelCV.pdf"
            target="_blank"
          >
            <v-icon start icon="mdi-file-document"></v-icon>
            CV (outdated)
          </v-chip>

        </div>
      </div>

      <v-spacer ></v-spacer>
    </div>
</v-container>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isExtraSmallPhone = ref(false)
const isExtraWide = ref(false)
let mediaQuery = null
let mediaQueryWide = null

function handleMediaChangeSmall(event) {
  isExtraSmallPhone.value = event.matches
}
function handleMediaChangeWide(event) {
  isExtraWide.value = event.matches
}

onMounted(() => {
  if (typeof window === 'undefined') return
  mediaQuery = window.matchMedia('(max-width: 270px)')
  mediaQueryWide = window.matchMedia('(min-width: 5000px)')
  isExtraSmallPhone.value = mediaQuery.matches
  isExtraWide.value = mediaQueryWide.matches

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleMediaChangeSmall)
    mediaQueryWide.addEventListener('change', handleMediaChangeWide)
  } else {
    mediaQuery.addListener(handleMediaChangeSmall)
    mediaQueryWide.addListener(handleMediaChangeWide)
  }
})

onUnmounted(() => {
  if (!mediaQuery) return
  if (mediaQuery.removeEventListener) {
    mediaQuery.removeEventListener('change', handleMediaChange)
  } else {
    mediaQuery.removeListener(handleMediaChange)
  }
})
</script>

<style>
.me-header{
  flex-wrap: nowrap;
  align-items: flex-start;
}

.me-text{
  max-width: 70%;
}

.me-avatar-container{
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}
.chips-container{
  flex-wrap: nowrap;
  align-items: flex-start;
}

@media (max-width: 504px){
  .me-header{
    flex-wrap: wrap;
  }
  .me-avatar-container{
    order: 1;
    width: 100%;
    justify-content: center !important;
    margin-left: 0;
  }
  .me-text{
    max-width: 100%;
    order: 2;
    justify-content: center;
  }
  .me-text-title{
    justify-content: center !important;
  }
  .me-avatar-container .v-avatar{
    margin-left: 0 !important;
  }
  .chips-container{
    flex-wrap: wrap;
    justify-content: center !important;
  }
}
</style>
