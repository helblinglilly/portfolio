import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000",
		setupNodeEvents(on, config) {
			on("before:browser:launch", (browser, launchOptions) => {
				if (browser.family === "chromium") {
					if (browser.name === "electron") {
						launchOptions.preferences.theme = "Dark";
					} else {
						launchOptions.args.push(
							"--enable-features=WebContentsForceDark"
						);
					}
				}
				if (browser.family === "firefox") {
					launchOptions.preferences[
						"layout.css.prefers-color-scheme.content-override"
					] = 0;
				}

				return launchOptions;
			});
		},
	},
});
