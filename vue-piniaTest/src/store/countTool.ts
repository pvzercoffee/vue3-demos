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
  },

  //若有对数据的加工处理需求，并形成一个可返回、外部可直接使用的值，可在getters中定义
  getters:{
    big10Sum():number{
      return this.sum*10;
    }
  }
});
