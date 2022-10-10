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
  packagePath: resolve(__dirname, "package.json"),
  pack: {
    // publish: ["github"],
    publish: [
      {
        provider: "github",
        token: "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",
        owner: "imohuan",
        repo: "https://github.com/imohuan/test-pack",
        private: true,
        releaseType: "release",
      },
    ],
  },
  packTarget: "windows",
  packPreset: {
    appId: "com.electron.imohuan",
    iconDir: resolve(__dirname, "./build-icon/icons"),
    name: "imohuan",
    files: ["./dist/**"],
  },
} as ElectronConfig;
