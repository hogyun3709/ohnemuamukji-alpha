import { mount } from "@vue/test-utils";

import HelloWorld from "@/components/HelloWorld.vue";

describe("Test case for Hello World component", () => {
  const testProps = { msg: "Hello Test World" };
  const wrapper = mount(HelloWorld, {
    props: {
      msg: testProps.msg,
    },
  });
  it("renders message", () => {
    expect(wrapper.find('[data-test="message"]').exists()).toBeTruthy();
  });
  it("matches with given test message", () => {
    expect(wrapper.get('[data-test="message"]').text()).toBe(testProps.msg);
  });
});
