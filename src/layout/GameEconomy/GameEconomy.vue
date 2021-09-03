<template>
  <div class="game-economy-container">
    <div class="container">
      <div class="titleContainer">
        <img
          :src="GameEconomyLabel"
          class="titleBannerImage"
          alt="Game Econonomy of Plowtopia"
        />
      </div>
      <div class="economyContainer">
        <div class="economy">
          <img :src="MarketIcon" alt="Market Economy" class="economyImage" />
          <p class="economyText">
            "At any rate, with the exception of the basic feature has proved to
            be reliable in the scope of The Ranking of Accessible Principle"
            (Moshe Moffitt in The Book of the Resource Management)
          </p>
        </div>

        <div class="economy">
          <img :src="MarketIcon" alt="Market Economy" class="economyImage" />
          <p class="economyText">
            "At any rate, with the exception of the basic feature has proved to
            be reliable in the scope of The Ranking of Accessible Principle"
            (Moshe Moffitt in The Book of the Resource Management)
          </p>
        </div>

        <div class="economy">
          <img :src="MarketIcon" alt="Market Economy" class="economyImage" />
          <p class="economyText">
            "At any rate, with the exception of the basic feature has proved to
            be reliable in the scope of The Ranking of Accessible Principle"
            (Moshe Moffitt in The Book of the Resource Management)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GameEconomyLabel from "@/assets/game-economy-label.svg";
import MarketIcon from "@/assets/market.svg";
// import CoinIcon from "@/assets/coin.svg";
// import GemIcon from "@/assets/gem.svg";

export default {
  name: "GameEconomy",
  data: () => ({
    GameEconomyLabel,
    MarketIcon,
    // CoinIcon,
    // GemIcon,
  }),
};
</script>

<style scoped src="./GameEconomy.css"></style>
