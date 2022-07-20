<template>
  <el-container style="height: 100%;">
    <el-aside width="200px">
      <aside-menu />
    </el-aside>
    <el-container>
      <el-header class="header-bg">Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AsideMenu from '@/components/AsideMenu.vue'


</script>

<style>
.header-bg {
  background-color: #f8f1f1;
}
</style>
