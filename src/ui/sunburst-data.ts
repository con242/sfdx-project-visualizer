import { SfdxProject } from "../util/sfdx-project-interface";
import * as vscode from "vscode";

type Entry = { id: string; name: string; parent: string; value: string };

export default function buildSunburstData(sfdxProjectJson: string): Sunburst[] {
  let file: SfdxProject = JSON.parse(sfdxProjectJson);

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
    // add items to data

    items.forEach((entry: Entry) => {
      data.labels.push(entry.name);
      data.ids.push(entry.id);
      data.parents.push(entry.parent);
      data.values.push("1");
    });
  }
  console.log("data was build", data);
  return [data];
}