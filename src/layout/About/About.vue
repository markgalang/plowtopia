<template>
  <div id="about" class="aboutContainer">
    <div class="container">
      <div class="bannerContainer">
        <img :src="AboutBanner" alt="About Plowtopia" class="aboutBanner" />
      </div>
      <div class="textContainer">
        <p class="textParagraph">
          PlowTopia is a blockchain-based multiplayer RPG and builder game,
          where players can own customizable avatars, farming packages and NFTs.
          The game offers an exciting in-game environment with a virtual
          marketplace and a virtual trading experience where users can interact
          with other players through avatars to buy/sell/trade their in-game
          items and meet new friends.
        </p>
        <p class="textParagraph">
          There will be a total of 100 Daily missions to be completed by the
          players wherein every mission has a reward of 1 PLOT token.
        </p>
        <p class="textParagraph">
          Aside from that, players are able to buy the native PLOT token of the
          project using the in-game currency (GEMS) earned through farming.
          Farming is unlimited and users can mass-produce to sell more
          seeds/crops to other players in the virtual trading world thus earning
          more profit.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import AboutBanner from "@/assets/about-label.svg";

export default {
  name: "About",
  data: () => ({
    AboutBanner,
  }),
};
</script>

<style scoped src="./About.css"></style>
