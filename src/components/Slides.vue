<template>
  <v-responsive class="mx-auto d-flex justify-center align-center"

  :max-height="Math.min(windowWidth * (9.0 / 16.0), slidesHeight)"
  :max-width="Math.min(windowWidth, slidesHeight * (16.0 / 9.0))">


  <v-responsive :max-height="Math.min(windowWidth * (9.0 / 16.0), slidesHeight)" class="d-flex justify-center mx-auto" v-if="props.pdfName == '../SPSlides.pdf' && (page == 9 || page==12)">
    <video autoplay loop muted class="video" style="width: 100%; height: 100%;" ref="video">
      <source v-if="page==9" src="@/assets/RotatingDosageHeatmapSlower.mp4" type="video/mp4">
      <source v-if="page==12" src="@/assets/MovingLightPosition.mp4" type="video/mp4">
    </video>
  </v-responsive>
  <VuePDF v-else class="pt-n6" :pdf="pdf" :page="page" fit-parent :key="fit" />
  </v-responsive>

  <v-responsive class="mb-2 mt-1 mx-auto d-flex justify-center align-center"
  :max-width="slidesHeight * (16.0 / 9.0)">
          <div class="d-flex">
              <v-btn size="small" variant="text" class="ma-1" @click="page = page > 1 ? page - 1 : page">
                Prev
              </v-btn>
              <span class="d-flex mr-1 mt-2 text-body-2 justify-end align-end" style="margin-bottom: 8px;">
                <input type="text" inputmode="numeric" pattern="[0-9]*" class="text-body-2 px-1 mr-1"
                  id="pagenumber" style="width: 25px; box-sizing:border-box" v-model.number="page" />
                 / {{ pages }}
              </span>
              <v-btn size="small" variant="text" class="ma-1 mr-0" @click="page = page < pages ? page + 1 : page">
                Next
              </v-btn>

              <v-btn size="small" variant="text" class="ma-1 ml-0" target="_blank" href='/ThesisSlides.pdf'>Open PDF</v-btn>
            </div>
          </v-responsive>

<!-- Scroll button -->
  <v-responsive
  style="position:absolute"
  :style="{
    right: 2+'%',
    top: -2 + '%'
    }"
  class="d-flex h-screen w-screen align-end justify-end"
  >
    <v-btn
    v-show="slidesHeight * (16.0 / 9.0) < windowWidth && windowTop == 0"
    class="ma-1"
    icon
    elevation="0"
    @click="$router.push('#maintext')"
  >
      <v-icon color="grey-darken-2" icon="mdi-arrow-down-bold" size="x-large"></v-icon>
  </v-btn>

  </v-responsive>
</template>

<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const props = defineProps({
  pdfName: String,
})

const { pdf, pages, info } = usePDF(props.pdfName)

console.log(`Document has ${pages} pages`)
console.log(`Document info: ${info}`)
</script>

<script>
export default {
  name: "Slides",
 props: ['pdfName'],
 data() {
    return {
      page: 1,
      slidesHeight: window.innerHeight - 120,
      windowWidth: window.innerWidth - 16,
      windowTop: window.top.scrollY,
      fit:false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
    window.addEventListener("scroll", this.onScroll)
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    getDimensions() {
      this.fit = !this.fit;
      this.slidesHeight = window.innerHeight - 120;
      this.windowWidth = window.innerWidth;
    },
    onScroll () {
      // console.log('scrolltop ' + scrollTop)
      // console.log('clientHeight ' + clientHeight)
      // console.log('scrollHeight ' + scrollHeight)
      console.log('window.top.scrollY ' + window.top.scrollY)
      this.windowTop = window.top.scrollY
    }
  }
}
</script>

<style scoped>
</style>
