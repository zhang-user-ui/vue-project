<template>
  <div class="app-container">
    <AppHeader />
    <div class="main-body">
      <Sidebar />
      <main class="main-content">
        <RouterView />
      </main>
    </div>
    <footer class="app-footer">东北林业大学 软件工程专业 2046©</footer>
  </div>
</template>

<script lang="ts" setup name="app">
import AppHeader from './components/AppHeader.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-body {
  display: flex;
  flex: 1;
}
.main-content {
  flex: 1;
}
.app-footer {
  background-color: #f0f0f0;
  text-align: center;
  padding: 10px;
}
</style>
