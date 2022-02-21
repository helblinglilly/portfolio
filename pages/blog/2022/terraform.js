import Layout from "../../../components/Layout/Layout";
import Head from "next/head";

export default function FirstPost() {
	return (
		<Layout home>
			<Head>
				<link
					rel="stylesheet"
					href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
				></link>
			</Head>
		</Layout>
	);
}
