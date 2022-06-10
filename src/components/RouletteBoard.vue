<script setup lang="ts">
import { useRouletteStore } from "@/store/roulette";
import { ref, reactive } from "vue";
import { useMouseInElement } from "@vueuse/core";

const store = useRouletteStore();

const roulette = ref<HTMLImageElement>();
const mouse = reactive(useMouseInElement(roulette));

const state = reactive({
  enterX: 0,
  enterY: 0,
  leaveX: 0,
  leaveY: 0,
});

function isClockwise() {
  /* 1시 - 3시 */
  if (state.enterX < state.leaveX && state.enterY < state.leaveY) {
    return true;
  }
  /* 3시 - 6시 */
  if (state.enterX > state.leaveX && state.enterY < state.leaveY) {
    return true;
  } else {
    false;
  }
}

function isCounterClockwise() {
  /* 1시 - 3시  */
  if (state.enterX > state.leaveX && state.enterY > state.leaveY) {
    return true;
  }
  /* 3시 - 6시 */
  if (state.enterX < state.leaveX && state.enterY > state.leaveY) {
    return true;
  } else {
    false;
  }
}

function getTouchEnter() {
  state.enterX = mouse.elementX;
  state.enterY = mouse.elementY;
}
function getTouchLeave() {
  state.leaveX = mouse.elementX;
  state.leaveY = mouse.elementY;
  rotateRoulette();
}

function rotateRoulette() {
  const loopAnimationClockwise = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(7200deg)" },
  ];
  const loopAnimationCounterClockwise = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(-7200deg)" },
  ];
  const loopAnimationOptions = {
    duration: 2000,
    easing: "ease-in-out",
  };
  if (isClockwise()) {
    roulette.value?.animate(loopAnimationClockwise, loopAnimationOptions);
  }
  if (isCounterClockwise()) {
    roulette.value?.animate(
      loopAnimationCounterClockwise,
      loopAnimationOptions
    );
  }
}
</script>

<template>
  <div id="roulette" ref="roulette" class="relative mx-4" data-test="roulette-board" @touchmove="getTouchEnter"
    @touchend="getTouchLeave">
    <img :src="store.getRouletteBoard" alt="룰렛 보드 이미지" data-test="roulette-image" />
    <ul data-test="roulette-option-list">
      <li class="absolute top-20 left-32" :class="{ '!left-24': store.optionCurrentQuantity === 3 }"
        data-test="roulette-option">
        <label class="hidden" for="option-input-1">
          <span>룰렛옵션1</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :class="{ 'text-center': store.optionFirstCompleted }"
          :value="store.optionFirstText" data-test="roulette-first-option" @input="store.setFirstOption"
          @blur="store.addFirstOptionToList" @focus="store.editFirstOption" />
      </li>
      <li class="absolute top-60 left-32" :class="{ '!left-24': store.optionCurrentQuantity === 3 }"
        data-test="roulette-option">
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션2</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :class="{ 'text-center': store.optionSecondCompleted }"
          :value="store.optionSecondText" data-test="roulette-second-option" @input="store.setSecondOption"
          @blur="store.addSecondOptionToList" @focus="store.editSecondOption" />
      </li>
      <li class="absolute top-40 left-56 hidden" :class="{ '!block': store.optionCurrentQuantity >= 3 }"
        data-test="roulette-option">
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션3</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :value="store.optionThirdText"
          data-test="roulette-third-option" @input="store.setThirdOption" @blur="store.addThridOptionToList"
          @focus="store.editThirdOption" />
      </li>
      <li class="absolute top-40 left-10 hidden" :class="{ '!block': store.optionCurrentQuantity >= 4 }"
        data-test="roulette-option">
        <label class="hidden" for="option-input-2">
          <span>룰렛옵션4</span>
        </label>
        <input class="w-20 rounded-md border-black border-2" :value="store.optionForthText"
          data-test="roulette-forth-option" @input="store.setForthOption" @blur="store.addForthOptionToList"
          @focus="store.editForthOption" />
      </li>
    </ul>
  </div>
  <!--option controller-->
  <div class="flex justify-around my-10" data-test="roulette-option-counter">
    <button :class="{
      'text-slate-400':
        store.optionCurrentQuantity === store.optionMinQuantity,
    }" data-test="roulette-change-option-decrease" @click="store.changeOptionQuantity(-1)">
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'minus-square']" />
    </button>
    <button data-test="roulette-option-text-reset" @click="store.clearOptionTextTotal">
      <font-awesome-icon class="w-8 h-8" :icon="['fa', 'eraser']" />
    </button>
    <button :class="{
      'text-slate-400':
        store.optionCurrentQuantity === store.optionMaxQuantity,
    }" data-test="roulette-change-option-increase" @click="store.changeOptionQuantity(1)">
      <font-awesome-icon class="w-8 h-8" :icon="['far', 'plus-square']" />
    </button>
  </div>
</template>

<style>
</style>
