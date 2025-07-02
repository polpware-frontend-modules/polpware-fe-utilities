/**
 * Replaces the placeholders a given format with the given parameters.
 */
export declare function replace(format: string, params: {
    [key: string]: any;
}): string;
/**
 * Transforms the given string into one where
 * some characters have been properly replaced with
 * their escape versions.
 */
export declare function applyEscape(data: string): string;
/**
 * Undo the work by applyEscape. It replaces the escape
 * characters with their unescaped ones.
 */
export declare function reverseEscape(data: string): string;
