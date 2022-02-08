import Head from "next/head";
import Navbar from "./navbar"

export default function Layout({children}) {
	const siteTitle = "Joel Helbling";
	const author = "Joel Helbling";
	const description = "This website is still in development";
	// Need to add images into meta tags

	return (
		<html>
			<Head>
				<meta charSet="utf-8"></meta>
				<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no" />
				<meta name="author" content={author}/>
				<meta name="description" content={description}/>
				<title>{siteTitle}</title>
			</Head>
			<Navbar></Navbar>
			<div>
				<main className="p-6">
					<div className="columns">
						{children}
					</div>
				</main>
	  		</div>
		</html>
	);
}

