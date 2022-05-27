import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

import RouletteBoard from "@/components/RouletteBoard.vue";
import { roulette } from "@/store/roulette";

library.add(faMinusSquare, faPlusSquare, faEraser);

describe("Roulette Board의 element들의 존재여부를 확인합니다. ", () => {
  const wrapper = mount(RouletteBoard, {
    global: {
      plugins: [createTestingPinia()],
      stubs: { FontAwesomeIcon },
    },
  });

  it("renders Roulette Board root element", () => {
    expect(wrapper.find('[data-test="roulette-board"]').exists()).toBeTruthy();
  });

  it("checks roulette image section exists", () => {
    expect(wrapper.find('[data-test="roulette-image"]').exists()).toBeTruthy();
  });

  it("checks roulette option list exists", () => {
    expect(
      wrapper.find('[data-test="roulette-option-list"]').exists()
    ).toBeTruthy();
  });

  it("checks option for first user choice exists", () => {
    expect(
      wrapper.find('[data-test="roulette-first-option"]').exists()
    ).toBeTruthy();
  });
  it("checks option for second user choice exists", () => {
    expect(
      wrapper.find('[data-test="roulette-second-option"]').exists()
    ).toBeTruthy();
  });
  it("checks option for third user choice exists", () => {
    expect(
      wrapper.find('[data-test="roulette-third-option"]').exists()
    ).toBeTruthy();
  });
  it("checks option for forth user choice exists", () => {
    expect(
      wrapper.find('[data-test="roulette-forth-option"]').exists()
    ).toBeTruthy();
  });

  it("checks option controller that changes option quantity exists", () => {
    expect(
      wrapper.find('[data-test="roulette-option-counter"]').exists()
    ).toBeTruthy();
  });

  it("checks option quantity decrease button exists", () => {
    expect(
      wrapper.find('[data-test="roulette-change-option-decrease"]').exists()
    ).toBeTruthy();
  });

  it("checks option quantity increase button exists", () => {
    expect(
      wrapper.find('[data-test="roulette-change-option-increase"]').exists()
    ).toBeTruthy();
  });

  it("checks option text clear button exists", () => {
    expect(
      wrapper.find('[data-test="roulette-option-text-reset"]').exists()
    ).toBeTruthy();
  });
});

describe("Roulette Board의 data binding(initial state) 매칭여부를 확인합니다.", () => {
  const initial_roulette_image: string = roulette.boardList[0];
  const wrapper = mount(RouletteBoard, {
    global: {
      plugins: [createTestingPinia({})],
      stubs: { FontAwesomeIcon },
    },
  });

  it("checks roulette image matches with given data", () => {
    expect(wrapper.get('[data-test="roulette-image"]').attributes("src")).toBe(
      initial_roulette_image
    );
  });

  it("checks display minimum quantity of option inputs on the roulette image at the point of initial rendering", () => {
    for (let i = roulette.minQuantity; i < roulette.maxQuantity; i++) {
      expect(
        wrapper.findAll('[data-test="roulette-option"]')[i].classes("hidden")
      ).toBe(true);
    }
  });
});
