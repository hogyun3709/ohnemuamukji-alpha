import { defineStore } from "pinia";
import { Roulette } from "@/types/roulette";

const optionsValidation: Roulette = {
  minQuantity: 2,
  maxQuantity: 4,
  boardList: [
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle2.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle3.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle4.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle5.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle6.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle7.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle8.png",
  ],
};

export const useRouletteStore = defineStore("roulette", {
  state: () => ({
    optionCurrentQuantity: optionsValidation.minQuantity,
    optionMinQuantity: optionsValidation.minQuantity,
    optionMaxQuantity: optionsValidation.maxQuantity,
    optionBoardList: optionsValidation.boardList,
  }),

  getters: {
    getRouletteBoard(state): string {
      return state.optionBoardList[
        state.optionCurrentQuantity - state.optionMinQuantity
      ];
    },
  },

  actions: {
    changeOptionQuantity(value: number) {
      this.optionCurrentQuantity += value;
      if (this.optionCurrentQuantity < this.optionMinQuantity) {
        this.optionCurrentQuantity = this.optionMinQuantity;
      }
      if (this.optionCurrentQuantity > this.optionMaxQuantity) {
        this.optionCurrentQuantity = this.optionMaxQuantity;
      }
    },
  },
});
