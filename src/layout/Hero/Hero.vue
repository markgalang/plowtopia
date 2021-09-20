<template>
  <div id="home" class="heroContainer">
    <div class="heroOverlay" />
    <div class="mobileHero">
      <img :src="PlowTopia" class="mobileHeroLogo" alt="Plowtopia" />

      <router-link to="/play" class="heroButton">Play</router-link>
    </div>

    <img :src="GamePreview" class="gamePreview" alt="Plowtopia" />
  </div>
</template>
<script>
import PlowTopia from "@/assets/plowtopia-logo.svg";
import GamePreview from "@/assets/game-preview.svg";

export default {
  name: "Hero",
  data: () => ({
    PlowTopia,
    GamePreview,
  }),
};
</script>

<style scoped src="./Hero.css"></style>
