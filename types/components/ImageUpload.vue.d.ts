export declare interface ImageUploadData {
    files: Object[];
    images: Object[];
    visible: boolean;
    index: number;
}
declare const _default: import("vue").DefineComponent<{}, {}, ImageUploadData, {}, {
    inputFile(newFile: any, oldFile: any, prevent: any): void;
    inputFilter(newFile: any, oldFile: any, prevent: any): any;
    showImg(index: number): void;
    handleHide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
//# sourceMappingURL=ImageUpload.vue.d.ts.map