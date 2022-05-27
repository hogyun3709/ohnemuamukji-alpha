import { defineStore } from "pinia";
import { Roulette } from "@/types/roulette";

export const roulette: Roulette = {
  minQuantity: 2,
  maxQuantity: 4,
  boardList: [
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle2.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle3.png",
    "https://ssl.pstatic.net/sstatic/keypage/outside/mobilegame/circle/im/im/bg_circle4.png",
  ],
  optionList: [],
  optionFirst: "",
  optionSecond: "",
  optionThird: "",
  optionForth: "",
  optionFirstDone: false,
  optionSecondDone: false,
  optionThirdDone: false,
  optionForthDone: false,
};

export const useRouletteStore = defineStore("roulette", {
  state: () => ({
    optionCurrentQuantity: roulette.minQuantity,
    optionMinQuantity: roulette.minQuantity,
    optionMaxQuantity: roulette.maxQuantity,
    optionBoardList: roulette.boardList,
    optionTotalList: roulette.optionList,
    optionFirstText: roulette.optionFirst,
    optionSecondText: roulette.optionSecond,
    optionThirdText: roulette.optionThird,
    optionForthText: roulette.optionForth,
    optionFirstCompleted: roulette.optionFirstDone,
    optionSecondCompleted: roulette.optionSecondDone,
    optionThirdCompleted: roulette.optionThirdDone,
    optionForthCompleted: roulette.optionForthDone,
  }),

  getters: {
    getRouletteBoard(state): string {
      return state.optionBoardList[
        state.optionCurrentQuantity - state.optionMinQuantity
      ];
    },
    getIsOptionFirstCompleted(state): boolean {
      return state.optionFirstCompleted;
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
    setFirstOption(e: Event) {
      this.optionFirstText = (e.target as HTMLInputElement).value;
      this.optionTotalList.push(this.optionFirstText);
    },
    setSecondOption(e: Event) {
      this.optionSecondText = (e.target as HTMLInputElement).value;
    },
    setThirdOption(e: Event) {
      this.optionThirdText = (e.target as HTMLInputElement).value;
    },
    setForthOption(e: Event) {
      this.optionForthText = (e.target as HTMLInputElement).value;
    },
    addFirstOptionToList() {
      this.optionTotalList[0] = this.optionFirstText;
      this.optionFirstCompleted = true;
    },
    addSecondOptionToList() {
      this.optionTotalList[1] = this.optionSecondText;
      this.optionSecondCompleted = true;
    },
    addThridOptionToList() {
      this.optionTotalList[2] = this.optionThirdText;
      this.optionThirdCompleted = true;
    },
    addForthOptionToList() {
      this.optionTotalList[3] = this.optionForthText;
      this.optionForthCompleted = true;
    },
    editFirstOption() {
      this.optionFirstCompleted = false;
    },
    editSecondOption() {
      this.optionSecondCompleted = false;
    },
    editThirdOption() {
      this.optionThirdCompleted = false;
    },
    editForthOption() {
      this.optionForthCompleted = false;
    },
    clearOptionTextTotal() {
      this.optionFirstText = "";
      this.optionSecondText = "";
      this.optionThirdText = "";
      this.optionForthText = "";
    },
  },
});
