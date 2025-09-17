<template>
  <header class="app-header">
    <nav class="top-nav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/news" class="nav-link">News</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
    <div class="logout">
      <RouterLink to="/logout" class="nav-link">Logout</RouterLink>
    </div>
  </header>
</template>

<script lang="ts" setup name="header">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.app-header {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-nav {
  display: flex;
  gap: 20px;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 5px;
}
.nav-link:hover {
  background-color: #555;
  border-radius: 3px;
}
.logout {
  margin-left: auto;
}
</style>
