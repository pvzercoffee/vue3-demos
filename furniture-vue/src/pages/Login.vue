<template>
    <div class="page-login">
      <MainBanner />
        <h1 class="path">首页>>登录/注册</h1>
        <h2 class="title-big">登录/注册</h2>
        <hr class="color-hr">
        <div class="login-frame">
            <div class="login">
                <span class="font-text">用户名：</span>
                <input type="text" name="username" pattern="[A-Za-z0-9]" maxlength="16" minlength="4" id="input_username" placeholder="只能输入字母或数字，4-16个"/>

                <div class="login-empty"></div>

                <span class="font-text">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                <input type="password" name="password" pattern="[A-Za-z0-9]" maxlength="12" minlength="6" id="input_password" placeholder="密码长度6-12位"/>

                <div class="login-empty"></div>
                <p id="form_hint">&nbsp;</p>
                <button class="btn-yellow" id="btn_login">登录</button>
                <button class="btn-yellow" id="btn_register">注册</button>
            </div>
        </div>
      </div>
</template>
<script setup lang="ts">
import MainBanner from '@/components/MainBanner.vue';

</script>
<style scoped>


.banner{
    background-image: url('../images/banner1.jpg');
}
.login-frame{
    width: 80%;
    margin: 60px 0 0 10%;
    height: 500px;
    background-image: url('../images/登录.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: 1px solid #888;
}
.login{
    width:60%;
    margin: 8% 0 0 20%;
    background-color: #fff;
    text-align: center;
    padding: 20px 0 20px 0;
    border: 3px solid #888;

}
.login-empty{
    height: 40px;
}

.login>input[type='text'],.login>input[type='password']{
    width: 200px;
    height: 40px;
}

.btn-yellow{
    width: 200px;
    height: 40px;
    border: 0;
    background-color: rgb(230, 213, 116);
    margin-top: 20px;
}
.btn-yellow:hover{
    background-color: rgb(213, 197, 109);
}
.login>#btn_register{
    margin-left: 50px;

}
@media (max-width: 768px) {

    .login-frame{
        margin:80px 0 0 0;
        width: calc(100% - 2px);
        background-size: auto auto;
    }
    .login{
        width: calc(100% - 7px);
        margin:20% 0 0 0;
    }
    .login>#btn_register{
        margin-left: 0;
    }
    .banner{
      background-size: auto 100%;
      background-position: -900px 0;
    }
}
</style>