import { mount } from "@vue/test-utils";

import RouletterView from "@/views/RouletteView.vue";

describe("Test case for RouletteView file", () => {
  const wrapper = mount(RouletterView);

  it("renders FooterView root element", () => {
    expect(
      wrapper.find('[data-test="roulette-view-root"]').exists()
    ).toBeTruthy();
  });
});
