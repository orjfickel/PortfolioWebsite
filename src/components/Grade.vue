<template>
  <div class="d-flex mt-auto h-100 mb-1 ml-1 align-end">
    <div class="d-flex mt-4">
      <v-btn v-if="pagelink != null" color="button" target="_blank" :href="pagelink">Learn more</v-btn>
      <v-btn v-else-if="morelink != null" color="button" @click="$router.push(morelink)">Learn more</v-btn>
      <v-btn v-if="codelink != null" color="button" class="ml-4" target="_blank" :href="codelink">Source code</v-btn>
    </div>
    <div v-if="grade != null" class="d-flex mt-auto ml-auto flex-column justify-center align-center text-center" max-width="100">
      <v-progress-circular
        :rotate="360"
        :size="50"
        :width="7"
        :model-value="grade * 10"
        color="teal"
        class="mt-4 mb-2 mx-5"
      >
        {{ grade }}
      </v-progress-circular>
      <span>Final grade</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['grade', 'morelink', 'pagelink', 'codelink'],
  setup(props) {
    // console.log(pagelink)
  }
}
</script>
