<script setup>
const emits = defineEmits(["onClickNav"]);

const onClickNav = (view) => {
  emits("onClickNav", view);
};
</script>
<template>
  <nav>
    <ul class="mymenu">
      <li>
        <a href="index.html" @click.prevent="onClickNav('home')">Home</a>
      </li>
      <li>
        <a href="testimonials.html" @click.prevent="onClickNav('testimonial')">Témoignages</a>
      </li>
      <li>
        <a href="rates.html" @click.prevent="onClickNav('rates')">Rates</a>
      </li>
      <li>
        <a href="team.html" @click.prevent="onClickNav('team')">Teams</a>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
