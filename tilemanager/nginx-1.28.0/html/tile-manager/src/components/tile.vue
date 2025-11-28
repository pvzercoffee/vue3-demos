<template>
  <div>
    <!-- 展示请求结果 - 先判断是否为成功响应对象 -->
    <div v-if="isSuccessResponse(result)">
      <h3>部门列表</h3>
      <ul>
        <li v-for="item in result.data" :key="item.id">
          {{ item.name }}（更新时间：{{ item.updateTime }}）
        </li>
      </ul>
    </div>
    <!-- 展示错误信息 -->
    <div v-else-if="result" style="color: red">请求失败：{{ result }}</div>
    <!-- 加载中状态 -->
    <div v-else>加载中...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import http from '../util/http'

// 定义部门数据类型接口
interface DeptItem {
  id: number
  name: string
  createTime: string
  updateTime: string
}

// 定义接口响应类型
interface ApiResponse {
  code: number
  msg: string
  data: DeptItem[]
}

// 存储请求结果（初始为 null，表示加载中）
const result = ref<ApiResponse | string | null>(null)

// 类型守卫：判断是否为成功的响应对象
const isSuccessResponse = (value: ApiResponse | string | null): value is ApiResponse => {
  return typeof value === 'object' && value !== null && 'code' in value && value.code === 1
}

// 自动加载数据
onMounted(async () => {
  try {
    const response = await http.get<ApiResponse>('depts')
    result.value = response.data
  } catch (error) {
    if (error instanceof Error) {
      result.value = error.message
    } else {
      result.value = String(error)
    }
  }
})
</script>
