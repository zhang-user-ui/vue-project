<template>
  <aside class="sidebar">
    <div
      class="category"
      :class="{ active: currentCategory === 'cloud' }"
      @click="currentCategory = 'cloud'">
      云技术管理
    </div>
    <nav v-if="currentCategory === 'cloud'">
      <RouterLink to="/cloud-server" class="side-link">云服务器</RouterLink>
      <RouterLink to="/cloud-database" class="side-link">云数据库</RouterLink>
      <RouterLink to="/load-balance" class="side-link">负载均衡</RouterLink>
    </nav>
    <div
      class="category"
      :class="{ active: currentCategory === 'security' }"
      @click="currentCategory = 'security'">
      安全管理
    </div>
    <nav v-if="currentCategory === 'security'">
      <RouterLink to="/yun-dun-console" class="side-link">云盾控制台</RouterLink>
      <RouterLink to="/ddos-high-ip" class="side-link">DDoS高防IP</RouterLink>
      <RouterLink to="/web-firewall" class="side-link">Web应用防火墙</RouterLink>
      <RouterLink to="/ca-service" class="side-link">CA证书服务</RouterLink>
    </nav>
  </aside>
</template>

<script lang="ts" setup name="sidebar">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const currentCategory = ref('cloud')
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 10px;
}
.category {
  background-color: #2e86de;
  color: #fff;
  padding: 8px;
  cursor: pointer;
  margin-bottom: 10px;
}
.category.active {
  background-color: #1a5276;
}
.side-link {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 5px;
  margin: 5px 0;
}
.side-link:hover {
  background-color: #ddd;
}
</style>
