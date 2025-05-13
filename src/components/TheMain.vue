<script setup>
import HomeView from "@/components/MainViews/HomeView.vue";
import RatesView from "@/components/MainViews/RatesView.vue";
import TeamView from "@/components/MainViews/TeamView.vue";
import TestimonialView from "@/components/MainViews/TestimonialView.vue";

const props = defineProps({
  thisView: {
    type: String,
    default: "home",
  },
});
</script>
<template>
  <main v-if="thisView === 'home'">
    <HomeView />
  </main>
  <main v-else-if="thisView === 'testimonial'">
    <TestimonialView />
  </main>
  <main v-else-if="thisView === 'rates'">
    <RatesView />
  </main>
  <main v-else-if="thisView === 'team'">
    <TeamView />
  </main>
  <main v-else>
    <HomeView />
  </main>
</template>
<style scoped></style>
