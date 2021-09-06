<template>
  <div class="roadmap-container">
    <div class="container">
      <div class="titleContainer">
        <img
          :src="RoadMapHeader"
          class="titleBannerImage"
          alt="Roadmap Header"
        />
      </div>

      <div class="roadmapPlansContainer">
        <RoadmapPlan />
      </div>
    </div>
  </div>
</template>
<script>
import RoadMapHeader from "@/assets/roadmap-label.svg";
import RoadmapPlan from "../../components/RoadmapPlan/RoadmapPlan.vue";
export default {
  name: "Roadmap",
  data: () => ({
    RoadMapHeader,
  }),

  components: {
    RoadmapPlan,
  },
};
</script>

<style scoped src="./Roadmap.css"></style>
