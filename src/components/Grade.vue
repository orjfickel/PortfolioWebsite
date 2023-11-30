<template>
  <div class="d-flex mt-4 mb-1 ml-1 align-center">
    <v-btn v-if="pagelink != null" target="_blank" href="">Learn more</v-btn>
    <v-btn v-else-if="morelink != null" @click="$router.push(morelink)">Learn more</v-btn>
    <v-btn v-if="codelink != null" class="ml-4" target="_blank" :href="codelink">Source code</v-btn>
    <div v-if="grade != null" class="d-flex  mx-auto flex-column justify-center align-center text-center" max-width="100">
      <v-progress-circular
        :rotate="360"
        :size="70"
        :width="10"
        :model-value="grade * 10"
        color="teal"
        class="mt-n1 mb-2 mx-5"
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
