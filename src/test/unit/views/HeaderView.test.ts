import { mount } from "@vue/test-utils";

import HeaderView from "@/views/HeaderView.vue";

describe("Test case for HeaderView file", () => {
  const wrapper = mount(HeaderView);

  it("renders HeaderView root element", () => {
    expect(
      wrapper.find('[data-test="header-view-root"]').exists()
    ).toBeTruthy();
  });
});
