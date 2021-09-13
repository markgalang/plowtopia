<template>
  <div class="navbarContainer">
    <div class="container">
      <div class="navbarContent">
        <img :src="PlowTopia" class="navbarBrandLogo" alt="Plowtopia" />
        <div class="navbarLinksContainer">
          <scrollactive activeClass="scrollactive-item" exact alwaysTrack>
            <a href="#home" class="scrollactive-item navbar-link">Home</a>
            <a href="#about" class="scrollactive-item navbar-link">About</a>
            <a href="#roadmap" class="scrollactive-item navbar-link">Roadmap</a>
            <a href="#tokenomics" class="scrollactive-item navbar-link"
              >Tokenomics</a
            >
            <a
              href="./whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="navbar-link"
              >Whitepaper</a
            >
            <a href="#roadmap" class=" navbar-link">Cultivator</a>
            <a href="#roadmap" class=" navbar-link">Play</a>
          </scrollactive>
        </div>
        <img @click="toggle()" :src="Menu" alt="Menu" class="menu" />
        <a
          href="https://google.com"
          class="getToken"
          target="_blank"
          rel="noopener noreferrer"
          >Get a Token</a
        >
        <div class="menuMobile" :class="{ showMenu: state }">
          <div class="menuContentMobile">
            <div class="closeButtonContainer">
              <img @click="toggle()" :src="Close" alt="Close" class="close" />
            </div>

            <div class="menuLinksContainer">
              <ul>
                <li><a href="" class="active">Home</a></li>
                <li><a href="">About Plowtopia</a></li>
                <li><a href="">Game Roadmap</a></li>
                <li><a href="">White Paper</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PlowTopia from "@/assets/plowtopia-logo.png";
import Menu from "@/assets/menu.svg";
import Close from "@/assets/close.svg";
// import Whitepaper from "@/assets/whitepaper.pdf";

export default {
  name: "Navbar",
  data: () => ({
    PlowTopia,
    Menu,
    Close,
    // Whitepaper,
    state: false,
  }),

  methods: {
    toggle() {
      this.state = !this.state;
    },
  },
};
</script>

<style scoped src="./Navbar.css"></style>
