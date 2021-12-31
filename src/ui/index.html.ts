export function getHtml(data: string, layout: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://cdn.plot.ly/plotly-2.8.1.js"
      nonce="plotly-graph"
      charset="utf-8"
    ></script>
    <title>Project Visualizer</title>
  </head>
  <body>
    <div id="container"></div>
  </body>

  <script>
  Plotly.newPlot("container", ${data}, ${layout});
  </script>
</html>

`;
}
