<template>
  <div class="navbarContainer">
    <div class="container">
      <img :src="PlowTopia" class="navbarBrandLogo" alt="Plowtopia" />
    </div>
  </div>
</template>
<script>
import PlowTopia from "@/assets/plowtopia-logo.png";

export default {
  name: "Navbar",
  data: () => ({
    PlowTopia,
  }),
};
</script>

<style scoped src="./Navbar.css"></style>
