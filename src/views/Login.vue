<template>
  <el-card class="login-card" header="用户登录">
    <el-form ref="loginForm" :model="loginData" label-position="top" label-suffix=":" :rules="loginFormRules"
      :hide-required-asterisk="true" status-icon label-width="120px">

      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginData.username" autocomplete="off" />
      </el-form-item>

      <el-form-item label="密码" prop="password" inline-message>
        <el-input v-model="loginData.password" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button :loading="loginState" size="large" style="width: 100%;margin-top: 10px;" type="primary" @click="submitForm()">{{ loginState ? '登录中' : '登录'}}
        </el-button>
      </el-form-item>

    </el-form>
  </el-card>
</template>

<script setup>
import router from '@/router';
import { reactive, ref } from 'vue'
import * as api from '@/api/login.js'

const loginData = reactive({
  username: '',
  password: ''
})

const loginState = ref(false)

const loginForm = ref(null)

const loginFormRules = reactive({
  username: [
    { required: true, message: '用户名不能为空!', trigger: 'blur' },
    { min: 3, max: 15, message: '长度为3-15', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空!', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度必须大于6', trigger: 'blur' }
  ]
})

const submitForm = () => {
  loginForm.value.validate(isValid => {
    if (isValid) {
      loginState.value = true
      api.login(loginData).then(res => {
        console.log(res)
        router.replace('/home')
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        loginState.value = false
      })
    }
  })
}
</script>

<style>
.login-card {
  height: 320px;
  width: 350px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
}
</style>