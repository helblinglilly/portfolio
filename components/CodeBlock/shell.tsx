import hljs from "highlight.js";
import shell from "highlight.js/lib/languages/shell";
import React from "react";

hljs.registerLanguage("shell", shell);

export default function ShellScriptBlock({ code }) {
	let codeHtml;
	if (code.code !== null && Object.keys(code).length > 0)
		codeHtml = hljs.highlight(code.code, { language: "shell" }).value;
	else codeHtml = "<p>Empty Shell script</p>";

	return (
		<div className="codeContainer mt-3">
			<pre>
				<p className="codeFilename">{code.filename}</p>
				<code dangerouslySetInnerHTML={{ __html: codeHtml }} />
			</pre>
		</div>
	);
}
