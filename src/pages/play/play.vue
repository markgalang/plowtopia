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
              <a
                href="https://twitter.com/PlowTopia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="TwitterIcon"
                  class="listIcon"
                  alt="https://twitter.com/PlowTopia"
                />
              </a>
            </li>

            <li>
              <a
                href="https://medium.com/@plowtopia"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  :src="MediumIcon"
                  class="listIcon"
                  alt="https://medium.com/@plowtopia"
                />
              </a>
            </li>

            <li>
              <a
                href="https://t.me/PlowTopia"
                target="_blank"
                rel="noopener noreferrer"
                ><img
                  :src="TelegramIcon"
                  class="listIcon"
                  alt="https://t.me/PlowTopia"
              /></a>
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
            <a
              href="https://twitter.com/PlowTopia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="TwitterIcon" alt="https://twitter.com/PlowTopia" />
            </a>
          </li>

          <li>
            <a
              href="https://medium.com/@plowtopia"
              target="_blank"
              rel="noopener noreferrer"
              ><img :src="MediumIcon" alt="https://medium.com/@plowtopia" />
            </a>
          </li>

          <li>
            <a
              href="https://t.me/PlowTopia"
              target="_blank"
              rel="noopener noreferrer"
              ><img :src="TelegramIcon" alt="https://t.me/PlowTopia"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PlowtopiaLogo from "@/assets/plowtopia-logo.svg";
import PlayPageMobile from "@/assets/playPageMobile.svg";
import MediumIcon from "@/assets/icons/mediumIconWhite.svg";
import TwitterIcon from "@/assets/icons/twitterIconWhite.svg";
import TelegramIcon from "@/assets/icons/telegramIconWhite.svg";

export default {
  name: "Landing",
  data: () => ({
    PlowtopiaLogo,
    PlayPageMobile,
    MediumIcon,
    TwitterIcon,
    TelegramIcon,
  }),
};
</script>

<style src="./play.css" scoped></style>
