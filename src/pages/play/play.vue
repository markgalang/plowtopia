<template>
  <div class="play-page-container">
    <div class="backgroundOverlay" />

    <router-link to="/" class="logoContainer">
      <img :src="PlowtopiaLogo" alt="Play to earn coming soon." class="logo" />

      <h1>
        Farm, Trade and Earn with the most Innovative play to earn on Binance
        Smart Chain!
      </h1>
      <h2>A bountiful harvest awaits</h2>
    </router-link>
  </div>
</template>

<script>
import PlowtopiaLogo from "@/assets/plowtopia-logo.png";

export default {
  name: "Landing",
  data: () => ({
    PlowtopiaLogo,
  }),
};
</script>

<style src="./play.css" scoped></style>
