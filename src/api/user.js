import http from '@/axios'

export const getUser = () => http({
    url: '/system/user'
  })
