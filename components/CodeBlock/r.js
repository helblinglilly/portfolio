import hljs from "highlight.js";
import r from "highlight.js/lib/languages/r";

hljs.registerLanguage("r", r);

export default function RScriptBlock({ code }) {
	let codeHtml;
	if (code.code !== null && Object.keys(code).length > 0)
		codeHtml = hljs.highlight(code.code, { language: "r" }).value;
	else codeHtml = "<p>Empty R script</p>";

	return (
		<div className="codeContainer mt-3">
			<pre>
				<p className="codeFilename">{code.filename}</p>
				<code dangerouslySetInnerHTML={{ __html: codeHtml }} />
			</pre>
		</div>
	);
}
