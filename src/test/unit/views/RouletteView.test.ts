import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faEraser } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-regular-svg-icons";

import RouletterView from "@/views/RouletteView.vue";

library.add(faCaretDown, faEraser, faMinusSquare, faPlusSquare);

describe("Test case for RouletteView file", () => {
	const wrapper = mount(RouletterView, {
		global: {
			plugins: [createTestingPinia()],
			stubs: { FontAwesomeIcon }
		},
	});

	it("renders FooterView root element", () => {
		expect(
			wrapper.find('[data-test="roulette-view-root"]').exists()
		).toBeTruthy();
	});
});
