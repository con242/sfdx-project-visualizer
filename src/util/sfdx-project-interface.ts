export interface SfdxProject extends Object {
  packageDirectories?: PackageDirectoriesEntity[];
  namespace: string;
  sfdcLoginUrl: string;
  sourceApiVersion: string;
  packageAliases: PackageAliases;
  plugins: Plugins;
  [x: string]: any;
}
export interface PackageDirectoriesEntity {
  path?: string;
  default?: boolean | null;
  package?: string;
  versionNumber?: string;
  preDeploymentScript?: string | null;
  dependencies?: DependenciesEntity[] | null;
  versionName?: string | null;
  ignoreOnStage?: string[] | null;
  skipCoverageValidation?: boolean | null;
  postDeploymentScript?: string | null;
  [x: string]: any;
}
export interface DependenciesEntity {
  package: string;
  versionNumber?: string | null;
  [x: string]: any;
}
export interface PackageAliases {
  [x: string]: any;
}
export interface Plugins {
  [x: string]: any;
}
