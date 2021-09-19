<template>
  <div id="tokenomics" class="roadmap-container">
    <div class="container">
      <div class="titleContainer">
        <img
          :src="TokenomicsTitle"
          class="titleBannerImage"
          alt="Tokenomics of Plowtopia"
        />
        <h3 class="supplyText">Total Supply: 300,000,000</h3>
      </div>

      <div class="graphContainer">
        <img
          :src="TokenomicsGraph"
          class="tokenomicsGraph"
          alt="Tokenomics of Plowtopia"
        />
      </div>

      <div class="mobileContainer">
        <div class="dataContainer" style="background-color: #7DB733">
          <p><strong>Public Sale </strong></p>
          <p><strong>6,000,000 </strong></p>
          <p><strong>2%</strong> - Fully unlocked at launched</p>
        </div>
        <div class="dataContainer" style="background-color: #6DA12B">
          <p><strong>Private Sale </strong></p>
          <p><strong>3,000,000 </strong></p>
          <p>
            <strong>1% - 2%</strong> Months locked, <strong>5%</strong> monthly
          </p>
        </div>
        <div class="dataContainer" style="background-color: #619124">
          <p><strong>Team and Advisors </strong></p>
          <p><strong>45,000,000 </strong></p>
          <p><strong>15%</strong> - Fully locked - TBD unlockv</p>
        </div>
        <div class="dataContainer" style="background-color: #56821D">
          <p><strong>Play to Earn </strong></p>
          <p><strong>105,000,000 </strong></p>
          <p><strong>35%</strong> - Locked till Game Launching</p>
        </div>
        <div class="dataContainer" style="background-color: #4C711B">
          <p><strong>Future Listings and Marketing </strong></p>
          <p><strong>30,000,000 </strong></p>
          <p><strong>10%</strong> - Fully locked TBD unlock</p>
        </div>
        <div class="dataContainer" style="background-color: #426414">
          <p><strong>Initial liquidity</strong></p>
          <p><strong>15,000,000 </strong></p>
          <p><strong>5%</strong></p>
        </div>
        <div class="dataContainer" style="background-color: #385710">
          <p><strong>Staking and Rewards</strong></p>
          <p><strong>66,000,000 </strong></p>
          <p><strong>22%</strong> - Unlocked - 2% Monthly emission</p>
        </div>
        <div class="dataContainer" style="background-color: #2F4B09">
          <p><strong>Ecosystem Fund</strong></p>
          <p><strong>15,000,000</strong></p>
          <p><strong>5%</strong> - Locked - TBD Unlock</p>
        </div>
        <div class="dataContainer" style="background-color: #263E06">
          <p><strong>User Incentives </strong></p>
          <p><strong>15,000,000</strong></p>
          <p><strong>5%</strong> - Locked - TBD Unlock</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TokenomicsTitle from "@/assets/tokenomics-title.svg";
import TokenomicsGraph from "@/assets/tokenomics-graph.svg";

export default {
  name: "Tokenomics",
  data: () => ({
    TokenomicsTitle,
    TokenomicsGraph,
  }),
};
</script>

<style scoped src="./Tokenomics.css"></style>
