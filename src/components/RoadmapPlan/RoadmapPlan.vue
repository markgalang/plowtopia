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
        <p>
          {{ item.description }}
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
import Plan1 from "@/assets/1.png";
import Plan2 from "@/assets/2.png";
import Plan3 from "@/assets/3.png";
import Plan4 from "@/assets/4.png";
import Plan5 from "@/assets/5.png";
import Plan6 from "@/assets/6.png";

export default {
  name: "RoadmapPlan",
  data: () => ({
    planContent: [
      {
        title: "Plan 1",
        description:
          '"To be more specific, the negative impact of the vital decisions will possibly result in The Trace of Dependent Customization" ',
        img: Plan1,
        line: "line1",
        width: "plan1Width",
      },
      {
        title: "Plan 2",
        description:
          '"To be more specific, the negative impact of the vital decisions will possibly result in The Trace of Dependent Customization" ',
        img: Plan2,
        line: "line2",
        width: "plan1Width",
      },
      {
        title: "Plan 3",
        description:
          '"To be more specific, the negative impact of the vital decisions will possibly result in The Trace of Dependent Customization" ',
        img: Plan3,
        line: "line3",
        width: "plan2Width",
      },
      {
        title: "Plan 4",
        description:
          '"To be more specific, the negative impact of the vital decisions will possibly result in The Trace of Dependent Customization" ',
        img: Plan4,
        line: "line4",
        width: "plan1Width",
      },
      {
        title: "Plan 5",
        description:
          '"To be more specific, the negative impact of the vital decisions will possibly result in The Trace of Dependent Customization" ',
        img: Plan5,
        line: "line5",
        width: "plan2Width",
      },
      {
        title: "Plan 6",
        description:
          '"To be more specific, the negative impact of the vital decisions will possibly result in The Trace of Dependent Customization" ',
        img: Plan6,
        line: "line2",
        width: "plan1Width",
      },
    ],
  }),
};
</script>

<style scoped src="./RoadmapPlan.css"></style>
