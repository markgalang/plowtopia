<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <GameEconomy />
    <RoadMap />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/layout/Hero/Hero";
import About from "@/layout/About/About";
import RoadMap from "@/layout/Roadmap/Roadmap";
import GameEconomy from "@/layout/GameEconomy/GameEconomy";

export default {
  name: "App",
  components: {
    Hero,
    Navbar,
    About,
    GameEconomy,
    RoadMap,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
