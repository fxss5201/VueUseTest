<template>
  <el-container>
    <el-header>
      <div class="header-content">Vueuse学习使用</div>
    </el-header>
    <el-container>
      <el-aside width="260px">
        <page-aside></page-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-content {
  height: 59px;
  line-height: 59px;
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  border-bottom: 1px solid #e9e9e9;
}
</style>
