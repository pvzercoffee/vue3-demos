<template>
    <div class="page-login">
      <Carousel />
        <h1 class="path">首页>>登录/注册</h1>
        <h2 class="title-big">登录/注册</h2>
        <hr class="color-hr">
        <div class="login-frame">
            <div class="login">
                <span class="font-text">用户名：</span>
                <input type="text" name="username" pattern="[A-Za-z0-9]" class="form-input" id="input_username" autocomplete="username"
                :maxlength="nameMaxLength" :minlength="nameMinLength"
                v-model="username"
                :placeholder="`只能输入字母或数字，${nameMinLength}-${nameMaxLength}个`"/>

                <div class="login-empty"></div>

                <span class="font-text">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                <input type="password" name="password" pattern="[A-Za-z0-9]"class="form-input"  autocomplete="current-password"
                v-model="password"
                :maxlength="pwdMaxLength" :minlength="pwdMinLength" id="input_password"
                :placeholder="`密码长度${pwdMinLength}-${pwdMaxLength}位`"/>

                <div class="login-empty"></div>
                <p class="form_hint" :style="{'color':hintColor}">&nbsp;{{ hint }}</p>
                <button type="button" class="btn-yellow" @click="login" id="btn_login">登录</button>
                <button type="button" class="btn-yellow" @click="signup" id="btn_register">注册</button>
              </div>
        </div>
      </div>
</template>
<script setup lang="ts">

import Carousel from '@/components/Carousel.vue';
import { HintColors } from '@/constants/HintColors';
import { ref } from 'vue';
import '@/styles/loginAndSignup.css'
import { useRouter } from 'vue-router';

const InputLimit = {
  nameMaxLength : 16,
  nameMinLength : 4,
  pwdMaxLength : 12,
  pwdMinLength : 6
}

const {nameMaxLength,nameMinLength,pwdMaxLength,pwdMinLength} = InputLimit;

let username = ref('');
let password = ref('');
let hint = ref('');
let hintColor = ref(HintColors.normal)
function login(){
  inputVerify();
}

function inputVerify(){

  const nameLength = username.value.length;
  const pwdLength = password.value.length;

  let isVerify = false;

  if(nameLength < nameMinLength) hint.value = '用户名过短';
  else if(nameLength > nameMaxLength) hint.value = '用户名过长';
  else if(pwdLength < pwdMinLength) hint.value = '密码过短';
  else if(pwdLength > pwdMaxLength) hint.value = '密码过长';
  else
  {
    isVerify = true;
    hint.value = '输入合法';
  }

  hintColor.value = isVerify ? HintColors.legal : HintColors.illegal;

}
const router = useRouter();
function signup(){
  router.replace({
    name:'signup'
  });
}

</script>

<style scoped>
.login-frame{
  background-image: url('@/images/登录.jpg');
}
</style>

