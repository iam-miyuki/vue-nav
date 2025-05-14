<script setup>
import { useRoute } from 'vue-router';

</script>
<template>
  <nav>
    <ul class="mymenu">
      <li> 
        <router-link :to="{name:'home'}" >Home</router-link>
      </li>
      <li>
        <router-link :to="{name:'testimonial'}" >Témoignages</router-link>
      </li>
      <li>
        <router-link :to="{name:'rates'}">Rates</router-link> 
      </li>
      <li>
        <router-link :to="{name:'team'}">Teams</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
