import RScriptBlock from "../../../components/CodeBlock/r";
import Layout from "../../../components/Layout/Layout";
import TableOfContents from "../tableOfContents";

export default function Post() {
	const content = `
   
    - Very poor documentation even on first party modules
    - Absolute mess that it's built on. Built on top of Node but locking down as much as possible
    - Reinventing the wheel

    - R Shiny for some reason strips environment variables when it launches
    - Implications of above. Stored in plaintext
    `;

	const toc = [];
	toc.push({ title: "Intro", id: "introduction" });
	toc.push({ title: "R-Studio", id: "r-studio" });
	toc.push({ title: "Paywalls", id: "paywall" });
	toc.push({ title: "Documentation", id: "documentation" });
	toc.push({ title: "Deployment implications", id: "deployment" });

	const code = {};
	code.code = `sysVariable <- Sys.getenv()["USERNAME"]`;
	code.filename = `app.R`;

	return (
		<Layout home>
			<div className="column is-one-quarter">
				<TableOfContents entries={toc}></TableOfContents>
				<div id="backToTopContainer" className="">
					<a className="button hidden" id="backToTopButton" href="#navbar">
						Back to top
					</a>
				</div>
			</div>
			<div className="column">
				<p className="title is-1">R has a problem</p>
				<hr className="mb-1"></hr>
				<p>
					<i>22 February 2022, Joel Helbling</i>
				</p>

				<div className="mt-4" id="introduction">
					<p className="title is-3 mb-2">Intro</p>
					<p>
						During my rotation on the Pathways team I got assigned a project
						where I had to bring a dashboard, written in R, to the cloud.
					</p>
					<p>
						Another graduate was responsible for doing the data processing
						while I was responsible for setting up CI/CD. Throughout this
						process I had to write a few test programmes to verify settings.
					</p>
				</div>

				<div className="mt-5" id="r-studio">
					<p className="title is-3 mb-1">R-Studio</p>
					<p>
						R studio is probably good but how is it not available across
						platformss when it gets deployed to unix based systems?
					</p>
				</div>

				<RScriptBlock code={code}></RScriptBlock>

				<div className="mt-5" id="paywall">
					<p className="title is-3 mb-1">Paywall despite open source</p>
					<p>Native SSL support</p>
					<p>Paywall heavily incentivsed in R Studio and docs</p>
				</div>

				<div className="mt-5" id="documentation">
					<p className="title is-3 mb-1">Poor documentation</p>
					<p>Basic features not officially documented</p>
				</div>

				<div className="mt-5" id="deployment">
					<p className="title is-3 mb-1">Deployment implications</p>
					<p>
						How they try to play it safe with things that actually have
						terrible implications
					</p>
				</div>
			</div>
		</Layout>
	);
}
