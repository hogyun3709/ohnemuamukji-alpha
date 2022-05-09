<script setup lang="ts"></script>

<template>
  <header class="bg-indigo-300" data-test="header-view-root">
    <button class="w-10 h-10">
      <font-awesome-icon class="w-6 h-6" :icon="['fa', 'bars']" />
    </button>
    <button class="w-10 h-10 float-right">
      <font-awesome-icon class="w-6 h-6" :icon="['fa', 'camera']" />
    </button>
    <button class="w-10 h-10 float-right">
      <font-awesome-icon class="w-6 h-6" :icon="['far', 'user']" />
    </button>
  </header>
</template>
