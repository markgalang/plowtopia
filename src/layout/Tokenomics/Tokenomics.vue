<template>
  <div id="tokenomics" class="roadmap-container">
    <div class="container">
      <div class="titleContainer">
        <img
          :src="TokenomicsTitle"
          class="titleBannerImage"
          alt="Tokenomics of Plowtopia"
        />
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
          <p><strong> Token Sale</strong></p>
          <p><strong>150,000,000 </strong></p>
          <p><strong>15%</strong> - Unloked at launched</p>
        </div>
        <div class="dataContainer" style="background-color: #6DA12B">
          <p><strong> Team and Advisors </strong></p>
          <p><strong>150,000,000 </strong></p>
          <p><strong>15%</strong> - Fully locked - TBD Unlock</p>
        </div>
        <div class="dataContainer" style="background-color: #619124">
          <p><strong> Play to Earn </strong></p>
          <p><strong>350,000,000 </strong></p>
          <p><strong>35%</strong> - Locked Till Game Launching</p>
        </div>
        <div class="dataContainer" style="background-color: #56821D">
          <p><strong>CEX and Marketing </strong></p>
          <p><strong>100,000,000 </strong></p>
          <p><strong>10%</strong> - 90% locked</p>
        </div>
        <div class="dataContainer" style="background-color: #4C711B">
          <p><strong>Reserves</strong></p>
          <p><strong>50,000,000</strong></p>
          <p><strong>5%</strong> - Fully locked - TBD Unlock</p>
        </div>
        <div class="dataContainer" style="background-color: #426414">
          <p><strong>Initial liquidity</strong></p>
          <p><strong>50,000,000 </strong></p>
          <p><strong>5%</strong></p>
        </div>
        <div class="dataContainer" style="background-color: #385710">
          <p><strong>Staking and Rewards</strong></p>
          <p><strong>70,000,000</strong></p>
          <p><strong>15%</strong> - Unloked at launched</p>
        </div>
        <div class="dataContainer" style="background-color: #2F4B09">
          <p><strong> Ecosystem Fund</strong></p>
          <p><strong>50,000,000</strong></p>
          <p><strong>5%</strong> - Locked - TBD Unlock</p>
        </div>
        <div class="dataContainer" style="background-color: #263E06">
          <p><strong>User Incentives </strong></p>
          <p><strong>30,000,000</strong></p>
          <p><strong>3%</strong> - Locked - TBD Unlock</p>
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
