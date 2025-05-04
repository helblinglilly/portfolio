'use client';

import hljs from 'highlight.js/lib/core';
import apache from 'highlight.js/lib/languages/apache';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import tcl from 'highlight.js/lib/languages/tcl';
import yaml from 'highlight.js/lib/languages/yaml';
import 'highlight.js/styles/nord.css';
import { useEffect, useState } from 'react';

export interface CodeSection {
  code: string;
  filename: string;
  languageName: string;
}

export default function Code({ code, filename, languageName } : {
  code: string;
  filename?: string;
  languageName: string;
}) {
  const [highlightedCode, setHighlightedCode] = useState(code);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('yaml', yaml);
  hljs.registerLanguage('bash', bash);
  hljs.registerLanguage('apache', apache);
  hljs.registerLanguage('terraform', tcl);

  useEffect(() => {
    const highlighted = hljs.highlight(code, {
      language: languageName,
    }).value;
    setHighlightedCode(highlighted);
  }, [languageName, code]);

  return (
    <div
      className="mt-3 mb-2 p-2 text-white rounded-md w-full"
      style={{
        backgroundColor: '#272823',
        overflow: 'auto',
      }}
    >
      <pre>
        <p className="nohighlight">
          <i className='text-slate-500'>{filename}</i>
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
