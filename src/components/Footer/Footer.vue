<template>
  <div class="footerContainer">
    <div class="container contentContainer">
      <div class="footerLogoContainer">
        <img :src="GreyLogo" class="footerLogo" alt="PlowTopia" />
        <p class="footerText">PlowTopia All Rights Reserved</p>
      </div>
      <div class="navContainer">
        <div class="linksContainer">
          <a href="#" class="link">Home</a>
          <a href="#" class="link">About Plowtopia</a>
          <a href="#" class="link">Game Roadmap</a>
          <a href="#" class="link">Whitepaper</a>
        </div>

        <div class="socialIconContainer">
          <a href="#" class="link"
            ><img :src="FacebookLogo" alt="Facebook" class="socialIcon"
          /></a>
          <a href="#" class="link"
            ><img :src="InstagramLogo" alt="Facebook" class="socialIcon"
          /></a>
          <a href="#" class="link"
            ><img :src="FacebookLogo" alt="Facebook" class="socialIcon"
          /></a>
          <a href="#" class="link"
            ><img :src="InstagramLogo" alt="Facebook" class="socialIcon"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GreyLogo from "@/assets/grey-outlined-logo.svg";
import FacebookLogo from "@/assets/facebook.svg";
import InstagramLogo from "@/assets/instagram.svg";

export default {
  name: "Footer",
  data: () => ({
    GreyLogo,
    FacebookLogo,
    InstagramLogo,
  }),
};
</script>

<style scoped src="./Footer.css"></style>
