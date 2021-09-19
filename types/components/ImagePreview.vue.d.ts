interface ImagePreviewImage {
    name: string;
}
declare interface ImagePreviewData {
    imgs: string[];
    visible: boolean;
    index: number;
    filetype: string;
    options: Object[];
}
declare const _default: import("vue").DefineComponent<{
    images: {
        type: () => Array<ImagePreviewImage>;
        required: true;
    };
}, unknown, ImagePreviewData, {}, {
    createObjectURL(image: ImagePreviewImage): string;
    safeImage(file: any, format: string): Promise<Uint8Array>;
    downloadZip(): Promise<void>;
    show(): void;
    showImg(index: any): void;
    handleHide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    images?: unknown;
} & {
    images: ImagePreviewImage[];
} & {}>, {}>;
export default _default;
//# sourceMappingURL=ImagePreview.vue.d.ts.map