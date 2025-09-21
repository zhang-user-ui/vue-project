<template>
  <div class="switch">
    <div class="nav">
      <button
        v-for="(c, index) in components"
        :key="index"
        class="nav-btn"
        @click="currentIndex = index">
        {{ c.name }}
      </button>
    </div>
    <component :is="currentComponent" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
const components = [
  {
    name: '添加用户',
    component: defineAsyncComponent(() => import('@/views/homework01/AddUser.vue'))
  },
  {
    name: '删除用户',
    component: defineAsyncComponent(() => import('@/views/homework01/DelUser.vue'))
  },
  {
    name: '更新用户',
    component: defineAsyncComponent(() => import('@/views/homework01/UpdateUser.vue'))
  }
]
const currentIndex = ref(0)
const currentComponent = computed(() => {
  return components[currentIndex.value].component
})
</script>
<style>
.switch {
  max-width: 800px;
  margin: 20px auto;
}
.nav {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}
.nav-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  color: red;
  text-decoration: underline;
}
</style>
