import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export default function JavascriptCode(code, filename) {
	let myHtml;
	if (code !== null && Object.keys(code).length > 0)
		myHtml = hljs.highlight(code.code, { language: "javascript" }).value;
	else myHtml = "<p>Empty Javascript code block</p>";

	let file = "";
	if (Object.keys(filename).length > 0) file = `<p>${filename}</p>`;

	return (
		<div className="codeContainer">
			<pre>
				{file}
				<code dangerouslySetInnerHTML={{ __html: myHtml }} />
			</pre>
		</div>
	);
}
