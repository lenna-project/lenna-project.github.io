import { Ref } from "vue";
import { PluginModule } from "../models/plugin_module";
import { Config } from "../models/config";
declare interface PluginData {
    ui: Ref;
    icon: Ref;
    processor: any;
    enabled: boolean;
    keyCounter: number;
    pluginKey: string;
    config: Object;
}
declare const _default: import("vue").DefineComponent<{
    name: StringConstructor;
    plugin: () => PluginModule;
    url: StringConstructor;
    defaultConfig: () => Config[];
}, unknown, PluginData, {}, {
    loadDefaultConfig(): Promise<void>;
    loadUI(): Promise<void>;
    updateConfig(config: Object): Promise<void>;
    updateEnabled(enabled: boolean): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name?: unknown;
    plugin?: unknown;
    url?: unknown;
    defaultConfig?: unknown;
} & {} & {
    name?: string | undefined;
    plugin?: PluginModule | undefined;
    defaultConfig?: Config[] | undefined;
    url?: string | undefined;
}>, {}>;
export default _default;
//# sourceMappingURL=Plugin.vue.d.ts.map