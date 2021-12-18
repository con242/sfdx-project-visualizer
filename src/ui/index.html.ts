export const html = `
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
    var packageDirectories = [
      {
        path: "src/core/main",
        package: "core",
        versionName: "Core Data Model",
        versionNumber: "1.0.0.NEXT",
        default: false,
      },
      {
        path: "src/frameworks/framework-trigger-core/main",
        package: "trigger-core",
        versionName: "multiorg 1.0.0",
        default: false,
        versionNumber: "1.0.0.NEXT",
      },
      {
        path: "src/frameworks/framework-query-core/main",
        package: "framework-query-core",
        versionName: "multiorg 1.0.0",
        default: false,
        versionNumber: "1.0.0.NEXT",
      },
      {
        path: "src/frameworks/framework-api-gateway/main",
        package: "api-gateway",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        default: false,
      },
      {
        path: "src/utils/flow-utility/main",
        package: "flow-utility",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        default: false,
      },
      {
        path: "src/integrations/outbound/mulesoft/api-out-contract-extension/main",
        package: "api-out-contracts-extension",
        versionName: "ver 0.1",
        versionNumber: "0.1.0.NEXT",
        default: false,
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
        ],
      },
      {
        path: "src/integrations/outbound/mulesoft/api-out-contracts/main",
        package: "api-out-contracts",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        default: false,
        dependencies: [
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts-extension",
            versionNumber: "1.0.0.LATEST",
          },
        ],
      },
      {
        path: "src/integrations/outbound/service/api-service-update-contact/main",
        package: "api-service-update-contact",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/misc/team-hierarchy-app/team-hierarchy-app-core/main",
        package: "team-hierachy-app-core",
        versionName: "ver 0.1",
        versionNumber: "0.1.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "trigger-core",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/misc/team-hierarchy-app/team-hierarchy-app-extension/main",
        package: "team-hierachy-app-extension",
        versionName: "ver 0.1",
        versionNumber: "0.1.0.NEXT",
        dependencies: [
          {
            package: "team-hierachy-app-core",
            versionNumber: "0.1.0.LATEST",
          },
          {
            package: "NE",
          },
          {
            package: "qualtrics",
          },
        ],
        default: false,
      },
      {
        path: "src/utils/vera-tool/main",
        package: "vera-tool",
        versionName: "MVP with config menu",
        versionNumber: "1.1.0.NEXT",
      },
      {
        path: "src/essentials/next-steps-component/main",
        package: "next-steps-component",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "flow-utility",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/service/case/case-ner-data/main",
        package: "case-ner-data",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/service/case/change-personal-data/main",
        package: "change-personal-data",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-service-update-contact",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "flow-utility",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/service/case/banking-details/main",
        package: "banking-details",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "next-steps-component",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "flow-utility",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts-extension",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "case-ner-data",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/service/case/amend-payment/main",
        package: "amend-payment",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "flow-utility",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts-extension",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "case-ner-data",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "next-steps-component",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/service/case/account-overview/main",
        package: "account-overview",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts-extension",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/service/case/case-status-component/main",
        package: "case-status-component",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "force-app-deps",
        default: false,
        package: "src-core-mp-deps",
        versionNumber: "0.1.0",
        dependencies: [
          {
            package: "NE",
          },
          {
            package: "Bit2WinHUB",
          },
          {
            package: "bit2flow",
          },
          {
            package: "B2WExtCat",
          },
          {
            package: "Bit2Archetypes",
          },
          {
            package: "sfds",
          },
          {
            package: "efl",
          },
          {
            package: "datamask",
          },
          {
            package: "sf_com_apps",
          },
          {
            package: "sf_chttr_apps",
          },
          {
            package: "CRMWebClient",
          },
          {
            package: "et4ae5",
          },
          {
            package: "qualtrics",
          },
        ],
      },
      {
        path: "force-app-pre",
        default: false,
        package: "src-core-crm-pre",
        versionNumber: "0.1.0",
        dependencies: [
          {
            package: "NE",
          },
          {
            package: "Bit2WinHUB",
          },
          {
            package: "bit2flow",
          },
          {
            package: "B2WExtCat",
          },
          {
            package: "Bit2Archetypes",
          },
          {
            package: "sfds",
          },
          {
            package: "efl",
          },
          {
            package: "datamask",
          },
          {
            package: "sf_com_apps",
          },
          {
            package: "sf_chttr_apps",
          },
          {
            package: "CRMWebClient",
          },
          {
            package: "et4ae5",
          },
          {
            package: "qualtrics",
          },
        ],
      },
      {
        path: "src-temp",
        package: "src-temp",
        versionName: "Version 0.1.0",
        versionNumber: "0.1.0",
        default: true,
        ignoreOnStage: ["prepare", "validate", "quickbuild", "build"],
      },
      {
        path: "src/service/case/authentication/main",
        package: "authentication",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "flow-utility",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts-extension",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "next-steps-component",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-service-update-contact",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
      {
        path: "src/service/case/goodwill-payment/main",
        package: "goodwill-payment",
        versionName: "multiorg 1.0.0",
        versionNumber: "1.0.0.NEXT",
        dependencies: [
          {
            package: "core",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "flow-utility",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-gateway",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "api-out-contracts",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "next-steps-component",
            versionNumber: "1.0.0.LATEST",
          },
          {
            package: "banking-details",
            versionNumber: "1.0.0.LATEST",
          },
        ],
        default: false,
      },
    ];

    var data = [
      {
        type: "sunburst",
        labels: [],
        parents: [],
        values: [],
        ids: [],
        outsidetextfont: { size: 20, color: "#377eb8" },
        textposition: "inside",
        leaf: { opacity: 0.4 },
        marker: { line: { width: 3 } },
      },
    ];

    var layout = {
      margin: { l: 0, r: 0, b: 0, t: 0 },
      width: 500,
      height: 500,
    };

    var paths = packageDirectories.map((data) => {
      return data.path;
    });

    var items = [];

    // split levels of each path
    for (let path of paths) {
      let levels = path
        .split("/")
        .reverse()
        .filter((level) => level !== "main" && level !== "default");

      // iterate over each level of a path and populate name and if applicable the parent
      for (let i = 0; i < levels.length; i++) {
        let key = levels[i];
        let item = {};
        item.id = path.substr(0, path.indexOf(key) + key.length);
        item.parent = path.substr(0, path.indexOf(key) - 1);
        item.name = levels[i];
        items = [...items, item];
      }
    }

    // filter by unique name+parent pairs
    items = [
      ...new Map(
        items.map((v) => [JSON.stringify([v.name, v.parent]), v])
      ).values(),
    ];
    // add items to data
    for (let entry of items) {
      data[0].labels.push(entry.name);
      data[0].ids.push(entry.id);
      data[0].parents.push(entry.parent);

      data[0].values.push("1");
    }

    Plotly.newPlot("container", data, layout);
  </script>
</html>

`;
