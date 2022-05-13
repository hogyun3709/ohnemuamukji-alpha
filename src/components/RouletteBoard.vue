<script setup lang="ts">
import { useRouletteStore } from "@/store/roulette";

const store = useRouletteStore();
</script>

<template>
  <div class="relative mx-4" data-test="roulette-board">
    <img :src="store.getRouletteBoard" alt="룰렛 보드 이미지" />
    <ul>
      <li
        class="absolute top-20 left-32"
        :class="{ '!left-24': store.optionCurrentQuantity === 3 }"
      >
        <label class="hidden" for="option-input-1">
          <span>룰렛옵션1</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" />
      </li>
      <li
        class="absolute top-60 left-32"
        :class="{ '!left-24': store.optionCurrentQuantity === 3 }"
      >
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션2</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" />
      </li>
      <li
        class="absolute top-40 left-56 hidden"
        :class="{ '!block': store.optionCurrentQuantity >= 3 }"
      >
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션3</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" />
      </li>
      <li
        class="absolute top-40 left-10 hidden"
        :class="{ '!block': store.optionCurrentQuantity >= 4 }"
      >
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션4</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" />
      </li>
    </ul>
  </div>
  <!--option controller-->
  <div class="flex justify-around my-10" data-test="option-controller">
    <button
      :class="{
        'text-slate-400':
          store.optionCurrentQuantity === store.optionMinQuantity,
      }"
      @click="store.changeOptionQuantity(-1)"
    >
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'minus-square']" />
    </button>
    <button>
      <font-awesome-icon class="w-8 h-8" :icon="['fa', 'eraser']" />
    </button>
    <button
      :class="{
        'text-slate-400':
          store.optionCurrentQuantity === store.optionMaxQuantity,
      }"
      @click="store.changeOptionQuantity(1)"
    >
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'plus-square']" />
    </button>
  </div>
</template>

<style></style>
