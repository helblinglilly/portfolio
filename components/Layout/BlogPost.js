import Layout from "./Layout";
import { GetPostMetadata } from "../Blog/AllPosts";
import Head from "next/head";
import Image from "next/image";
import TableOfContents from "../Blog/tableOfContents";
import { toMMDDYYY } from "../../utils";

export default function BlogLayout({ children, ...pageProps }) {
	return (
		<Layout home>
			<div className="column is-one-quarter">
				<TableOfContents entries={pageProps.toc}></TableOfContents>
			</div>

			<article className="column">
				{pageProps.thumbnail ? (
					<Image
						src={pageProps.thumbnail}
						layout="responsive"
						width="1280"
						height="720"
						alt="Keynote Start"
						priority={true}
						placeholder={"blur"}
						blurDataURL={"/../../images/icon-transparent.png"}
					/>
				) : (
					<></>
				)}

				<section className="postoverview mt-4">
					<h1 className="title is-1">{pageProps.title}</h1>
					<hr className="mb-1"></hr>
					<div className="post-meta">
						<i>
							<address className="author">
								<time
									pubdate="true"
									dateTime={
										new Date(pageProps.date)
											.toISOString()
											.split("T")[0]
									}
								>
									{new Date(pageProps.date).toISOString()}
								</time>
								,
								<a
									rel="author"
									href="https://helbling.uk"
									className="ml-1"
								>
									Joel Helbling
								</a>
							</address>
						</i>
					</div>
				</section>
				{children}
			</article>

			<div className="column is-one-quarter" id="blogMargin" />
		</Layout>
	);
}
