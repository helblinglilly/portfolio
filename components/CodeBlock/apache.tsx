import hljs from "highlight.js";
import apache from "highlight.js/lib/languages/apache";
import React from "react";

hljs.registerLanguage("apache", apache);

export default function ApacheCodeBlock({ code }) {
	let codeHtml;
	if (code.code !== null && Object.keys(code).length > 0)
		codeHtml = hljs.highlight(code.code, { language: "apache" }).value;
	else codeHtml = "<p>Empty Apache Config</p>";

	return (
		<div className="codeContainer mt-3">
			<pre>
				<p className="codeFilename">{code.filename}</p>
				<code dangerouslySetInnerHTML={{ __html: codeHtml }} />
			</pre>
		</div>
	);
}
