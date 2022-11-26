import "../styles/globals.css";
import "highlight.js/styles/monokai-sublime.css";
import hljs from "highlight.js";
import { useEffect } from "react";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		hljs.highlightAll();
	}, []);
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
