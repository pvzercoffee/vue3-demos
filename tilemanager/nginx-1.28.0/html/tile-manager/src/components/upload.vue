<!-- html -->
<template>
<h1>文件上传</h1>
<form action="http://localhost:8080/upload" method="post" enctype="multipart/form-data">

  <input type="text" placeholder="请输入用户名" name="username"/>

  <input type="file" name="file"/>
  <input type="submit" value="上传" />

</form>
</template>

<!-- scripts -->
 <script lang="ts" setup>

 </script>

<!-- styles -->
 <style scoped>
 input[type='text']
 {
  padding: 10px;
  font-size: 17px;
  margin: 8px;
 }

 input[type='text'], input[type='submit']
 {
  padding: 10px;
  font-size: 17px;
  margin: 8px;
 }
</style>