<template>
  <div class="page-signup">
    <Carousel />
      <h1 class="path">首页>>注册</h1>
      <h2 class="title-big">注册</h2>
      <hr class="color-hr">
      <div class="login-frame">
          <div class="login">
            <h1>新用户注册</h1>
            <form class="main-form" ref="mainForm">
              <div style="margin: auto;">
                <div class="column">
                  <p class="font-text">用户名</p>
                  <input type="text" class="form-input" required v-model="userInfo.username" placeholder="请输入用户名"  autocomplete="username" />
                  <p  v-text="infoHint.username"  class="font-error"></p>
                </div>

                <div class="column">
                  <p class="font-text">密码</p>
                  <input type="password" class="form-input" required v-model="userInfo.password" placeholder="请输入密码"  autocomplete="current-password" />
                  <p  v-text="infoHint.password" class="font-error"></p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">电子邮件</p>
                  <input type="email" class="form-input" required  v-model="userInfo.email" placeholder="请输入邮箱"  autocomplete="email" />
                  <p  v-text="infoHint.email"  class="font-error"></p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">姓名</p>
                  <input type="text" class="form-input" required v-model="userInfo.name" placeholder="请输入真实姓名"  autocomplete="name" />
                  <p v-text="infoHint.name" class="font-error"></p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">手机号</p>
                  <input type="tel" class="form-input" required v-model="userInfo.telephone" placeholder="请输入可用手机号"  autocomplete="tel" />
                  <p  v-text="infoHint.telephone" class="font-error"></p>
                </div>

                <div class="column">
                  <p class="font-text">性别</p>
                  <input type="radio" name="gender" v-model="userInfo.gender" value="male"/>男
                  <input type="radio" name="gender" v-model="userInfo.gender" value="female"/>女
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">出生日期</p>
                  <input type="date" class="form-input" v-model="userInfo.birthday" required autocomplete="tel" />
                  <p  v-text="infoHint.birthday"  class="font-error"></p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">验证码</p>
                  <input type="text" style="width: 100px;" placeholder="请输入验证码"  class="form-input"  autocomplete="tel" />
                  <img src="@/images/验证码.png" class="verify-code"></img>
                  <p  class="font-error"></p>
                </div>

                <div class="column" style="margin: 50px 0 0 15px;">
                  <input type="button" @click="submitSignup" class="btn-yellow" value="注册">
                  <p style="margin-left: 15px;">已有账号？<RouterLink :to="{name:'login'}">立即登录</RouterLink></p>
                </div>
              </div>

            </form>
          </div>
      </div>
    </div>
</template>
<script setup lang="ts">

import Carousel from '@/components/Carousel.vue';
import { reactive, ref } from 'vue';
import '@/styles/loginAndSignup.css'


const userInfo = reactive({
  username:'',
  password:'',
  email:'',
  name:'',
  telephone:'',
  gender:'male',
  birthday:''
})

let infoHint = reactive({
  username:'',
  password:'',
  email:'',
  name:'',
  telephone:'',
  gender:'',
  birthday:'',
});


function submitSignup(){
  inputVerify();
}

let mainForm = ref<HTMLFormElement | null>(null);

function inputVerify(){
  console.log(typeof(userInfo.birthday));
  if(!mainForm.value?.reportValidity()) return;

  //TODO　看看这是什么意思
  for(let key in infoHint) infoHint[key as keyof typeof infoHint] = '';

  let isValidate = true;

  if(userInfo.username.length < 4 || userInfo.username.length > 16)
  {
    infoHint.username = '用户名格式有误';
    isValidate = false
  }
  if(userInfo.password.length < 6 || userInfo.password.length > 16)
  {
    infoHint.password = '密码格式有误';
    isValidate = false
  }
  if(userInfo.email.length < 5 || userInfo.email.length > 250)
  {
    infoHint.email = '邮箱长度异常';
    isValidate = false
  }
  if(userInfo.name.length < 2 || userInfo.name.length > 250)
  {
    infoHint.name = '姓名长度异常';
    isValidate = false
  }
  if(userInfo.telephone.length != 11)
  {
    infoHint.telephone = '手机号长度异常';
    isValidate = false
  }

  if(!isValidate) return false;

}


</script>

<style scoped>
.login-frame{
  background-image: url('@/images/注册.jpg');

}
.verify-code{
  height: 36px;
  margin: auto;
  /* flex: 1; */
  margin-left: 15px;
}
</style>
