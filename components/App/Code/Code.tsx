import hljs from "highlight.js/lib/core";
import { CodeSection } from "./Code.Types";

export default function Code(props: { info: CodeSection }) {
	hljs.registerLanguage(props.info.languageName, props.info.languageFn);

	const highlightedCode = hljs.highlight(props.info.code, {
		language: props.info.languageName,
	}).value;

	return (
		<div className="codeContainer mt-3">
			<pre>
				<p className="nohighlight">
					<i>{props.info.filename}</i>
				</p>
				<code
					dangerouslySetInnerHTML={{
						__html: highlightedCode,
					}}
				></code>
			</pre>
		</div>
	);
}
