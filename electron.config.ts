import { ElectronConfig } from "@imohuan/electron-manager";
import { resolve } from "path";

const srcResolve = (...args: any[]) => {
  return resolve(__dirname, "src-electron", ...args);
};

export default {
  inputFile: srcResolve("index.ts"),
  preloadDir: srcResolve("preloads"),
  // "@imohuan/electron-manager"
  external: ["electron", "@electron/remote"],
  packTarget: "windows",
  packPreset: {
    appId: "com.electron.imohuan",
    iconDir: resolve(__dirname, "./build-icon/icons"),
    name: "imohuan",
    files: ["./dist/**"],
  },
} as ElectronConfig;
