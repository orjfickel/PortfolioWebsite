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
        <div class="d-flex me-header align-center">
          <div class="me-text mb-4 mr-auto">
            <h2 class="me-text-title d-flex text-h4 mb-4">About me</h2>

            <div
            class="mr-auto text-justify"
              >
              <span>
                Hi there! <br>
                I am a simulation software developer at InControl, with a background in Game & Media Technology and Computer Science,
                and a passion for the endless possibilities in creating virtual worlds.
                <br>
                Thank you for your interest in browsing my portfolio. Feel free to have a look around, and be sure to send me an email if anything inspires any questions!
                <br>
                <br>
                Note: website content was last updated on februari 2024.
              </span>
            </div>

          </div>

          <div class="me-avatar-container d-flex align-center justify-end ml-auto mb-3 mt-3"
            @pointerdown="ouch = true"
            @pointerup="playFaceRipple"
            @pointercancel="ouch = false"
          >
            <v-avatar v-show="ouch" size="160px" variant="elevated" class="ml-3 my-auto">
              <v-img height="200" :src="facePinchImage" eager="true" />
            </v-avatar>
            <v-avatar v-show="!ouch && faceVideo" size="160px" variant="elevated" class="ml-3 my-auto">
              <video ref="faceRippleVideo" autoplay muted playsinline class="face-ripple-video" @ended="faceVideo = false">
                <source :src="faceRippleVideoSource" type="video/mp4">
              </video>
            </v-avatar>
            <v-avatar v-show="!ouch && !faceVideo && !bright" size="160px" variant="elevated" class="ml-3 my-auto">
              <v-img height="200" :src="faceImage" eager="true" />
            </v-avatar>
            <v-avatar v-show="!ouch && !faceVideo && bright" size="160px" variant="elevated" class="ml-3 my-auto">
              <v-img height="200" :src="faceBrightImage" eager="true" />
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
            Email
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

          <!-- <v-chip
            color="primary"
            variant="elevated"
            href="/OscarFickelCV.pdf"
            target="_blank"
          >
            <v-icon start icon="mdi-file-document"></v-icon>
            CV (outdated)
          </v-chip> -->

        </div>
      </div>

      <v-spacer ></v-spacer>
    </div>
  </v-container>
</div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useTheme } from 'vuetify'
import faceImage from '@/assets/face.jpg'
import facePinchImage from '@/assets/facepinch.jpg'
import faceBrightImage from '@/assets/facebright.jpg'
import faceRippleVideoSource from '@/assets/FaceRipple.mp4'

const ouch = ref(false) // To show a pinched face when pressing avatar
const faceVideo = ref(false)
const faceRippleVideo = ref(null)
const bright = ref(false) // To show an eyes widened face when switching to light mode
const imagesReady = ref(false)

async function playFaceRipple() {
  ouch.value = false
  faceVideo.value = true
  await nextTick()
  if (faceRippleVideo.value) faceRippleVideo.value.currentTime = 0
  faceRippleVideo.value?.play().catch(() => {
    faceVideo.value = false
  })
}

async function preloadAvatarImages() {
  if (typeof window === 'undefined') return

  const avatarImages = [faceImage, facePinchImage, faceBrightImage]
  await Promise.all(
    avatarImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          if (typeof img.decode === 'function') {
            img.decode().then(() => resolve(src)).catch(() => resolve(src))
          } else {
            resolve(src)
          }
        }
        img.onerror = () => reject(new Error(`Failed to load ${src}`))
        img.src = src
      })
    })
  )

  imagesReady.value = true
}

watch(useTheme().global.name, async (newMode, oldMode) => {
  if(newMode == 'light' && oldMode == 'dark'){
    bright.value = true;
    setTimeout(() => {bright.value = false}, 500);
  }
})

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
  preloadAvatarImages()

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
.face-ripple-video{
  width: 100%;
  height: 100%;
  object-fit: cover;
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
