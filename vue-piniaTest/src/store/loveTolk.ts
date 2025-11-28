import {defineStore} from 'pinia'
import {nanoid} from 'nanoid'
import axios from 'axios'
import { reactive } from 'vue';

//组合式写法
export const useLoveStore = defineStore('loveTolk',()=>{

  //优先读取local storage
  const tolkList = reactive(
    JSON.parse(localStorage.getItem("tolkList") as string) || []
  )
    
  async function getTolk()
  {
    const result = await axios.get("/api/api.php");
    tolkList.unshift({
      id:nanoid(),
      title:result.data
    });
  }
  return {tolkList,getTolk}
});
