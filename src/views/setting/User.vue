<template>
  <el-scrollbar view-style="height: 100%;">
    <el-card shadow="never" style="height: 99%;">
      <div class="row-class">
        <UserCard v-for="item in users" :key="item.username" :user="item" style="margin: 10px" />
      </div>
    </el-card>
  </el-scrollbar>
</template>

<script setup>
import * as api from '@/api/user.js'
import UserCard from '@/components/UserCard.vue'
import { ref } from 'vue';

const users = ref([])

api.getUser().then(res => {
  if (res.code == 200) {
    users.value = res.data
  }
}).catch(err => {
  console.log(err)
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