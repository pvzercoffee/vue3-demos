import {defineStore} from 'pinia'
import {nanoid} from 'nanoid'
import axios from 'axios'

export const useLoveStore = defineStore('loveTolk',{
  actions:{
    async getTolk()
    {
      const result = await axios.get("/api/api.php");
      alert();
      this.tolkList.unshift({
        id:nanoid(),
        title:result.data
      });
    }
  },
  state(){
    return{
      tolkList:[{id:"test01",title:"测试"}]
    }
  }
});
