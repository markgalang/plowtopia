<template>
  <div id="about" class="aboutContainer">
    <div class="container">
      <div class="bannerContainer">
        <img :src="AboutBanner" alt="About Plowtopia" class="aboutBanner" />
      </div>
      <div class="textContainer">
        <p class="textParagraph">
          Plowtopia is a blockchain-based multiplayer RPG and builder game,
          where the players will own customizable avatars, worlds to showcase
          their creativity by building and earn through virtual farming. The
          game offers an exciting in-game environment with a virtual marketplace
          and a virtual trading experience where users can interact with other
          players through avatars to buy/sell their in-game items or meet new
          friends.
        </p>
        <p class="textParagraph">
          It is a risk-free play to earn game where players are able to buy the
          native $TOP token of the project using the in-game currency (GEMS)
          earned through farming. Farming is unlimited and users can
          mass-produce to sell more seeds/crops to other players in the virtual
          trading world thus earning more profit.
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
