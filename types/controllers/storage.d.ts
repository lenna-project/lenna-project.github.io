import { LennaPlugin } from "../models/plugin";
import { Config } from "../models/config";
declare const saveConfig: (plugin: LennaPlugin) => void;
declare const loadConfig: (plugin: LennaPlugin) => LennaPlugin;
declare const loadConfigFromParams: (plugin: LennaPlugin, params: Config[]) => LennaPlugin;
declare const addPlugin: (plugin: string) => void;
declare const listPlugins: () => string[];
export { saveConfig, loadConfig, loadConfigFromParams, addPlugin, listPlugins };
//# sourceMappingURL=storage.d.ts.map