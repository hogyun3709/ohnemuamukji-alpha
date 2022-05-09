<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen">
    <router-view name="header" />
    <router-view class="h-full" name="main" />
    <router-view name="footer" />
  </div>
</template>

<style></style>
