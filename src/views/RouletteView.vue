<script setup lang="ts">
import RouletteBoard from "@/components/RouletteBoard.vue";
import MenuDialog from "@/dialogs/MenuDialog.vue";

import { useRouletteStore } from "@/store/roulette";
import { useHeaderNavigationStore } from "@/store/header";

const storeHeader = useHeaderNavigationStore();

const store = useRouletteStore();
</script>

<template>
  <main class="flex flex-col justify-center relative" data-test="roulette-view-root">
    <Transition name="nested">
      <MenuDialog v-show="storeHeader.isMenuOpen"></MenuDialog>
    </Transition>
    <div class="flex flex-col h-full z-0">
      <div class="my-4 mx-auto" data-test="option-result">
        <span :class="{ hidden: store.optionFirstCompleted }">
          {{ store.optionFirstText }}
        </span>
        <span :class="{ hidden: store.optionSecondCompleted }">
          {{ store.optionSecondText }}
        </span>
        <span :class="{ hidden: store.optionThirdCompleted }">
          {{ store.optionThirdText }}
        </span>
        <span :class="{ hidden: store.optionForthCompleted }">
          {{ store.optionForthText }}
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
.nested-enter-active,
.nested-leave-active {
  transition: all 0.4s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.2s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(-90%);
  opacity: 0;
}
</style>
