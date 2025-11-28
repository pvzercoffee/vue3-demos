<template>
    <footer>
        <div class="links">
            <div class="footer-link">
                <p class="text-small">广东肇庆市星湖大道10号公寓</p>
                <div class="icon icon_telephone">
                    <span class="text-small">400-200-500</span>
                </div>
                <div class="icon icon_telephone"></div>
                <p class="text-small">hsvkhsg@gmail.com</p>
            </div>

            <div class="footer-links">



              <!-- <li><RouterLink replace :to="{name:'home'}" class="nav-link">首页</RouterLink></li>
        <li><RouterLink replace :to="{name:'show'}" class="nav-link">产品展示</RouterLink></li>
        <li><RouterLink replace :to="{name:'about'}" class="nav-link">关于我们</RouterLink></li>
        <li><RouterLink replace :to="{name:'board'}" class="nav-link">在线留言</RouterLink></li>
        <li><RouterLink replace :to="{name:'login'}" class="nav-link">登录注册</RouterLink></li> -->





                <h3>快速链接</h3>
                <div id="footer-link-quickly-top" class="footer-link-quickly">
                  <RouterLink replace :to="{name:'home'}" class="footer-link" >&gt;网站首页</RouterLink>
                  <RouterLink replace :to="{name:'show'}" href="show.html" class="footer-link">&gt;产品展示</RouterLink>
                </div>
                <div id="footer-link-quickly-middle" class="footer-link-quickly">
                  <RouterLink replace :to="{name:'about'}" class="footer-link">&gt;关于我们</RouterLink>
                  <RouterLink replace :to="{name:'board'}" class="footer-link">&gt;在线留言</RouterLink>
                </div>
                <div id="footer-link-quickly-bottom" class="footer-link-quickly">
                  <RouterLink replace :to="{name:'login'}"  class="footer-link">&gt;登录注册</RouterLink>
                  <RouterLink replace :to="{name:'/'}" class="footer-link"></RouterLink>
                </div>
            </div>

            <div class="footer-link">
                <h3>站内搜索</h3>
                <input type="text" placeholder="请输入关键字" class="classic-input">
                <button id="bottom-search_submit">搜索</button>
                <p class="text-small">关注我们</p>
                <img src="@/images/fenxiang.png" class="share">
            </div>
        </div>
        <p class="site-code">Copyright c 2009-2061 www.ibii.com,All rights reserved 粤ICP备0000001号 未经同意,不得转载</p>
    </footer>
</template>
<style scoped>
@import '@/styles/global.css';

.footer-link{
    color: #fff;
}
footer{
    width:100%;
    background-color:#222;
    color: #fff;
    margin-top:20px;
    padding-bottom: 20px;
}
.links{
    width: 100%;
    display: flex;
    margin-bottom: 40px;
    text-align: center;
}
.footer-links{
    flex: 1;
}
.footer-link-quickly{
    width: 100%;
    display: flex;
    margin-bottom: 15px;
}
.footer-link{
    flex: 1;
    font-size: 14px;
    font-weight: 300;
}
.site-code{
    text-align: center;
    background-color: #666;
    padding: 8px;
    font-size: 15px;

}
.footer-link{
    text-decoration: none;
}
</style>