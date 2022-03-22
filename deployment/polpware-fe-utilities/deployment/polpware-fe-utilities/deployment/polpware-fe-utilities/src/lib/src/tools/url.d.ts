/**
 * Encodes a key-value pair, where a value can be an array.
 */
export declare function urlEncodePair(key: string, value: any, str: Array<string>): void;
/**
 * Encodes an object in www form.
 */
export declare function urlEncode(data: Object): string;
export declare function getParamByName(name: string, url: string): string | null;
export declare function getQueryParamByName(name: string, url?: string): string | null;
export declare function getHashParamByName(name: string, url?: string): string | null;
