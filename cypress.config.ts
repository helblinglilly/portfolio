import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000",
		setupNodeEvents(on, config) {
			on("before:browser:launch", (browser, launchOptions) => {
				if (browser.family === "chromium") {
					// if (browser.name === "electron") {
					// 	launchOptions.preferences.theme = "Light";
					// } else {
					// 	launchOptions.args.push(
					// 		"--disable-features=WebContentsForceDark" // Force light mode
					// 		// "--enable-features=WebContentsForceDark" // Force dark mode
					// 	);
					// }
				}
				// if (browser.family === "firefox") {
				// 	launchOptions.preferences[
				// 		"layout.css.prefers-color-scheme.content-override"
				// 	] = 1;
				// 	// 0 = Dark
				// 	// 1 = Light
				// }

				return launchOptions;
			});
		},
	},
});
