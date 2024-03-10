import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App(props: {
	Component: any;
	pageProps: any;
}): JSX.Element {
	return (
		<ThemeProvider defaultTheme="system">
			<props.Component {...props.pageProps} />
		</ThemeProvider>
	);
}
