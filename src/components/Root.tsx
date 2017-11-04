import * as React from 'react';

export interface Props {
  title : string;
  path : string;
  tags : string[];
  description : string;
  css : string[];
  bundles : string[];
  externalScripts : string[];
  externalStylesheets : string[];
}

export function Root({
  title,
  path,
  tags,
  description,
  css,
  bundles,
  externalScripts,
  externalStylesheets
} : Props) {
  return (
    <html>
      <head>
        <title>{ title }</title>
        <meta name='path' content={ path }/>
        <meta name='keywords' content={ tags.join(', ') } />
        <meta name='description' content={ description } />
        <meta name='viewport' content='width=device-width; initial-scale=1.0'/>
        <style type='text/css'>{ css.join('') }</style>
      </head>
      <body>
        <div id='root'>
          %%%BODY%%%
        </div>
        { externalScripts.map(src => (
          <script type='text/javascript' src={ src } key={ src }></script>
        )) }
        { bundles.map(src => (
          <script type='text/javascript' src={ src } key={ src }></script>
        )) }
        { externalStylesheets.map(src => (
          <link type='text/css' rel='stylesheet' href={ src } key={ src } />
        )) }
      </body>
    </html>
  );
}

export default Root;

