import { PluginManager } from "../controllers/plugin_manager";
import { Image } from "../models/image";
export declare interface BatchData {
    pluginUrl: string;
    just: string | null;
    defaultConfig: [];
    defaultPlugins: string[];
    sourceImages: Image[];
    resultImages: Image[];
    pluginManager: PluginManager;
}
declare const _default: import("vue").DefineComponent<{}, {
    imageUpload: any;
    pluginsManager: any;
}, BatchData, {}, {
    loadPlugin(pluginUrl: string): void;
    loadDefaultPluginsMap(): void;
    loadDefaultPluginJson(): void;
    loadAddedPlugins(): void;
    onMorePlugins(): void;
    changeImages(files: any): void;
    processImages(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
//# sourceMappingURL=Batch.vue.d.ts.map