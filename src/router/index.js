import { createRouter, createWebHashHistory } from 'vue-router'
import BaseLayout from '@/layout/BaseLayout.vue'
import HomeLayout from '@/layout/HomeLayout.vue'
import BlankLayout from '@/layout/BlankLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: BaseLayout,
    children: [
      {
        path: '/login',
        component: () => import('@/views/Login.vue')
      }
    ]
  },
  {
    path: '',
    name: 'HomeLayout',
    component: HomeLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled'
        }
      },
      {
        path: '/setting',
        component: BlankLayout,
        redirect: '/setting/user',
        meta: {
          title: '系统设置',
          icon: 'Setting'
        },
        children: [
          {
            path: '/setting/user',
            component: () => import('@/views/setting/user.vue'),
            meta: {
              title: '用户管理',
              icon: 'Avatar'
            }
          },
          {
            path: '/setting/role',
            component: () => import('@/views/setting/Role.vue'),
            meta: {
              title: '角色管理',
              icon: 'Burger'
            }
          },
          {
            path: '/setting/permission',
            component: () => import('@/views/setting/Permission.vue'),
            meta: {
              title: '权限管理',
              icon: 'ScaleToOriginal'
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

