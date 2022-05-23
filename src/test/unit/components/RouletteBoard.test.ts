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

library.add(faMinusSquare, faPlusSquare, faEraser);

describe("Test case for RouletteBoard", () => {
  const wrapper = mount(RouletteBoard, {
    global: {
      plugins: [createTestingPinia()],
      stubs: { FontAwesomeIcon },
    },
  });

  it("renders Roulette Board root element", () => {
    expect(wrapper.find('[data-test="roulette-board"]').exists()).toBeTruthy();
  });
});
