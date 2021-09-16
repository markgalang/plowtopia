<template>
  <div class="game-assets-container">
    <div class="container">
      <div class="titleContainer">
        <img
          :src="GameAssetsLabel"
          class="titleBannerImage"
          alt="Game assets of Plowtopia"
        />
      </div>

      <div class="contentContainer">
        <h1 class="assetTitle">Seeds</h1>
        <div class="assetContainer">
          <img :src="Carrot" alt="Carrot" class="asset" />
          <img :src="Corn" alt="Corn" class="asset" />
          <img :src="Strawberry" alt="Strawberry" class="asset" />
          <img :src="Eggplant" alt="Eggplant" class="asset" />
          <img :src="Tomato" alt="Tomato" class="asset" />
          <img :src="Wheat" alt="Wheat" class="asset" />
        </div>
      </div>

      <div class="contentContainer">
        <h1 class="assetTitle">Tools</h1>
        <div class="assetContainer">
          <img :src="HandFork" alt="HandFork" class="asset" />
          <img :src="Hoe" alt="Hoe" class="asset" />
          <img :src="Shovel" alt="Shovel" class="asset" />
        </div>
      </div>

      <div class="contentContainer">
        <h1 class="assetTitle">Tractor</h1>
        <div class="assetContainer">
          <img :src="TractorBlue" alt="TractorBlue" class="asset" />
          <img :src="TractorRed" alt="TractorRed" class="asset" />
          <img :src="TractorYellow" alt="TractorYellow" class="asset" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GameAssetsLabel from "@/assets/gameAssets/game-assets-label.svg";

import Carrot from "@/assets/gameAssets/Carrot.svg";
import Corn from "@/assets/gameAssets/Corn.svg";
import Tomato from "@/assets/gameAssets/Tomato.svg";
import Eggplant from "@/assets/gameAssets/Eggplant.svg";
import Strawberry from "@/assets/gameAssets/Strawberry.svg";
import Wheat from "@/assets/gameAssets/Wheat.svg";

import HandFork from "@/assets/gameAssets/HandFork.svg";
import Hoe from "@/assets/gameAssets/Hoe.svg";
import Shovel from "@/assets/gameAssets/Shovel.svg";

import TractorRed from "@/assets/gameAssets/TractorRed.svg";
import TractorBlue from "@/assets/gameAssets/TractorBlue.svg";
import TractorYellow from "@/assets/gameAssets/TractorYellow.svg";

export default {
  name: "GameAssets",
  data: () => ({
    GameAssetsLabel,
    Carrot,
    Corn,
    Tomato,
    Eggplant,
    Strawberry,
    Wheat,
    TractorRed,
    TractorBlue,
    TractorYellow,
    HandFork,
    Hoe,
    Shovel,
  }),
};
</script>

<style scoped src="./GameAssets.css"></style>
