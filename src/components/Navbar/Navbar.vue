<template>
  <div class="navbarContainer">
    <div class="container">
      <div class="navbarContent">
        <img :src="PlowTopia" class="navbarBrandLogo" alt="Plowtopia" />
        <div class="navbarLinksContainer">
          <ul>
            <li><a href="" class="active">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Roadmap</a></li>
            <li><a href="">White Paper</a></li>
            <li><a href="">Cultivator</a></li>
            <li><a href="">Play</a></li>
          </ul>
        </div>
        <img @click="toggle()" :src="Menu" alt="Menu" class="menu" />
        <button class="getToken">Get a Token</button>
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

export default {
  name: "Navbar",
  data: () => ({
    PlowTopia,
    Menu,
    Close,
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
