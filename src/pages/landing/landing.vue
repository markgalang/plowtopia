<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <GameEconomy />
    <RoadMap />
    <Tokenomics />
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
import Tokenomics from "@/layout/Tokenomics/Tokenomics";

export default {
  name: "Landing",
  components: {
    Hero,
    Navbar,
    About,
    GameEconomy,
    RoadMap,
    Footer,
    Tokenomics,
  },
};
</script>
