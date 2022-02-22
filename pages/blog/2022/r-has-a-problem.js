import Layout from "../../../components/Layout/Layout";
import TableOfContents from "../tableOfContents";

export default function Post() {
    const content = `
    - Open source but actually tightly coupled to the R company
    - Tight integration to R studio -> tied to R company
    - Certain features locked behind a paywall
    - Official free way to get SSL is through 3rd party proxy services in 2022
    - Very poor documentation even on first party modules
    - Absolute mess that it's built on. Built on top of Node but locking down as much as possible
    - Reinventing the wheel

    - R Shiny for some reason strips environment variables when it launches
    - Implications of above. Stored in plaintext
    `;

    const toc = [];
    toc.push({title: "Intro", id: "introduction"});

	return (
		<Layout home>
            <div className="column is-one-quarter">
                <TableOfContents entries={toc}></TableOfContents>
            </div>
            <div className="column">
                <p className="title is-1">R Has a problem</p>
                <p>{content}</p>
            </div>
		</Layout>
	);
}
