/**
 * Generates a guid.
 */
declare function guid(): string;
/**
 * Generates a random number between the given range
 */
declare function getRandomInt(min: any, max: any): any;

/**
 * Encodes a key-value pair, where a value can be an array.
 */
declare function urlEncodePair(key: string, value: any, str: Array<string>): void;
/**
 * Encodes an object in www form.
 */
declare function urlEncode(data: Object): string;
declare function getParamByName(name: string, url: string): string | null;
declare function getQueryParamByName(name: string, url?: string): string | null;
declare function getHashParamByName(name: string, url?: string): string | null;

/**
 * Pushs an array or a single value into the thisArg;
 */
declare function pushArray<T>(thisArg: Array<T>, src: Array<T> | T): void;
/**
 * Turns the values in an object into an array
 */
declare function makeArray(o: Object): any[];

/**
 * Replaces the placeholders a given format with the given parameters.
 */
declare function replace(format: string, params: {
    [key: string]: any;
}): string;
/**
 * Transforms the given string into one where
 * some characters have been properly replaced with
 * their escape versions.
 */
declare function applyEscape(data: string): string;
/**
 * Undo the work by applyEscape. It replaces the escape
 * characters with their unescaped ones.
 */
declare function reverseEscape(data: string): string;

declare function diff<T, U>(firstSet: Array<T>, secondSet: Array<U>, predicate: (firstElem: T, secondElem: U) => boolean): Array<T>;
declare function intersection<T, U>(firstSet: Array<T>, secondSet: Array<U>, predicate: (firstElem: T, secondElem: U) => boolean): Array<T>;

/**
 * @fileOverview
 * Provides utilities for computing hash values
 */
/**
 * Computes the hash code for a given value.
 * This method takes into account the type of the given
 * value when generating its hash code.
 */
declare function hashCode(value: any): number;
/**
 * Computes the hash code for a member of an object, based on
 * the given member member, the value to be hashed, and the configuration
 * about how each member contributes to the enire hash code of the
 * object.
 */
declare function hashMember(name: string, value: any, configuration: {
    [key: string]: number;
}): number;

/**
 * Converts the given date and time into a UTC time.
 * If the given time zone is null or undefined, this
 * method will not use the local time zone.
 * @param dateInLocal Date in local time
 * @param timeInLocal Time in local time
 * @param timezone Optional time zone
 */
declare function convertToUtc(dateInLocal: Date, timeInLocal: Date, timezone?: number): Date;
/**
 Get the timezone offset between the local time and UTC.
 */
declare function getTimezoneOffset(): number;
/**
 * A set of commonly used interval.
 */
declare enum IntervalEnum {
    Day = 10,
    Week = 50,
    Month = 100,
    Year = 500,
    Custom = 1000
}
/**
 * Returns the UTC time this moment.
 * This method uses the current time zone.
 */
declare function getUtcNow(): Date;
declare function hasDST(date?: Date): boolean;
/**
 * Converts a local time to Utc string.
 * @param date
 */
