interface Config {
    key: string;
    value: any;
}
declare interface PluginConfigData {
    config: Config[];
}
declare const _default: import("vue").DefineComponent<{
    defaultConfig: ObjectConstructor;
}, unknown, PluginConfigData, {}, {
    updateConfig(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    defaultConfig?: unknown;
} & {} & {
    defaultConfig?: Record<string, any> | undefined;
}>, {}>;
export default _default;
//# sourceMappingURL=PluginConfig.vue.d.ts.map