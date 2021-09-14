<template>
  <div id="app">
    <router-view>
      <Navbar />
    </router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style src="./App.css"></style>
