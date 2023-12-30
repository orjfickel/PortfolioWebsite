<template>
  <div class="mb-2">
    <v-icon icon="mdi-calendar" class="mr-1" color="grey-lighten-1"></v-icon>
    <span>{{date}}</span>
  </div>
</template>

<script>
export default {
  props: ['date'],
}
</script>
