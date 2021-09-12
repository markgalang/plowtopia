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
          <h2 class="economyTitle">Play to Earn</h2>
          <p class="economyText">
            Gems are the in-game currency earned by farming and virtual trading.
            It is used to buy in-game assets to boost your farming rewards.
            Users also earn PLOT by completing daily missions which then can be
            sold on Decentralized Exchanges.
          </p>
        </div>

        <div class="economy">
          <img :src="MarketIcon" alt="Market Economy" class="economyImage" />
          <h2 class="economyTitle">Staking Rewards</h2>
          <p class="economyText">
            A Staking platform will be deployed that will incentivized stakers
            and Liquidity providers whereas holders will gain a share from
            protocol fees and revenue which will be paid out in $PLOT.
          </p>
        </div>

        <div class="economy">
          <img :src="MarketIcon" alt="Market Economy" class="economyImage" />
          <h2 class="economyTitle">NFT Marketplace</h2>
          <p class="economyText">
            The main currency on PlowTopia game and Web Marketplace is PLOT.
            Users can purchase numerous Items and NFTs using the token where it
            creates a strong demand.
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
