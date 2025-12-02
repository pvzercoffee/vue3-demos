<template>
  <div class="page-signup">
    <Carousel />
      <h1 class="path">首页>>注册</h1>
      <h2 class="title-big">注册</h2>
      <hr class="color-hr">
      <div class="login-frame">
          <div class="login">
            <h1>新用户注册</h1>
            <form class="main-form">
              <div style="margin: auto;">
                <div class="column">
                  <p class="font-text">用户名</p>
                  <input type="text" class="form-input" placeholder="请输入用户名"  autocomplete="username" />
                  <p class="font-error">&nbsp;</p>
                </div>

                <div class="column">
                  <p class="font-text">密码</p>
                  <input type="text" class="form-input" placeholder="请输入密码"  autocomplete="current-password" />
                  <p class="font-error">&nbsp;</p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">电子邮件</p>
                  <input type="email" class="form-input" placeholder="请输入邮箱"  autocomplete="email" />
                  <p class="font-error">&nbsp;</p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">姓名</p>
                  <input type="text" class="form-input" placeholder="请输入真实姓名"  autocomplete="name" />
                  <p class="font-error">&nbsp;</p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">手机号</p>
                  <input type="text" class="form-input" placeholder="请输入可用手机号"  autocomplete="tel" />
                  <p class="font-error">&nbsp;s</p>
                </div>

                <div class="column">
                  <p class="font-text">性别</p>
                  <input type="radio" name="gender" value="male"/>男
                  <input type="radio" name="gender" value="female"/>女
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">出生日期</p>
                  <input type="date" class="form-input"  autocomplete="tel" />
                  <p class="font-error">&nbsp;</p>
                  <br />
                </div>

                <div class="column">
                  <p class="font-text">验证码</p>
                  <input type="text" style="width: 100px;" placeholder="请输入验证码"  class="form-input"  autocomplete="tel" />
                  <img src="@/images/验证码.png" class="verify-code"></img>
                  <p class="font-error">&nbsp;</p>
                </div>

                <div class="column" style="margin: 50px 0 0 15px;">
                  <button class="btn-yellow">注册</button>
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
import { HintColors } from '@/constants/HintColors';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import '@/styles/loginAndSignup.css'



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
