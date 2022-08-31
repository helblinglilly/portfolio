import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";

hljs.registerLanguage("bash", bash);

export default function BashCode({ code }) {
	let codeHtml;
	if (code.code !== null && Object.keys(code).length > 0)
		codeHtml = hljs.highlight(code.code, { language: "bash" }).value;
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
