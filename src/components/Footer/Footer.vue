<template>
  <div class="footerContainer">
    <div class="container contentContainer">
      <div class="footerLogoContainer">
        <img :src="GreyLogo" class="footerLogo" alt="PlowTopia" />
        <p class="footerText">PlowTopia All Rights Reserved</p>
      </div>
      <div class="navContainer">
        <div class="linksContainer">
          <a href="#home" class="link">Home</a>
          <a href="#about" class="link">About</a>
          <a href="#roadmap" class="link">Roadmap</a>
          <a href="#tokenomics" class="link">Tokenomics</a>

          <a
            href="./whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >Whitepaper</a
          >
          <a
            :href="cultivatorLink"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >Cultivator</a
          >
          <router-link to="/play" class="link">Play</router-link>
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
    cultivatorLink: "https://app.plowtopia.io",
  }),
};
</script>

<style scoped src="./Footer.css"></style>
