import Head from "next/head";
import Layout from "../../../components/Layout/Layout";
import TableOfContents from "../../../components/Blog/tableOfContents";

export default function Post() {
	const toc = [];
	toc.push({ title: "Travel", id: "travel" });
	toc.push({ title: "Expo", id: "expo" });
	toc.push({ title: "Talks", id: "talks-attended" });
	toc.push({ title: "Lessons for next time", id: "next-time" });
	return (
		<Layout home>
			<Head>
				<title>AWS Summit 2022</title>
			</Head>
			<div className="column is-one-quarter">
				<TableOfContents entries={toc}></TableOfContents>
				<div id="backToTopContainer" className="">
					<a className="button hidden" id="backToTopButton" href="#navbar">
						Back to top
					</a>
				</div>
			</div>

			<article className="column">
				<section className="postoverview mt-4">
					<h1 className="title is-1">AWS Summit London 2022</h1>
					<hr className="mb-1"></hr>
					<div className="post-meta">
						<p>
							<i>
								<address class="author">
									<time pubdate dateTime="2022-05-01">
										01 May 2022
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
						</p>
					</div>
				</section>

				<section className="mt-4" id="travel">
					<h3 className="title is-3 mb-2">Travel</h3>
					<p>Test</p>
				</section>

				<section className="mt-4" id="expo">
					<h3 className="title is-3 mb-2">Expo</h3>
					<p>Expo details lololol</p>
				</section>

				<section className="mt-4" id="talks-attended">
					<h3 className="title is-3 mb-2">Talks Attended</h3>
					<h5 className="title is-5 mb-2">
						Reduce your operational burden to deploy containers
					</h5>
					<p>Test</p>
					<h5 className="title is-5 mb-2">
						Migrate your database to AWS with ease
					</h5>
					<p>Test</p>
					<h5 className="title is-5 mb-2">
						Full stack web and mobile development with cloud-based backend
					</h5>
					<p>Test</p>
				</section>

				<section className="mt-4" id="next-time">
					<h3 className="title is-3 mb-2">Lessons for next time</h3>
				</section>
			</article>

			<div className="column is-one-fifth"></div>
		</Layout>
	);
}
