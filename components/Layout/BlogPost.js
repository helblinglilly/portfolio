import Layout from "./Layout";
import { GetPostMetadata } from "../Blog/AllPosts";
import Head from "next/head";
import Image from "next/image";
import TableOfContents from "../Blog/tableOfContents";
import { toMMDDYYY } from "../../utils";

export default function BlogLayout({ children, ...pageProps }) {
	const meta = GetPostMetadata(pageProps.name);

	return (
		<Layout home>
			<Head>
				<title>{meta.title}</title>
				<meta name="title" content={`Blog - ${meta.title}`} />
				<meta name="description" content={meta.preview} />

				<meta
					property="og:url"
					content={`https://helbling.uk/blog/${meta.link}`}
				/>
				<meta property="og:title" content={`Blog - ${meta.title}`} />
				<meta property="og:description" content={meta.preview} />
				<meta
					property="og:image"
					content={`https://helbling.uk/${meta.thumbnail}`}
				/>

				<meta
					property="twitter:url"
					content={`https://helbling.uk/blog/${meta.link}`}
				/>
				<meta property="twitter:title" content={meta.title} />
				<meta property="twitter:description" content={meta.preview} />
				<meta
					property="twitter:image"
					content={`https://helbling.uk/${meta.thumbnail}`}
				/>
			</Head>

			<div className="column is-one-quarter">
				<TableOfContents entries={pageProps.toc}></TableOfContents>
				<div id="backToTopContainer" className="">
					<a className="button hidden" id="backToTopButton" href="#navbar">
						Back to top
					</a>
				</div>
			</div>

			<article className="column">
				{meta.titleImage ? (
					<Image
						src={meta.titleImage}
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
					<h1 className="title is-1">{meta.title}</h1>
					<hr className="mb-1"></hr>
					<div className="post-meta">
						<i>
							<address className="author">
								<time
									pubdate="true"
									dateTime={
										toMMDDYYY(meta.date).toISOString().split("T")[0]
									}
								>
									{meta.date}
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