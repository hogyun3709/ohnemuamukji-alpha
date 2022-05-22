<script setup lang="ts">
import { useRouletteStore } from "@/store/roulette";
import { ref } from "vue";
const store = useRouletteStore();

const roulette = ref<HTMLImageElement>();

function rotateRoulette() {
  const loopAnimation = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(7200deg)" },
  ];
  const loopAnimationOptions = {
    duration: 2000,
    easing: "ease-in-out",
  };
  roulette.value?.animate(loopAnimation, loopAnimationOptions);
}

</script>

<template>
  <div id="roulette" ref="roulette" class="relative mx-4" data-test="roulette-board" @click="rotateRoulette">
    <img :src="store.getRouletteBoard" alt="룰렛 보드 이미지" />
    <ul>
      <li class="absolute top-20 left-32" :class="{ '!left-24': store.optionCurrentQuantity === 3 }">
        <label class="hidden" for="option-input-1">
          <span>룰렛옵션1</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :class="{ 'text-center': store.optionFirstCompleted }"
          :value="store.optionFirstText" @input="store.setFirstOption" @blur="store.addFirstOptionToList"
          @focus="store.editFirstOption" />
      </li>
      <li class="absolute top-60 left-32" :class="{ '!left-24': store.optionCurrentQuantity === 3 }">
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션2</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :class="{ 'text-center': store.optionSecondCompleted }"
          :value="store.optionSecondText" @input="store.setSecondOption" @blur="store.addSecondOptionToList"
          @focus="store.editSecondOption" />
      </li>
      <li class="absolute top-40 left-56 hidden" :class="{ '!block': store.optionCurrentQuantity >= 3 }">
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션3</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :value="store.optionThirdText"
          @input="store.setThirdOption" @blur="store.addThridOptionToList" @focus="store.editThirdOption" />
      </li>
      <li class="absolute top-40 left-10 hidden" :class="{ '!block': store.optionCurrentQuantity >= 4 }">
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션4</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :value="store.optionForthText"
          @input="store.setForthOption" @blur="store.addForthOptionToList" @focus="store.editForthOption" />
      </li>
    </ul>
  </div>

  <!--option controller-->
  <div class="flex justify-around my-10" data-test="option-controller">
    <button :class="{
      'text-slate-400':
        store.optionCurrentQuantity === store.optionMinQuantity,
    }" @click="store.changeOptionQuantity(-1)">
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'minus-square']" />
    </button>
    <button @click="store.clearOptionTextTotal">
      <font-awesome-icon class="w-8 h-8" :icon="['fa', 'eraser']" />
    </button>
    <button :class="{
      'text-slate-400':
        store.optionCurrentQuantity === store.optionMaxQuantity,
    }" @click="store.changeOptionQuantity(1)">
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'plus-square']" />
    </button>
  </div>
</template>

<style>
</style>
