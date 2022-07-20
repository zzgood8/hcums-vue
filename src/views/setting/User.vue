<template>
  <div style="height: 100%">
    <el-card shadow="never" style="margin-bottom: 20px;">
      <el-form :inline="true" :model="selectParams">
        <el-form-item label="用户名">
          <el-input v-model="selectParams.username" />
        </el-form-item>

        <el-form-item label="昵称">
          <el-input v-model="selectParams.name" />
        </el-form-item>

        <el-form-item label="角色">
          <el-select v-model="selectParams.roleName" placeholder="请选择">
            <el-option label="超级管理员" value="shanghai" />
            <el-option label="VIP用户" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="创建人">
          <el-input v-model="selectParams.createBy" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" >查询</el-button>
        </el-form-item>

        <el-form-item>
          <el-button >重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-scrollbar view-style="height: 100%;">
      <el-card shadow="never" style="height: 99%;">
        <div class="row-class">
          <UserCard v-for="item in users" :key="item.username" :user="item" style="margin: 10px" />
        </div>
      </el-card>
    </el-scrollbar>
  </div>

</template>

<script setup>
import * as api from '@/api/user.js'
import UserCard from '@/components/UserCard.vue'
import { ref, reactive } from 'vue';

const users = ref([])

api.getUser().then(res => {
  if (res.code == 200) {
    users.value = res.data
  }
}).catch(err => {
  console.log(err)
})

const selectParams = reactive({
  name: '',
  username: '',
  roleName: '',
  createBy: ''
})


</script>

<style>
.row-class {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
}

.row-class-view {
  height: 100%;
}
</style>