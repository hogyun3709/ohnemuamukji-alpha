import { mount } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faBars, faCamera } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import HeaderView from "@/views/HeaderView.vue";

library.add(faBars, faCamera, faUser);

describe("Test case for HeaderView file", () => {
  const wrapper = mount(HeaderView, {
    global: {
      stubs: { FontAwesomeIcon },
    },
  });

  it("renders HeaderView root element", () => {
    expect(
      wrapper.find('[data-test="header-view-root"]').exists()
    ).toBeTruthy();
  });
});
