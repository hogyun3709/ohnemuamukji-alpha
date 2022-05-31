<script setup lang="ts">
import RouletteBoard from "@/components/RouletteBoard.vue";
import MenuDialog from "@/dialogs/MenuDialog.vue";

import { useRouletteStore } from "@/store/roulette";
import { useHeaderNavigationStore } from "@/store/header";

const storeHeader = useHeaderNavigationStore();

const storeRoulette = useRouletteStore();
</script>

<template>
  <main
    class="flex flex-col justify-center relative"
    data-test="roulette-view-root"
  >
    <Transition name="drop-down">
      <MenuDialog v-show="storeHeader.isMenuOpen"></MenuDialog>
    </Transition>
    <div class="flex flex-col h-full z-0">
      <div class="my-4 mx-auto" data-test="option-result">
        <span :class="{ hidden: storeRoulette.optionFirstCompleted }">
          {{ storeRoulette.optionFirstText }}
        </span>
        <span :class="{ hidden: storeRoulette.optionSecondCompleted }">
          {{ storeRoulette.optionSecondText }}
        </span>
        <span :class="{ hidden: storeRoulette.optionThirdCompleted }">
          {{ storeRoulette.optionThirdText }}
        </span>
        <span :class="{ hidden: storeRoulette.optionForthCompleted }">
          {{ storeRoulette.optionForthText }}
        </span>
      </div>
      <!--indicator-->
      <div class="my-auto mx-auto" data-test="option-indicator">
        <font-awesome-icon class="w-12 h-12" :icon="['fa', 'caret-down']" />
      </div>
      <!--roulette-->
      <RouletteBoard />
    </div>
  </main>
</template>

<style>
.drop-down-enter-active,
.drop-down-leave-active {
  transition: all 0.4s ease-in-out;
}

.drop-down-leave-active {
  transition-delay: 0.2s;
}

.drop-down-enter-from,
.drop-down-leave-to {
  transform: translateY(-90%);
  opacity: 0;
}
</style>
