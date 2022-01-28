<template>
  <el-menu :default-active="defaultActive">
    <el-sub-menu v-for="item in menu" :key="item.key" :index="item.key">
      <template #title>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="innerItem in item.children"
        :key="innerItem.key"
        :index="innerItem.key"
      >{{ innerItem.name }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const defaultActive = ref('1-1')
const menu = reactive([
  {
    name: 'Browser',
    key: '1',
    route: '/Browser',
    children: [
      {
        name: 'useClipboard 复制粘贴',
        key: '1-1',
        route: '/Browser/useClipboard'
      }
    ]
  }
])
</script>