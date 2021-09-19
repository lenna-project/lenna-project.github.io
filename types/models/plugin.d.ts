import { PluginModule } from "./plugin_module";
export interface LennaPlugin {
    name: string;
    description?: string;
    url?: string;
    icon?: string;
    enabled: boolean;
    config: Object;
    plugin?: PluginModule;
    process?: Function;
}
//# sourceMappingURL=plugin.d.ts.map