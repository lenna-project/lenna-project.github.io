import { LennaPlugin } from '../models/plugin';
import { PluginModule } from '../models/plugin_module';
import { Config } from '../models/config';
export declare class PluginManager {
    configs: Config[];
    plugins: LennaPlugin[];
    filter: string;
    constructor(filter: string);
    importPlugin(key: string, url: string): Promise<any>;
    importModule(key: string, url: string, module: PluginModule): Promise<void>;
    importPluginMap(mapUrl: string): Promise<any[]>;
    importPluginsJson(jsonUrl: string): Promise<any[]>;
    changeConfig(name: string, config: Object): void;
    getPlugins(): LennaPlugin[];
}
//# sourceMappingURL=plugin_manager.d.ts.map