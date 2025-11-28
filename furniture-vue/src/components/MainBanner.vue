<template>
    <div class="banner">
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.banner{
    width:100%;
    height: 400px;
    display: flex;
    background-image: url('@/images/2.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* margin-top:15px; */
}
@media(max-width:768px){
    .banner{
        background-size: 100% 100%;
        background-position: 20% 0;
    }
}
</style>