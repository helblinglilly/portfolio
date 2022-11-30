import { CodeSection } from "../../support/Types";
import hljs from "highlight.js";

export default function Code(props: { info: CodeSection }) {
	hljs.registerLanguage(props.info.language.name, props.info.language);

	const codeHtml = hljs.highlight(props.info.code, {
		language: props.info.language.name,
	}).value;

	return (
		<div className="codeContainer mt-3">
			<pre>
				<p className="codeFilename">{props.info.filename}</p>
				<code dangerouslySetInnerHTML={{ __html: codeHtml }} />
			</pre>
		</div>
	);
}
