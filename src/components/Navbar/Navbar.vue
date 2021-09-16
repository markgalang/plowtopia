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
            <a
              :href="cultivatorLink"
              target="_blank"
              rel="noopener noreferrer"
              class="navbar-link"
              >Cultivator</a
            >
          </scrollactive>
        </div>
        <img @click="toggleMenu()" :src="Menu" alt="Menu" class="menu" />

        <router-link to="/play" class="getToken">Play</router-link>

        <div class="menuMobile" :class="{ showMenu: isMenuVisible }">
          <div class="menuContentMobile">
            <div class="closeButtonContainer">
              <img
                @click="toggleMenu()"
                :src="Close"
                alt="Close"
                class="close"
              />
            </div>

            <div class="menuLinksContainer">
              <ul>
                <li @click="toggleMenu()">
                  <a href="#home" class="navbar-link">Home</a>
                </li>
                <li @click="toggleMenu()">
                  <a href="#about" class="navbar-link">About</a>
                </li>
                <li @click="toggleMenu()">
                  <a href="#roadmap" class="navbar-link">Roadmap</a>
                </li>
                <li @click="toggleMenu()">
                  <a href="#tokenomics" class="navbar-link">Tokenomics</a>
                </li>
                <li @click="toggleMenu()">
                  <a
                    href="./whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="navbar-link"
                    >Whitepaper</a
                  >
                </li>
                <li @click="toggleMenu()">
                  <a
                    :href="cultivatorLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="navbar-link"
                    >Cultivator</a
                  >
                </li>

                <li @click="toggleMenu()">
                  <router-link to="/play" class="getTokenMobile"
                    >Play</router-link
                  >
                </li>
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

export default {
  name: "Navbar",
  data: () => ({
    PlowTopia,
    Menu,
    Close,
    isMenuVisible: false,
    cultivatorLink: "https://app.plowtopia.io",
    getTokenLink: "https://pancakeswap.com",
  }),

  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>

<style scoped src="./Navbar.css"></style>
