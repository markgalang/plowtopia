<template>
  <div id="app">
    <!-- <Navbar />
    <Hero /> -->
    <Container>
      <About />
    </Container>
    <!-- <GameEconomy />
    <RoadMap />
    <Footer /> -->
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import Hero from "@/layout/Hero/Hero";
import Container from "@/components/Container/Container";
import About from "@/layout/About/About";
// import RoadMap from "@/layout/Roadmap/Roadmap";
// import GameEconomy from "@/layout/GameEconomy/GameEconomy";

export default {
  name: "App",
  components: {
    Container,
    // Hero,
    // Navbar,
    About,
    // GameEconomy,
    // RoadMap,
    // Footer,
  },
};
</script>

<style src="./App.css"></style>
