<template>

<div  class="bg-surface-variant mb-4">
<v-container class=" ">
    <div class="d-flex mt-5">
      <v-spacer ></v-spacer>
      <div class="d-flex flex-column">
      <div class="d-flex">
        <div class="mb-4 mr-auto"
            style="max-width: 70%;"
        >
          <h2 class="text-h4 mb-4">About me</h2>

          <div
          class="mr-auto"
            >
          <span
          >Recently graduated with a Master’s degree in Computer Science
(Game and Media Technology). I have spent the last year of my
master’s focused on ray tracing, and hope to continue specialising
in computer graphics and/or engine programming</span></div>

        </div>

        <div class="d-flex justify-end ml-auto mb-3 mt-3"
        >
          <v-avatar size="160px" variant="elevated"  class="ml-3 my-auto">
            <v-img height="200" src="@/assets/face.jpg" />
          </v-avatar>
        </div>
      </div>
      <div class="d-flex align-end mt-n1 mb-1">
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
            class="mx-2"
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

        </div>
      </div>

      <v-spacer ></v-spacer>
    </div>
</v-container>
</div>
<!-- <v-divider class=" my-9 "></v-divider> -->
</template>

<script>
// const chipClass = "my-2";
</script>

<style>
.chip{

}
</style>
