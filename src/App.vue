<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <!-- 侧边栏导航 -->
    <nav class="sidebar">
      <h3>导航菜单</h3>
      <ul>
        <li>
          <router-link to="/experiments02/courseSelect" active-class="active">实验二</router-link>
        </li>
        <li><router-link to="/homework01/indexView" active-class="active">作业一</router-link></li>
        <li><router-link to="/homework02/indexView" active-class="active">作业二</router-link></li>
        <li><router-link to="/homework03/indexView" active-class="active">作业三</router-link></li>
      </ul>
    </nav>

    <!-- 右侧内容区 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

代码 预览

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  position: fixed; /* 固定在视口 */
  top: 0;
  left: 0;
  width: 160px;
  height: 100vh; /* 占满整个视口高度 */
  background: #f5f5f5;
  border-right: 1px solid #e8e8e8;
  padding: 20px 0;
  overflow-y: auto; /* 如果菜单项很多，可以滚动 */
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 5px 0;
}

.sidebar a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.2s;
}

.sidebar a:hover {
  background: #e8e8e8;
}

.sidebar a.active {
  background: #4a90e2;
  color: white;
}

.main-content {
  margin-left: 160px; /* 为固定侧边栏留出空间 */
  flex: 1;
  padding: 24px;
  background: #ffffff;
  overflow-y: auto;
}
</style>
