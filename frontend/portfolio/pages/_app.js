import "../styles/globals.css";
import "../components/AboutMe/AboutMe.css";
import "../components/Navbar/Navbar.css";
import "../components/Blog/Post.css";
import "../components/Tweets/Tweet.css";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
