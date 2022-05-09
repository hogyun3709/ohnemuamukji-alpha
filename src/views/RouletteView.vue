<script setup lang="ts">
import RouletteBoard from "@/components/RouletteBoard.vue";
</script>

<template>
  <main class="flex flex-col justify-center" data-test="roulette-view-root">
    <!--result-->
    <div class="my-4 mx-auto" data-test="option-result"></div>
    <!--indicator-->
    <div class="mx-auto" data-test="option-indicator">
      <font-awesome-icon class="w-12 h-12" :icon="['fa', 'caret-down']" />
    </div>
    <!--roulette-->
    <RouletteBoard data-test="roulette-board" />
    <!--option controller-->
    <div class="flex justify-around my-10" data-test="option-controller">
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'minus-square']" />
      <font-awesome-icon class="w-8 h-8" :icon="['fa', 'eraser']" />
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'plus-square']" />
    </div>
  </main>
</template>
