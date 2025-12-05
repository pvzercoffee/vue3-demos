import mitt from "mitt";
//事件总线emit


//调用mitt得到emitter，emitter能够绑定事件、触发事件、注销事件
const emitter = mitt();

//绑定事件
emitter.on('test',()=>{
  console.log("test事件被调用了");
});

//暴露emitter
export default emitter;