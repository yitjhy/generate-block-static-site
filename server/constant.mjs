export const indexTsxCode = `import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

const antdStyle = document.createElement('link');
antdStyle.rel = 'stylesheet';
antdStyle.href = 'https://cdn.jsdelivr.net/npm/antd@4.23.0/dist/antd.min.css';
document.head.appendChild(antdStyle);

const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
document.head.appendChild(tailwindScript);

createRoot(document.getElementById('root')).render(<Demo />);`

export const htmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
  </head>
  <body>
    <div id="root" style="padding: 24px" />
  </body>
</html>`

export const tsconfigJsonCode = `
    {
      "compilerOptions": {
        "jsx": "react-jsx",
        "target": "esnext",
        "module": "esnext",
        "esModuleInterop": true,
        "moduleResolution": "node",
      }
    }
  `
