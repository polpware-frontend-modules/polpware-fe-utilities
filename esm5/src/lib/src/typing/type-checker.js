/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
BasicTypes :=
    boolean
  | number
  | string
  | symbol
  | null
  | undefined
  | array
  | object
  | function
*/
/**
 * @param {?} x
 * @return {?}
 */
export function isBoolean(x) {
    return typeof x === 'boolean';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isNumber(x) {
    return typeof x === 'number';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isString(x) {
    return typeof x === 'string';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isSymbol(x) {
    return typeof x === 'symbol';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isNull(x) {
    return x === null;
}
/**
 * @param {?} x
 * @return {?}
 */
export function isUndefined(x) {
    return x === undefined;
}
/**
 * @param {?} x
 * @return {?}
 */
export function isArray(x) {
    return x instanceof Array;
}
/**
 * @param {?} x
 * @return {?}
 */
export function isObject(x) {
    return typeof x === 'object';
}
/**
 * @param {?} x
 * @return {?}
 */
export function isFunction(x) {
    return typeof x === 'function';
}
/**
 * @record
 */
export function ITypeDef() { }
if (false) {
    /** @type {?} */
    ITypeDef.prototype.name;
    /** @type {?} */
    ITypeDef.prototype.val;
    /** @type {?} */
    ITypeDef.prototype.pred;
}
;
/** @type {?} */
export var tyBool = { name: 'Boolean', val: false, pred: isBoolean };
/** @type {?} */
export var tyNull = { name: 'Null', val: null, pred: isNull };
/** @type {?} */
export var tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
/** @type {?} */
export var tyNumber = { name: 'Number', val: 0, pred: isNumber };
/** @type {?} */
export var tyString = { name: 'String', val: '', pred: isString };
/** @type {?} */
export var tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
/** @type {?} */
export var tyObject = { name: 'Object', val: function () { return {}; }, pred: isObject };
/** @type {?} */
export var tyArray = { name: 'Array', val: function () { return []; }, pred: isArray };
/** @type {?} */
export var tyFunction = { name: 'Function', val: function () { }, pred: isFunction };
/**
 *  Predefined types and their properties.
 * @type {?}
 */
var preDefinedTypes = {
    tyBool: tyBool,
    tyNull: tyNull,
    tyUndefined: tyUndefined,
    tyNumber: tyNumber,
    tyString: tyString,
    tySymbol: tySymbol,
    tyObject: tyObject,
    tyArray: tyArray,
    tyFunction: tyFunction
};
/**
 * Returns the default value for a given type.
 * @param {?} ty
 * @return {?}
 */
export function defaultValue(ty) {
    /** @type {?} */
    var val = ty.val;
    if (ty !== tyFunction && typeof val === 'function') {
        val = val();
    }
    return val;
}
/**
 * Type checks if a given value is type of the given ty
 * @param {?} value
 * @param {?} ty
 * @return {?}
 */
export function ok(value, ty) {
    return ty.pred(value);
}
/**
 * Returns the type for the given value.
 * @param {?} value
 * @return {?}
 */
export function getType(value) {
    for (var prop in preDefinedTypes) {
        if (ok(value, preDefinedTypes[prop])) {
            return preDefinedTypes[prop];
        }
    }
    return null;
}
/**
 * @param {?} value
 * @param {?} ty
 * @return {?}
 */
export function assert(value, ty) {
    if (ok(value, ty)) {
        return;
    }
    throw new Error('type check error: exptected type is ' +
        ty + ' but given type is ' + typeof value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jaGVja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3R5cGluZy90eXBlLWNoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLFVBQVUsU0FBUyxDQUFDLENBQU07SUFDNUIsT0FBTyxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUM7QUFDbEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLENBQU07SUFDekIsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDO0FBQ3RCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxDQUFNO0lBQzlCLE9BQU8sQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUMzQixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBTTtJQUMxQixPQUFPLENBQUMsWUFBWSxLQUFLLENBQUM7QUFDOUIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLENBQU07SUFDN0IsT0FBTyxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDbkMsQ0FBQzs7OztBQUVELDhCQUlDOzs7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cUJBQXFCLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQmFzaWNUeXBlcyA6PSBcclxuICAgIGJvb2xlYW4gXHJcbiAgfCBudW1iZXIgXHJcbiAgfCBzdHJpbmcgXHJcbiAgfCBzeW1ib2xcclxuICB8IG51bGxcclxuICB8IHVuZGVmaW5lZFxyXG4gIHwgYXJyYXkgXHJcbiAgfCBvYmplY3RcclxuICB8IGZ1bmN0aW9uXHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4OiBhbnkpOiB4IGlzIGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4OiBhbnkpOiB4IGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoeDogYW55KTogeCBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ltYm9sKHg6IGFueSk6IHggaXMgc3ltYm9sIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ3N5bWJvbCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeDogYW55KTogeCBpcyBudWxsIHtcclxuICAgIHJldHVybiB4ID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoeDogYW55KTogeCBpcyB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkoeDogYW55KTogeCBpcyBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiB4IGluc3RhbmNlb2YgQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh4OiBhbnkpOiB4IGlzIE9iamVjdCB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih4OiBhbnkpOiB4IGlzIEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHlwZURlZiB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2YWw6IGFueSxcclxuICAgIHByZWQ6IChhbnkpID0+IGJvb2xlYW5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0eUJvb2w6IElUeXBlRGVmID0geyBuYW1lOiAnQm9vbGVhbicsIHZhbDogZmFsc2UsIHByZWQ6IGlzQm9vbGVhbiB9O1xyXG5leHBvcnQgY29uc3QgdHlOdWxsOiBJVHlwZURlZiA9IHsgbmFtZTogJ051bGwnLCB2YWw6IG51bGwsIHByZWQ6IGlzTnVsbCB9O1xyXG5leHBvcnQgY29uc3QgdHlVbmRlZmluZWQ6IElUeXBlRGVmID0geyBuYW1lOiAnVW5kZWZpbmVkJywgdmFsOiB1bmRlZmluZWQsIHByZWQ6IGlzVW5kZWZpbmVkIH07XHJcbmV4cG9ydCBjb25zdCB0eU51bWJlcjogSVR5cGVEZWYgPSB7IG5hbWU6ICdOdW1iZXInLCB2YWw6IDAsIHByZWQ6IGlzTnVtYmVyIH07XHJcbmV4cG9ydCBjb25zdCB0eVN0cmluZzogSVR5cGVEZWYgPSB7IG5hbWU6ICdTdHJpbmcnLCB2YWw6ICcnLCBwcmVkOiBpc1N0cmluZyB9O1xyXG5leHBvcnQgY29uc3QgdHlTeW1ib2w6IElUeXBlRGVmID0geyBuYW1lOiAnU3ltYm9sJywgdmFsOiBudWxsLCBwcmVkOiBpc1N5bWJvbCB9O1xyXG5leHBvcnQgY29uc3QgdHlPYmplY3Q6IElUeXBlRGVmID0geyBuYW1lOiAnT2JqZWN0JywgdmFsOiBmdW5jdGlvbigpIHsgcmV0dXJuIHt9OyB9LCBwcmVkOiBpc09iamVjdCB9O1xyXG5leHBvcnQgY29uc3QgdHlBcnJheTogSVR5cGVEZWYgPSB7IG5hbWU6ICdBcnJheScsIHZhbDogZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfSwgcHJlZDogaXNBcnJheSB9O1xyXG5leHBvcnQgY29uc3QgdHlGdW5jdGlvbjogSVR5cGVEZWYgPSB7IG5hbWU6ICdGdW5jdGlvbicsIHZhbDogZnVuY3Rpb24oKSB7IH0sIHByZWQ6IGlzRnVuY3Rpb24gfTtcclxuXHJcbi8qKlxyXG4gKiAgUHJlZGVmaW5lZCB0eXBlcyBhbmQgdGhlaXIgcHJvcGVydGllcy5cclxuICovXHJcbmNvbnN0IHByZURlZmluZWRUeXBlczogeyBba2V5OiBzdHJpbmddOiBJVHlwZURlZiB9ID0ge1xyXG4gICAgdHlCb29sOiB0eUJvb2wsXHJcbiAgICB0eU51bGw6IHR5TnVsbCxcclxuICAgIHR5VW5kZWZpbmVkOiB0eVVuZGVmaW5lZCxcclxuICAgIHR5TnVtYmVyOiB0eU51bWJlcixcclxuICAgIHR5U3RyaW5nOiB0eVN0cmluZyxcclxuICAgIHR5U3ltYm9sOiB0eVN5bWJvbCxcclxuICAgIHR5T2JqZWN0OiB0eU9iamVjdCxcclxuICAgIHR5QXJyYXk6IHR5QXJyYXksXHJcbiAgICB0eUZ1bmN0aW9uOiB0eUZ1bmN0aW9uXHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5OiBJVHlwZURlZik6IGFueSB7XHJcbiAgICBsZXQgdmFsID0gdHkudmFsO1xyXG4gICAgaWYgKHR5ICE9PSB0eUZ1bmN0aW9uICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YWwgPSB2YWwoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGNoZWNrcyBpZiBhIGdpdmVuIHZhbHVlIGlzIHR5cGUgb2YgdGhlIGdpdmVuIHR5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2sodmFsdWU6IGFueSwgdHk6IElUeXBlRGVmKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHkucHJlZCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB0eXBlIGZvciB0aGUgZ2l2ZW4gdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZTogYW55KTogSVR5cGVEZWYge1xyXG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcmVEZWZpbmVkVHlwZXMpIHtcclxuICAgICAgICBpZiAob2sodmFsdWUsIHByZURlZmluZWRUeXBlc1twcm9wXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZURlZmluZWRUeXBlc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydCh2YWx1ZTogYW55LCB0eTogSVR5cGVEZWYpOiB2b2lkIHtcclxuICAgIGlmIChvayh2YWx1ZSwgdHkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0eXBlIGNoZWNrIGVycm9yOiBleHB0ZWN0ZWQgdHlwZSBpcyAnICtcclxuICAgICAgICB0eSArICcgYnV0IGdpdmVuIHR5cGUgaXMgJyArIHR5cGVvZiB2YWx1ZSk7XHJcbn1cclxuIl19