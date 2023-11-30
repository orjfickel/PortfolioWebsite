<template>
  <nav class="navbar">
    
    <!-- <router-link to="/" class="navbar-brand">Terminus Editor</router-link> -->
    <a href="/" class="navbar-brand">Terminus Editor</a>
    
    <div class="d-flex flex-row-reverse mb-6 bg-surface-variant">
      LightDarkMode
    </div>
  </nav>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showChangePassword: false,
      openDropdown: false
    };
  },
  components: {  },
  methods: {
    handlePageClick() {
      this.openDropdown = false;
    }
  },
  created() {
    document.addEventListener("click", this.handlePageClick);
  },
  destroyed() {
    document.removeEventListener("click", this.handlePageClick);
  }
};
</script>
<!-- lang="scss" -->

<style scoped>
.navbar {
  background: var(--color-background-mute);
  min-width: 25em;
  position: relative;
  flex: 0 1 auto;
  width: 100%;
  display: flex;
  z-index: 1;
}
</style>
