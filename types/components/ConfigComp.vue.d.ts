import { LennaPlugin } from "../models/plugin";
declare const _default: import("vue").DefineComponent<{
    plugins: {
        type: () => Array<LennaPlugin>;
        required: true;
    };
}, unknown, {
    url: string;
    base64config: string;
}, {}, {
    download(filename: string, text: string): void;
    generateConfigUrlBase64(): void;
    generateLennaConfig(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    plugins?: unknown;
} & {
    plugins: LennaPlugin[];
} & {}>, {}>;
export default _default;
//# sourceMappingURL=ConfigComp.vue.d.ts.map