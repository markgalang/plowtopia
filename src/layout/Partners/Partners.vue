<template>
  <div class="partners-container">
    <div class="container">
      <div class="titleContainer">
        <img
          :src="PartnersTitle"
          class="titleBannerImage"
          alt="Game assets of Plowtopia"
        />
      </div>

      <div class="contentContainer">
        <div class="assetContainer">
          <img :src="ArkLogo" alt="Ark" class="partner" />
          <img :src="AutoBirthLogo" alt="AutoBirth" class="partner smallLogo" />
          <img :src="KramLogo" alt="Kram" class="partner" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PartnersTitle from "@/assets/partners/partners-title.svg";

import ArkLogo from "@/assets/partners/ark-logo.svg";
import AutoBirthLogo from "@/assets/partners/autobirth.svg";
import KramLogo from "@/assets/partners/kram.svg";

export default {
  name: "Partners",
  data: () => ({
    PartnersTitle,
    ArkLogo,
    AutoBirthLogo,
    KramLogo,
  }),
};
</script>

<style scoped src="./Partners.css"></style>
