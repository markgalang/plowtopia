<template>
  <div class="play-page-wrapper">
    <div class="play-page-container">
      <div class="play-page-content">
        <router-link to="/" class="logoContainer">
          <img
            :src="PlowtopiaLogo"
            alt="Play to earn coming soon."
            class="logo"
          />

          <img
            :src="PlayPageMobile"
            alt="Play to earn coming soon."
            class="mobileImage"
          />

          <div class="textContent">
            <h1>
              Farm, Trade and Earn with the most Innovative play to earn on
              Binance Smart Chain!
            </h1>
            <h2>A bountiful harvest awaits</h2>
          </div>
        </router-link>

        <div class="social-links">
          <ul>
            <li>
              <a href=""><img :src="Facebook" alt="Facebook"/></a>
            </li>

            <li>
              <a href=""><img :src="Instagram" alt="Instagram"/></a>
            </li>

            <li>
              <a href=""><img :src="Discord" alt="Discord"/></a>
            </li>

            <li>
              <a href=""><img :src="Telegram" alt="Telegram"/></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mobileContainer">
        <img :src="PlayPageMobile" alt="Play to earn coming soon." />
      </div>

      <div class="social-links-mob">
        <ul>
          <li>
            <a href=""><img :src="Facebook" alt="Facebook"/></a>
          </li>

          <li>
            <a href=""><img :src="Instagram" alt="Instagram"/></a>
          </li>

          <li>
            <a href=""><img :src="Discord" alt="Discord"/></a>
          </li>

          <li>
            <a href=""><img :src="Telegram" alt="Telegram"/></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PlowtopiaLogo from "@/assets/plowtopia-logo.svg";
import PlayPageMobile from "@/assets/playPageMobile.svg";
import Facebook from "@/assets/fb.svg";
import Instagram from "@/assets/ig.svg";
import Discord from "@/assets/discord.svg";
import Telegram from "@/assets/tg.svg";

export default {
  name: "Landing",
  data: () => ({
    PlowtopiaLogo,
    PlayPageMobile,
    Facebook,
    Instagram,
    Discord,
    Telegram,
  }),
};
</script>

<style src="./play.css" scoped></style>
