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
            href="./PLOWTOPIA.pdf"
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
          <a
            href="https://twitter.com/PlowTopia"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            ><img :src="TwitterIcon" alt="Facebook" class="socialIcon"
          /></a>
          <a
            href="https://medium.com/@plowtopia"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            ><img :src="MediumIcon" alt="Facebook" class="socialIcon"
          /></a>
          <a
            href="https://t.me/PlowTopia"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            ><img :src="TelegramIcon" alt="Facebook" class="socialIcon"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GreyLogo from "@/assets/grey-outlined-logo.svg";
import MediumIcon from "@/assets/icons/mediumIcon.svg";
import TwitterIcon from "@/assets/icons/twitterIcon.svg";
import TelegramIcon from "@/assets/icons/telegramIcon.svg";

export default {
  name: "Footer",
  data: () => ({
    GreyLogo,
    MediumIcon,
    TwitterIcon,
    TelegramIcon,
    cultivatorLink: "https://app.plowtopia.io/",
  }),
};
</script>

<style scoped src="./Footer.css"></style>
