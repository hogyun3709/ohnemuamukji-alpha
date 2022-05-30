<script setup lang="ts">
import { useHeaderNavigationStore } from "@/store/header";

const storeHeader = useHeaderNavigationStore();
</script>

<template>
  <header class="bg-indigo-300" data-test="header-view-root">
    <button class="menu-icon" :class="{ open: storeHeader.isMenuOpen }" @click="storeHeader.changeMenuStatus">
      <span class="menu-top-line"></span>
      <span class="menu-middle-line"></span>
      <span class="menu-bottom-line"></span>
    </button>
    <button class="w-10 h-10 m-1 float-right">
      <font-awesome-icon class="w-7 h-7" :icon="['fa', 'camera']" />
    </button>
    <button class="w-10 h-10 m-1 float-right">
      <font-awesome-icon class="w-7 h-7" :icon="['far', 'user']" />
    </button>
  </header>
</template>

<style>
.menu-icon {
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}

.menu-icon span {
  background-color: black;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 3px;
  transition-duration: 700ms;
}

.menu-top-line {
  top: 0px;
  left: 0px;
}

.menu-middle-line {
  top: 13px;
  left: 0px;
  opacity: 1;
}

.menu-bottom-line {
  bottom: 0px;
  left: 0px;
}

.menu-icon.open .menu-top-line {
  transform: rotate(225deg);
  top: 13px;
}

.menu-icon.open .menu-middle-line {
  opacity: 0;
  transition-duration: 200ms;
}

.menu-icon.open .menu-bottom-line {
  transform: rotate(135deg);
  top: 13px;
}
</style>
