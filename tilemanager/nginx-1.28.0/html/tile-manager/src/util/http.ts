import axios from 'axios'

const http = axios.create({
  // 改为相对路径，请求会自动被 Vite 代理转发
  baseURL: '/api/',
  timeout: 5000,
})

export default http
