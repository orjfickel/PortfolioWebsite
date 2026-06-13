<template>
  <div class="d-flex chips-container mt-auto h-100 mb-1 ml-1 align-end">
    <div class="d-flex chips-container mt-4">
      <v-btn v-if="pagelink != null" color="button" class="button" target="_blank" :href="pagelink">Learn more</v-btn>
      <v-btn v-else-if="morelink != null" color="button" class="button" @click="$router.push(morelink)">Learn more</v-btn>
      <v-btn v-if="codelink != null" color="button" class="button" target="_blank" :href="codelink">Source code</v-btn>
    </div>
    <div v-if="grade != null" class="grade-chip d-flex mt-auto  flex-column  align-center text-center" max-width="100">
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

<style>
  .grade-chip{
    margin: 12px;
    margin-left: auto;
  }
  .button{
    margin: 12px;
  }
  .chips-container{
    flex-wrap: nowrap;
  }
@media (max-width: 504px){
  .chips-container{
    flex-wrap: wrap;
    justify-content: center !important;
  }
  .grade-chip{
    margin: 12px;
  }
}
</style>
