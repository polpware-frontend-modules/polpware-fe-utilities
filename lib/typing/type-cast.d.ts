import * as typeChecker from './type-checker';
export declare function safeParseString(value: any): string;
/**
 * Parses a given value into an integer.
 */
export declare function safeParseInt(value: any): number;
/**
 * Parses a given value into a float number.
 */
export declare function safeParseFloat(value: any): number;
/**
 * Parses a given value into a bool value.
 */
export declare function safeParseBool(value: any): boolean;
/**
 * Returns if a given value can be safely converted into the given type.
 */
export declare function convertible(value: any, ty: typeChecker.ITypeDef): boolean;
/**
 * Safely converts the given value into a value of the given type.
 */
export declare function convert(value: any, ty: typeChecker.ITypeDef): any;
