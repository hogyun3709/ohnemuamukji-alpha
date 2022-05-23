import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from '@/router'

import FooterView from "@/views/FooterView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

describe("Test case for FooterView file", () => {
  const wrapper = mount(FooterView, {
    global: {
      plugins: [router]
    }
  });

  it("renders FooterView root element", () => {
    expect(
      wrapper.find('[data-test="footer-view-root"]').exists()
    ).toBeTruthy();
  });
});
