<template>
  <div>
    <navbar />
    <div>
      <router-view />
    </div>
    <tab-bar />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/layouts/Navbar/Navbar.vue";
import TabBar from "@/layouts/TabBar/TabBar.vue";
</script>

<style scoped></style>
