export declare function isBoolean(x: any): x is boolean;
export declare function isNumber(x: any): x is number;
export declare function isString(x: any): x is string;
export declare function isSymbol(x: any): x is symbol;
export declare function isNull(x: any): x is null;
export declare function isUndefined(x: any): x is undefined;
export declare function isArray(x: any): x is Array<any>;
export declare function isObject(x: any): x is Object;
export declare function isFunction(x: any): x is Function;
export interface ITypeDef {
    name: string;
    val: any;
    pred: (any: any) => boolean;
}
export declare const tyBool: ITypeDef;
export declare const tyNull: ITypeDef;
export declare const tyUndefined: ITypeDef;
export declare const tyNumber: ITypeDef;
export declare const tyString: ITypeDef;
export declare const tySymbol: ITypeDef;
export declare const tyObject: ITypeDef;
export declare const tyArray: ITypeDef;
export declare const tyFunction: ITypeDef;
/**
 * Returns the default value for a given type.
 */
export declare function defaultValue(ty: ITypeDef): any;
/**
 * Type checks if a given value is type of the given ty
 */
export declare function ok(value: any, ty: ITypeDef): boolean;
/**
 * Returns the type for the given value.
 */
export declare function getType(value: any): ITypeDef;
export declare function assert(value: any, ty: ITypeDef): void;
