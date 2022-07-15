import http from "@/axios"

export const login = ({username, password}) => http({
  url: '/login',
  method: 'post',
  data: {
    username: username,
    password: password
  }
})