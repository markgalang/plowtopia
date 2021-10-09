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
          <img :src="seed1" alt="Plowtopia Seed" class="asset" />
          <img :src="seed2" alt="Plowtopia Seed" class="asset" />
          <img :src="seed3" alt="Plowtopia Seed" class="asset" />
          <img :src="seed4" alt="Plowtopia Seed" class="asset" />
          <img :src="seed5" alt="Plowtopia Seed" class="asset" />
        </div>
      </div>

      <div class="contentContainer">
        <div class="assetTitleContainer">
          <h1 class="assetTitle">Avatars</h1>
          <p>
            Playable and customizable avatars with distinct rarity: Uncommon,
            Common, Rare, Mythical
          </p>
        </div>
        <div class="assetContainer">
          <div class="avatarContainer">
            <img :src="avatar1" alt="Plowtopia Avatar" class="avatarAsset" />
          </div>

          <div class="avatarContainer">
            <img :src="avatar2" alt="Plowtopia Avatar" class="avatarAsset" />
          </div>

          <div class="avatarContainer">
            <img :src="avatar3" alt="Plowtopia Avatar" class="avatarAsset" />
          </div>

          <div class="avatarContainer">
            <img :src="avatar4" alt="Plowtopia Avatar" class="avatarAsset" />
          </div>

          <div class="avatarContainer">
            <img :src="avatar5" alt="Plowtopia Avatar" class="avatarAsset" />
          </div>

          <div class="avatarContainer">
            <img :src="avatar6" alt="Plowtopia Avatar" class="avatarAsset" />
          </div>
        </div>
      </div>

      <div class="contentContainer">
        <div class="assetTitleContainer">
          <h1 class="assetTitle">Vehicles</h1>
          <p>Enjoy the game while riding your cool vehicles</p>
        </div>
        <div class="assetContainer">
          <img :src="tractor1" alt="Plowtopia Tractor" class="tractorAsset" />
          <img :src="tractor2" alt="Plowtopia Tractor" class="tractorAsset" />
          <img :src="tractor3" alt="Plowtopia Tractor" class="tractorAsset" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GameAssetsLabel from "@/assets/gameAssets/game-assets-label.svg";

import seed1 from "@/assets/gameAssets/seed1.svg";
import seed2 from "@/assets/gameAssets/seed2.svg";
import seed3 from "@/assets/gameAssets/seed3.svg";
import seed4 from "@/assets/gameAssets/seed4.svg";
import seed5 from "@/assets/gameAssets/seed5.svg";

import avatar1 from "@/assets/gameAssets/avatar1.svg";
import avatar2 from "@/assets/gameAssets/avatar2.svg";
import avatar3 from "@/assets/gameAssets/avatar3.svg";
import avatar4 from "@/assets/gameAssets/avatar4.svg";
import avatar5 from "@/assets/gameAssets/avatar5.svg";
import avatar6 from "@/assets/gameAssets/avatar6.svg";

import tractor1 from "@/assets/gameAssets/Tractor1.svg";
import tractor2 from "@/assets/gameAssets/Tractor2.svg";
import tractor3 from "@/assets/gameAssets/Tractor3.svg";

export default {
  name: "GameAssets",
  data: () => ({
    seed1,
    seed2,
    seed3,
    seed4,
    seed5,
    tractor1,
    tractor2,
    tractor3,
    GameAssetsLabel,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
  }),
};
</script>

<style scoped src="./GameAssets.css"></style>
