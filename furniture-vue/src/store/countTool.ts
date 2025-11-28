import { defineStore } from "pinia";

export const useCountToolStore = defineStore('countTool',{
  //存放actions的地方
  actions:{
    //定义了一个简单的actions
    increment(value:number){
      if(value < 20)
      {
        this.sum+= value;
      }
    }

  },
  //真正存储数据的地方
  state(){
    return{
      sum:6,
    }
  }
});
