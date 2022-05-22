<script setup lang="ts">
import RouletteBoard from "@/components/RouletteBoard.vue";
import { useRouletteStore } from "@/store/roulette";
const store = useRouletteStore();
</script>

<template>
  <main class="flex flex-col justify-center" data-test="roulette-view-root">
    <!--result-->
    <div class="my-4 mx-auto" data-test="option-result">
      <span :class="{ hidden: store.optionFirstCompleted }">
        {{ store.optionFirstText }}</span
      >
      <span :class="{ hidden: store.optionSecondCompleted }">{{
        store.optionSecondText
      }}</span>
      <span :class="{ hidden: store.optionThirdCompleted }">{{
        store.optionThirdText
      }}</span>
      <span :class="{ hidden: store.optionForthCompleted }">{{
        store.optionForthText
      }}</span>
    </div>
    <!--indicator-->
    <div class="mx-auto" data-test="option-indicator">
      <font-awesome-icon class="w-12 h-12" :icon="['fa', 'caret-down']" />
    </div>
    <!--roulette-->
    <RouletteBoard />
  </main>
</template>
