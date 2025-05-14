<template>
	<nav>
		<ul class='mymenu'>
			<li>
				<RouterLink to="/">Home</RouterLink>
			</li>
			<li>
				<RouterLink :to="{ name : 'testimonial' }">Témoignages</RouterLink>
			</li>
			<li>
				<RouterLink to="/rates">Rates</RouterLink>
			</li>
			<li>
				<RouterLink to="/team">Teams</RouterLink>
			</li>
		</ul>

	</nav>
</template>

<script setup>
</script>

<style>
nav {
  grid-area: nav;
}


nav >ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav >ul>li {
  margin-top: 10px;
}

ul.mymenu  {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


.mymenu li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

.mymenu li a:hover:not(.active) {
  background-color: #8bc089;
}

.mymenu .router-link-active {
  background-color: #4CAF50;
}
</style>