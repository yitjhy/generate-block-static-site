export const indexTsxCode = `import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

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
