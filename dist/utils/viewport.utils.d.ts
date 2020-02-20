declare type DeviceT = 'mobile' | 'tablet' | 'desktop';
export declare const screenSizes: {
    /**
     * tablet
     */
    tablet: number;
    /**
     * Small Device
     */
    sm: number;
    /**
     * Medium Device
     */
    md: number;
    /**
     * Large Device
     */
    lg: number;
    /**
     * Widescreen
     */
    wd: number;
    /**
     * Full HD
     */
    fullhd: number;
};
export declare const getDeviceType: (viewportWidth: number) => DeviceT;
export declare const getViewportWidth: () => number;
export declare const getViewportHeight: () => number;
export {};
//# sourceMappingURL=viewport.utils.d.ts.map