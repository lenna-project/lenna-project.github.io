import { LennaPlugin } from "../models/plugin";
import { PluginManager } from "../controllers/plugin_manager";
export interface Configs {
    [key: string]: any;
}
export declare interface PluginsManagerData {
    plugins: LennaPlugin[];
    configs: Configs;
}
declare const _default: import("vue").DefineComponent<{
    pluginsmap: StringConstructor;
    pluginsjson: StringConstructor;
    defaultConfig: ObjectConstructor;
    pluginManager: () => PluginManager;
    defaultPlugins: () => Array<string>;
}, unknown, PluginsManagerData, {}, {
    changeEnabled(name: string, enabled: boolean): void;
    changeConfig(name: string, config: Object): void;
    change(): void;
    raw(comp: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pluginsmap: StringConstructor;
    pluginsjson: StringConstructor;
    defaultConfig: ObjectConstructor;
    pluginManager: () => PluginManager;
    defaultPlugins: () => Array<string>;
}>>, {}>;
export default _default;
//# sourceMappingURL=PluginsManager.vue.d.ts.map