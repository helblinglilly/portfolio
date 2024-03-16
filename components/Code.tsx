import React from 'react';
import hljs from 'highlight.js/lib/core';
import { LanguageFn } from 'highlight.js';

export interface CodeSection {
  code: string;
  filename: string;
  languageName: string;
  languageFn: LanguageFn;
}

export default function Code({ info } : { info: CodeSection }) {
  hljs.registerLanguage(info.languageName, info.languageFn);

  const highlightedCode = hljs.highlight(info.code, {
    language: info.languageName,
  }).value;

  return (
    <div className="codeContainer mt-3">
      <pre>
        <p className="nohighlight">
          <i>{info.filename}</i>
        </p>
        <code
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: highlightedCode,
          }}
        />
      </pre>
    </div>
  );
}
