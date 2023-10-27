<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-center">
      <div class="flex-col items-center justify-center text-center">
        <div class="flex items-center">
          <img
            alt="user_avatar"
            class="w-20 rounded-full border-2 border-white"
            src="https://img.qimuu.icu/interface_avatar/1699981437456797697/XqT3Nsto-psc.jfif"
          />
        </div>
        <span class="mt-6 font-semibold text-lg">柒木</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
