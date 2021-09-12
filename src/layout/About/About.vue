<template>
  <div class="aboutContainer">
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
        <p class="textParagraph">
          Every NFT comes with an in-game use case, from attributes to boost
          farming experience and cool-looking designs to build reputation in the
          game. Avatars are inspired by the famous “Cryptopunks” and comes with
          value(Common, Uncommon, Rare and Mythical).
        </p>
        <p class="textParagraph">
          The players can opt to stake, or buy numerous in-game items in the
          marketplace using $TOP token. Items such as vehicles, pickaxe, avatars
          and seeds that comes with different value depending on their rarity.
          Aside from that, $TOP token is also used to expand every user’s
          farming lot to accommodate more space for virtual farming.
        </p>
        <p class="textParagraph">
          Plowtopia NFT game is built and launched on Binance Smart Chain that
          supports the new era of play to earn gaming integrated with
          blockchain.
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
