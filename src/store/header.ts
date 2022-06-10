import { defineStore } from "pinia";
import { HeaderNavigation } from "@/interfaces/header";

export const header: HeaderNavigation = {
  isMenuOpen: false,
};

export const useHeaderNavigationStore = defineStore("headerNavigation", {
  state: () => ({
    isMenuOpen: header.isMenuOpen,
  }),

  actions: {
    changeMenuStatus() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
