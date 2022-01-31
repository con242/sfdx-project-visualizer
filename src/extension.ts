import * as vscode from "vscode";
import { getHtml } from "./ui/index.html";
import buildSunburstData from "./ui/sunburst-data";
import { layout } from "./ui/sunburst-layout";
import * as fs from "fs";

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
      if (vscode.workspace.workspaceFolders) {
        // get URI of SFDX Project JSOn

        let sfdxUri: vscode.Uri = vscode.Uri.joinPath(
          vscode.workspace.workspaceFolders[0].uri,
          "sfdx-project.json"
        );
        let validUri: boolean = true;
        try {
          console.log(
            "sfdx Project found! ",
            JSON.parse(fs.readFileSync(sfdxUri.fsPath).toString())
          );
          validUri = true;
        } catch {
          validUri = false;
          vscode.window.showErrorMessage(
            "No Valid sfdx-project.json found! Validate the JSON and try again"
          );
        }
        if (validUri) {
          vscode.window.showInformationMessage(
            "Showing SFDX Project Structure"
          );
          const panel = vscode.window.createWebviewPanel(
            "sfdxVisualizer",
            "SFDX Visualizer",
            vscode.ViewColumn.One,
            {
              enableScripts: true,
            }
          );
          vscode.workspace.fs.readFile(sfdxUri).then((document) => {
            panel.webview.html = getHtml(
              JSON.stringify(buildSunburstData(document.toString(), uri)),
              JSON.stringify(layout)
            );
          });
        }
      } else {
        vscode.window.showErrorMessage("No Workspace found!");
      }
    }
  );

  context.subscriptions.push(disposable);
}
// this method is called when your extension is deactivated
export function deactivate() {}
