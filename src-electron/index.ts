import { app } from "electron";
import { resolve } from "path";
import { Manager, ManagerData } from "@imohuan/electron-manager";

interface Global {
  hello: number;
}

type IpcRouter = {
  test: (name: string) => string;
};

const m = new Manager<ManagerData<Global>, IpcRouter>();

app.on("ready", async () => {
  m.window!.create("hello", {
    devtool: "bottom",
    // file: resolve(__dirname, "../electron-win.html"),
    path: "https://www.bilibili.com",
    webPreferences: { preload: resolve(__dirname, "preload/test.js"), nodeIntegration: true },
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
