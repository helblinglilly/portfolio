import "../styles/globals.css";
import "highlight.js/styles/monokai-sublime.css";
import hljs from "highlight.js";
import { useEffect } from "react";

import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
	console.log(Component, pageProps);

	useEffect(() => {
		hljs.highlightAll();
	}, []);
	return (
		<ThemeProvider defaultTheme="system">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