declare function convertToUtcString(date: Date): string;
declare enum MonthEnum {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}
declare function getMonthsOfYear(): any[];
declare enum DayOfWeekEnum {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
declare function getDaysOfWeek(): any[];
declare function getDaysOfMonth(): any[];

declare function isBoolean(x: any): x is boolean;
declare function isNumber(x: any): x is number;
declare function isString(x: any): x is string;
declare function isDate(x: any): x is Object;
declare function isSymbol(x: any): x is symbol;
declare function isNull(x: any): x is null;
declare function isUndefined(x: any): x is undefined;
declare function isArray(x: any): x is Array<any>;
declare function isObject(x: any): x is Object;
declare function isFunction(x: any): x is Function;
interface ITypeDef {
    name: string;
    val: any;
    pred: (any: any) => boolean;
}
declare const tyBool: ITypeDef;
declare const tyNull: ITypeDef;
declare const tyUndefined: ITypeDef;
declare const tyNumber: ITypeDef;
declare const tyString: ITypeDef;
declare const tyDate: ITypeDef;
declare const tySymbol: ITypeDef;
declare const tyObject: ITypeDef;
declare const tyArray: ITypeDef;
declare const tyFunction: ITypeDef;
/**
 * Returns the default value for a given type.
 */
declare function defaultValue(ty: ITypeDef): any;
/**
 * Type checks if a given value is type of the given ty
 */
declare function ok(value: any, ty: ITypeDef): boolean;
/**
 * Returns the type for the given value.
 */
declare function getType(value: any): ITypeDef;
declare function assert(value: any, ty: ITypeDef): void;

declare function safeParseString(value: any): string;
/**
 * Parses a given value into an integer.
 */
declare function safeParseInt(value: any): number;
/**
 * Parses a given value into a float number.
 */
declare function safeParseFloat(value: any): number;
/**
 * Parses a given value into a bool value.
 */
declare function safeParseBool(value: any): boolean;
/**
 * Returns if a given value can be safely converted into the given type.
 */
declare function convertible(value: any, ty: ITypeDef): boolean;
/**
 * Safely converts the given value into a value of the given type.
 */
declare function convert(value: any, ty: ITypeDef): any;

/**
 * Lifts a single value or a function into a Promise-like object.
 * Provides a method of wrapping a single value or a function  into a Promise,
 * in order that the following operation
 * may conform to the standard Promise operation.
 * In some scenario, we may first attempt to get a value from cache.
 * Motivation.
 * In this case, we need to return a value. However, if the value is
 * not available in the cache, we may have to go ahead to load it
 * asynchronously. Loading a value asynchronously usually returns
 * a Promise. To untify the return from two cases, we
 * escalate a single value into a Promise.
 */
declare function lift<T>(value: T, thisArg: Object): PromiseLike<T>;
/**
 * Lifts a value into an rejected state.
 */
declare function liftIntoReject<T>(value: T): PromiseLike<T>;
/**
 * Converts a given promise into another promise which ensures that
 * the given guard evalutes to be true from the state of the given promise.
 */
declare function liftWithGuard<T>(promise: PromiseLike<T>, guard: (x: T) => boolean): PromiseLike<T>;
/**
 * Settles a promise.
 */
declare function settle<T>(promise: PromiseLike<T>): PromiseLike<T>;
/**
 * Converts the given promise into a promise which does not reject anything.
 */
declare function liftToPredicate<T>(promise: PromiseLike<T>, guard: (x: T) => boolean): PromiseLike<boolean>;
interface IPipelineSettings<U> {
    validator?: (x: any) => boolean;
    adaptor: (x: any) => U;
}
/**
 * Transforms a given promise with additonal pipeline processing.
 * Specifically, in this method, compared to the given promise, the return
 * promise contains validating and adpating stages.
 */
declare function readerPipeline<T, U>(readerPromise: PromiseLike<T>, settings: IPipelineSettings<U>): PromiseLike<U>;
/**
 * Transforms a given promise into one promise with our own implementation.
 */
declare function transform<T>(promise: PromiseLike<T>): PromiseLike<T>;

/**
 * @fileOverview
 * Provides utilities for making interoperable the promise-like objects
 * from different modules.
 */
/**
 * Extends a given promise into a deferred object of jQuery.
 * With this extension, we are able to chain together jQuery deferred
 * objects (which are also promise objects.)
 */
declare function tojQueryDeferred(promise: any): any;

/**
 * Defines a dummy promise, which simulates the behavior of a normal Promise
 * but is suitable used in synchronous call.
 * This resulted object is also a jQuery deferred object, therefore,
 * it will be resolved by the jQuery deferred object if it is a resolved value in
 * the jQuery deferred object.
 */
declare function DummyPromise<T>(fn: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): void;

export { DayOfWeekEnum, DummyPromise, IntervalEnum, MonthEnum, applyEscape, assert, convert, convertToUtc, convertToUtcString, convertible, defaultValue, diff, getDaysOfMonth, getDaysOfWeek, getHashParamByName, getMonthsOfYear, getParamByName, getQueryParamByName, getRandomInt, getTimezoneOffset, getType, getUtcNow, guid, hasDST, hashCode, hashMember, intersection, isArray, isBoolean, isDate, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined, lift, liftIntoReject, liftToPredicate, liftWithGuard, makeArray, ok, pushArray, readerPipeline, replace, reverseEscape, safeParseBool, safeParseFloat, safeParseInt, safeParseString, settle, tojQueryDeferred, transform, tyArray, tyBool, tyDate, tyFunction, tyNull, tyNumber, tyObject, tyString, tySymbol, tyUndefined, urlEncode, urlEncodePair };
export type { IPipelineSettings, ITypeDef };
