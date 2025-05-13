<script setup>
import {ref} from 'vue';
const emits = defineEmits(["onClickNav"]);
const selectedView = ref('home')

const onClickNav = (view) => {
  emits("onClickNav", view);
  selectedView.value = view;
};

</script>
<template>
  <nav>
    <ul class="mymenu">
      <li :class="{ active: selectedView==='home' }"> 
        <a href="index.html" @click.prevent="onClickNav('home')">Home</a>
      </li>
      <li :class="{ active: selectedView==='testimonial' }">
        <a href="testimonials.html" @click.prevent="onClickNav('testimonial')">Témoignages</a>
      </li>
      <li :class="{ active: selectedView==='rates' }">
        <a href="rates.html" @click.prevent="onClickNav('rates')">Rates</a>
      </li>
      <li :class="{ active: selectedView==='team' }">
        <a href="team.html" @click.prevent="onClickNav('team')">Teams</a>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
