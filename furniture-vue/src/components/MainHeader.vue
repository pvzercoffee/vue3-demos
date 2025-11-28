<template>
<div class="main-header">
    <header>
        <span class="title-small">欢迎来到精美家居</span>
        <!-- <div id="header-message"> -->
            <div class="icon icon_telephone header-icon">
                <span class="text-small">400-200-500</span>
            </div>
            <div class="icon icon_email header-icon">
                <span class="text-small">eigewuif@gmail.com</span>
            </div>
        <!-- </div> -->
    </header>
</div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

header{
    width:100%;
    line-height: 30px;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    line-height: 35px;;
    display: flex;
}

header>.icon{
    height:35px;
    background-repeat: no-repeat;
    padding-left: 25px;
    background-image: url('@/images/icon.jpg');
    margin-left: auto;
}
.icon_telephone{
    margin-left: auto;
    background-position: 0 -32px;
}
.icon_email{
    background-position: 0 -73px;
}
</style>