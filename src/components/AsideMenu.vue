<template>
  <!-- 顶部logo -->
  <div class="header-logo"></div>
  <!-- 路由菜单 -->
  <el-menu router default-active="/home">
    <!-- 路由渲染 -->
    <template v-for="item in routerMenu" :key="item.path">
      <el-menu-item index="/home">
        <template #title>
          <el-icon>
            <component :is="'HomeFilled'" />
          </el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>
      <!-- 单路由 -->
      <el-menu-item v-if="!item.children" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <!-- 层级路由 -->
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 二级路由 -->
        <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
          <template #title>
            <el-icon>
              <component :is="subItem.meta.icon" />
            </el-icon>
            <span>{{ subItem.meta.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { asynRoutes } from '@/router';
import { ref } from 'vue';

// 路由数组树
const routerMenu = ref(asynRoutes)

// 获取当前路由数组树
// router.getRoutes().forEach(item => {
//   if (item.name == 'HomeLayout') {
//     routerMenu.value = item.children
//   }
// })



</script>

<style>
.header-logo {
  height: 40px;
  margin: 10px 30px;
  background-color: #5f5f5f;
}
.el-menu {
  border-right: 0 !important;
}
</style>