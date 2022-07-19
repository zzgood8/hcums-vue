<template>
  <el-card class="user-card">

    <el-row class="user-card-avatar">
      <el-avatar :size="80" src="http://dummyimage.com/250x250" />
    </el-row>

    <el-row class="user-card-avatar user-card-row-space">
      <span style="font-size: 20px; font-weight: 900;">{{ user.name }}</span>
    </el-row>

    <el-row class="user-card-avatar user-card-row-space">
      <span style="color: #b6b6b6; font-size: 15px;">{{ user.username }}</span>
    </el-row>

    <el-row class="user-card-row-space user-card-center">
      <el-space wrap>
        <el-tag v-for="item in user.roles" :key="item" type="success">{{ item }}</el-tag>
      </el-space>
    </el-row>

    <el-row class="user-card-bottom user-card-row-space">
      <span style="font-size: 9px;">
        <el-icon :size="10">
          <User />
        </el-icon>

        {{ user.createBy }}
      </span>
      <span style="font-size: 9px;">
        <el-icon :size="10">
          <Timer />
        </el-icon>

        {{ user.createTime.substring(0, 10) }}
      </span>
    </el-row>


  </el-card>
</template>

<script setup>
import { defineProps } from "vue"
defineProps(['user'])

</script>

<style>
.user-card {
  width: 200px;
  position: relative;
}

.user-card-bottom {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;
  width: 160px;
}

.user-card-avatar {
  display: flex;
  justify-content: center;
}

.user-card-center {
  margin-bottom: 15px;
}

.user-card-row-space {
  margin-top: 5px;
}
</style>