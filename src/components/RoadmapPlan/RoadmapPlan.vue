<template>
  <div>
    <div
      v-for="(item, i) in planContent"
      v-bind:key="i"
      class="roadmapPlanContainer"
      :class="item.width"
    >
      <div class="planDescription">
        <h2>{{ item.title }}</h2>
        <p v-for="(event, i) in item.events" v-bind:key="i">
          {{ event }}
        </p>
      </div>

      <div :class="item.line">
        <hr />
      </div>

      <img :src="item.img" class="planImage" alt="Plan" />
    </div>
  </div>
</template>

<script>
// import Plan1 from "@/assets/1.png";
import Plan2 from "@/assets/2.png";
import Plan3 from "@/assets/3.png";
import Plan4 from "@/assets/4.png";
// import Plan5 from "@/assets/5.png";
import Plan6 from "@/assets/6.png";

export default {
  name: "RoadmapPlan",
  data: () => ({
    planContent: [
      {
        title: "Q3 2021",
        events: [
          "Liquity Mining",
          "NFT Marketplace",
          "Plot and NFT Trading",
          "Strategic Partnerships",
        ],
        img: Plan2,
        line: "line1",
        width: "plan1Width",
      },
      {
        title: "Q4 2021",
        events: [
          "Game Launching (Beta)",
          "Avatars and Costumes Auction",
          "Additional Items/NFTs",
          "CEX listings",
          "PlowTopia Cultivator",
        ],
        img: Plan3,
        line: "line2",
        width: "plan1Width",
      },
      {
        title: "Q1 2022",
        events: [
          "Game Economy Adjustments",
          "Additional Gameplay",
          "Multiplayer",
          "Virtual Trading world",
        ],
        img: Plan4,
        line: "line3",
        width: "plan2Width",
      },
      {
        title: "Q2 2022",
        events: ["Famous NFTs as Avatars", "PlowTopia Punks Avatars"],
        img: Plan6,
        line: "line4",
        width: "plan1Width",
      },
      // {
      //   title: "Plan 5",
      //   events: [
      //     "Liquity Mining",
      //     "NFT Marketplace",
      //     "Plot and NFT Trading",
      //     "Strategic Partnerships",
      //   ],
      //   img: Plan5,
      //   line: "line5",
      //   width: "plan2Width",
      // },
      // {
      //   title: "Plan 6",
      //   events: [
      //     "Liquity Mining",
      //     "NFT Marketplace",
      //     "Plot and NFT Trading",
      //     "Strategic Partnerships",
      //   ],
      //   img: Plan6,
      //   line: "line2",
      //   width: "plan1Width",
      // },
    ],
  }),
};
</script>

<style scoped src="./RoadmapPlan.css"></style>
