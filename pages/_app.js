import "../styles/globals.css";
import "../components/AboutMe/AboutMe.css";
import "../components/Navbar/Navbar.css";
import "../components/Blog/Post.css";
import "../components/Tweets/Tweet.css";
import "../components/Background/Menu.css";
import "../components/Background/Kent.css";
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
