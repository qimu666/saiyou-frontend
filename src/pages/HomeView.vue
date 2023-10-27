<template>
  <el-alert
    v-if="text === 'Offline'"
    title="网络不可用，请检查您的网络配置 !"
    show-icon
    type="error"
  />
  <div v-loading="loading" class="flex justify-center items-center">首页</div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useOnline } from "@vueuse/core";
const online = useOnline();
const text = computed(() => (online.value ? "Online" : "Offline"));

import { ref } from "vue";

const loading = ref(true);
</script>
<style scoped></style>
