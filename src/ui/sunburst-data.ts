import { SfdxProject } from "../util/sfdx-project-interface";
import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
type Entry = { id: string; name: string; parent: string; value: string };

export default function buildSunburstData(
  sfdxProjectJson: string,
  uri: vscode.Uri
): Sunburst[] {
  // parse data input
  let file: SfdxProject = JSON.parse(sfdxProjectJson);
  // define base settings for graph
  let data: Sunburst = {
    type: "sunburst",
    labels: [],
    parents: [],
    values: [],
    ids: [],
    outsidetextfont: { size: 20, color: "#377eb8" },
    textposition: "inside",
    leaf: { opacity: 0.4 },
    marker: { line: { width: 3 } },
  };
  if (file.packageDirectories) {
    // get paths from packageDirectory
    const paths = file.packageDirectories.map((data: any) => {
      return data.path;
    });

    let items: Entry[] = [];

    // split levels of each pathyarn
    for (let path of paths) {
      let levels = path
        .split("/")
        .reverse()
        .filter((level: string) => level !== "main" && level !== "default");

      // iterate over each level of a path and populate name and if applicable the parent
      for (let i = 0; i < levels.length; i++) {
        let key = levels[i];
        let item: any = {};
        item.id = path.substr(0, path.indexOf(key) + key.length);
        item.parent = path.substr(0, path.indexOf(key) - 1);
        item.name = levels[i];
        items = [...items, item];
      }
    }

    // filter by unique name+parent pairs
    items = items.filter((value, index, self) => {
      return self.findIndex((v) => v.id === value.id) === index;
    });

    // add size of folders to each item
    items = items.map((item) => {
      if (vscode.workspace.workspaceFolders) {
        let uri: vscode.Uri = vscode.Uri.joinPath(
          vscode.workspace.workspaceFolders[0].uri,
          item.id
        );
        let allFiles = getAllFiles(uri.path);
        item.value = allFiles
          .filter((file) => file.endsWith("-meta.xml"))
          .length.toString();
      }
      //TODO
      return item;
    });
    // add items to data
    items.forEach((entry: Entry) => {
      data.labels.push(entry.name);
      data.ids.push(entry.id);
      data.parents.push(entry.parent);
      data.values.push(entry.value);
    });
  }
  console.log("data was build", data);
  return [data];
}

/*async function getFilesFromDir(uri: vscode.Uri): Promise<number> {
  let fileAmount: number = 0;
  vscode.workspace.fs.readDirectory(uri).then((files) => {
    files.forEach((file) => {
      if (path.extname(file[0]) !== "") {
        fileAmount = fileAmount + 1;
      } else {
        getFilesFromDir(
          vscode.Uri.joinPath(uri, file[0])
        ).then();
        
      }
    });
  });
  return fileAmount;
}
*/
const getAllFiles = function (dirPath: string, arrayOfFiles?: string[]) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (arrayOfFiles) {
        arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
};
