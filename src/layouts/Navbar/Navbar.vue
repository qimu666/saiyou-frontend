<template>
  <nav class="navbar bg-base-100">
    <div class="navbar-start w-4/5">
      <el-dropdown trigger="click">
        <label class="md:hidden btn btn-ghost btn-circle">
          <svg
            class="h-5 w-5 avatar"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </label>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              ><router-link to="/" class="text-sm"
                >首页</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link to="/competition" class="text-sm"
                >竞赛</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link to="/team" class="text-sm"
                >队伍</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link to="/community" class="text-sm"
                >社区</router-link
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div class="btn btn-ghost btn-circle">
        <a>
          <svg
            aria-hidden="true"
            class="w-7"
            data-view-component="true"
            version="1.1"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
            ></path>
          </svg>
        </a>
      </div>
      <div class="btn btn-ghost">
        <router-link to="/" class="text-lg">首页</router-link>
      </div>
      <div class="btn btn-ghost">
        <router-link to="/competition" class="text-lg">竞赛</router-link>
      </div>
      <div class="btn btn-ghost hidden md:flex">
        <router-link to="/team" class="text-lg">队伍 </router-link>
      </div>
      <div class="btn btn-ghost hidden md:flex">
        <router-link to="/community" class="text-lg">社区 </router-link>
      </div>
    </div>
    <!--  navbar-lift-->
    <div class="navbar-end">
      <div class="btn btn-ghost btn-circle hidden md:flex">
        <switch-theme />
      </div>
      <div class="btn btn-ghost btn-circle hidden md:flex">
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>
      <div class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </div>
      <el-dropdown class="btn btn-ghost btn-circle avatar">
        <div class="w-8 rounded-full">
          <img
            src="https://img.qimuu.icu/interface_avatar/1699981437456797697/XqT3Nsto-psc.jfif"
          />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <svg
                class="w-5 h-5 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                  fill="currentColor"
                ></path>
              </svg>
              <router-link to="/my_info"
                >&nbsp;个人信息</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item>
              <svg
                class="w-5 h-5 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div class="text-red-500" @click="open2()">
                &nbsp;退出登录
              </div></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!--  navbar-right-->
  </nav>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";
import SwitchTheme from "@/components/SwitchTheme.vue";
const open2 = () => {
  ElMessage({
    showClose: true,
    message: "退出成功",
    type: "success",
  });
};
</script>
<style scoped></style>
