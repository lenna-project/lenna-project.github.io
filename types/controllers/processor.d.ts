import { LennaPlugin } from "../models/plugin";
import { Logger } from "../models/logger";
import { Image } from "../models/image";
declare const processImages: (sourceImages: Image[], resultImages: Image[], plugins: LennaPlugin[], logger: Logger, progressCallback: Function) => Promise<void>;
declare const processImage: (imageFile: any, plugins: LennaPlugin[], progressCallback: Function) => Promise<Uint8Array>;
export { processImages, processImage };
//# sourceMappingURL=processor.d.ts.map