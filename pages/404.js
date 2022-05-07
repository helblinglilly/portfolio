import Layout from "../components/Layout/Layout";
import Head from "next/head";

export default function Custom404() {
	return (
		<Layout home>
			<Head>
				<title>Page not found</title>
				<meta name="title" content="This page does not exist" />
				<meta name="description" content="This page does not exist" />
			</Head>
			<div className="is-centered has-text-centered">
				<p className="has-text-centered">This page does not exist</p>
			</div>
		</Layout>
	);
}
