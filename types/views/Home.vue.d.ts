import { PluginManager } from "../controllers/plugin_manager";
import { Image, ImageSource } from "../models/image";
export declare interface HomeData {
    pluginUrl: string;
    just: string | null;
    defaultConfig: [];
    defaultPlugins: string[];
    sourceImages: Image[];
    resultImages: ImageSource[];
    pluginManager: PluginManager;
}
declare const _default: import("vue").DefineComponent<{}, {
    pluginsManager: any;
}, HomeData, {}, {
    loadPlugin(pluginUrl: string): void;
    loadDefaultPluginsMap(): void;
    loadDefaultPluginJson(): void;
    loadAddedPlugins(): void;
    onMorePlugins(): void;
    changeImages(files: any): void;
    processImages(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
//# sourceMappingURL=Home.vue.d.ts.map