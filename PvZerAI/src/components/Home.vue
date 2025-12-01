<template>
<input type="text" placeholder="请输入内容" v-model="userText" class="userInput"/>
<button @click="send" class="user-btn">发送</button>
<p>{{ response }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

let userText = ref("你好");
let response = ref("返回结果")

async function send(){
    const result = await axios.post('https://api.deepseek.com/chat/completions',
        {
            model:"deepseek-chat",
            messages:[{role:'user',content:userText.value}]
        },
        {
            headers:{
                'Content-Type':"application/json",
                'Authorization':'Bearer sk-96da675cf00440d7bbb7357e347654cb'
            }
        }
    );

    response.value = result.data.choices[0].message.content
}

</script>

<style lang="css" scoped>
.userInput{
    width: 400px;
    height: 40px;
    font-size: 20px;
}
.user-btn{
    width: 200px;
    height: 45px;
    background: rgb(89, 162, 198);
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    margin-left: 30px;
}
</style>