// src/components/CodeEditor.jsx

import React, { useState } from 'react';
import Prism from 'prismjs';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css'; // Import the CSS for CodeEditor
import 'prismjs/themes/prism.css'; // You can change the theme by replacing the css file

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <textarea
        value={code}
        onChange={handleChange}
        className="code-input"
      />
      <Highlight
        code={code}
        language="javascript"
        theme={themes.github}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="code-output" style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
