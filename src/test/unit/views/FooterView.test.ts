import { mount } from "@vue/test-utils";

import FooterView from "@/views/FooterView.vue";

describe("Test case for FooterView file", () => {
  const wrapper = mount(FooterView);

  it("renders FooterView root element", () => {
    expect(
      wrapper.find('[data-test="footer-view-root"]').exists()
    ).toBeTruthy();
  });
});
