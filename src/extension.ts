import * as vscode from "vscode";
import { getHtml } from "./ui/index.html";
import buildSunburstData from "./ui/sunburst-data";
import { layout } from "./ui/sunburst-layout";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "sfdx-project-visualizer" is now active!'
  );

  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "sfdx-project-visualizer.visualizeSfdxProject",
    (uri: vscode.Uri) => {
      // The code you place here will be executed every time your command is executed
      vscode.window.showInformationMessage("Showing SFDX Project Structure");
      const panel = vscode.window.createWebviewPanel(
        "sfdxVisualizer",
        "SFDX Visualizer",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      vscode.workspace.fs.readFile(uri).then((document) => {
        panel.webview.html = getHtml(
          JSON.stringify(buildSunburstData(document.toString())),
          JSON.stringify(layout)
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}
// this method is called when your extension is deactivated
export function deactivate() {}
