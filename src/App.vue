<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMain from "@/components/TheMain.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import { ref } from "vue";

const selectedView = ref("home");

const onClickNavHandler = (v) => {
  selectedView.value = v;
};
</script>

<template>
  <TheHeader />
  <TheMain :thisView="selectedView" />
  <TheNavbar @onClickNav="onClickNavHandler" />
  <TheFooter />
  <TheSidebar />
</template>
<style scoped></style>
