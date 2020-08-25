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
export function isBoolean(x) {
    return typeof x === 'boolean';
}
export function isNumber(x) {
    return typeof x === 'number';
}
export function isString(x) {
    return typeof x === 'string';
}
export function isSymbol(x) {
    return typeof x === 'symbol';
}
export function isNull(x) {
    return x === null;
}
export function isUndefined(x) {
    return x === undefined;
}
export function isArray(x) {
    return x instanceof Array;
}
export function isObject(x) {
    return typeof x === 'object';
}
export function isFunction(x) {
    return typeof x === 'function';
}
;
export const tyBool = { name: 'Boolean', val: false, pred: isBoolean };
export const tyNull = { name: 'Null', val: null, pred: isNull };
export const tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
export const tyNumber = { name: 'Number', val: 0, pred: isNumber };
export const tyString = { name: 'String', val: '', pred: isString };
export const tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
const ɵ0 = function () { return {}; };
export const tyObject = { name: 'Object', val: ɵ0, pred: isObject };
const ɵ1 = function () { return []; };
export const tyArray = { name: 'Array', val: ɵ1, pred: isArray };
const ɵ2 = function () { };
export const tyFunction = { name: 'Function', val: ɵ2, pred: isFunction };
/**
 *  Predefined types and their properties.
 */
const preDefinedTypes = {
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
 */
export function defaultValue(ty) {
    let val = ty.val;
    if (ty !== tyFunction && typeof val === 'function') {
        val = val();
    }
    return val;
}
/**
 * Type checks if a given value is type of the given ty
 */
export function ok(value, ty) {
    return ty.pred(value);
}
/**
 * Returns the type for the given value.
 */
export function getType(value) {
    for (let prop in preDefinedTypes) {
        if (ok(value, preDefinedTypes[prop])) {
            return preDefinedTypes[prop];
        }
    }
    return null;
}
export function assert(value, ty) {
    if (ok(value, ty)) {
        return;
    }
    throw new Error('type check error: exptected type is ' +
        ty + ' but given type is ' + typeof value);
}
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jaGVja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3R5cGluZy90eXBlLWNoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0VBV0U7QUFHRixNQUFNLFVBQVUsU0FBUyxDQUFDLENBQU07SUFDNUIsT0FBTyxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUM7QUFDbEMsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsQ0FBTTtJQUMzQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsQ0FBTTtJQUN6QixPQUFPLENBQUMsS0FBSyxJQUFJLENBQUM7QUFDdEIsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBTTtJQUM5QixPQUFPLENBQUMsS0FBSyxTQUFTLENBQUM7QUFDM0IsQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBTTtJQUMxQixPQUFPLENBQUMsWUFBWSxLQUFLLENBQUM7QUFDOUIsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsQ0FBTTtJQUMzQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxDQUFNO0lBQzdCLE9BQU8sT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ25DLENBQUM7QUFNQSxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLEVBQUUsSUFB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O0tBQ1Y7SUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQztRQUNsRCxFQUFFLEdBQUcscUJBQXFCLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQmFzaWNUeXBlcyA6PSBcclxuICAgIGJvb2xlYW4gXHJcbiAgfCBudW1iZXIgXHJcbiAgfCBzdHJpbmcgXHJcbiAgfCBzeW1ib2xcclxuICB8IG51bGxcclxuICB8IHVuZGVmaW5lZFxyXG4gIHwgYXJyYXkgXHJcbiAgfCBvYmplY3RcclxuICB8IGZ1bmN0aW9uXHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4OiBhbnkpOiB4IGlzIGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4OiBhbnkpOiB4IGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoeDogYW55KTogeCBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ltYm9sKHg6IGFueSk6IHggaXMgc3ltYm9sIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ3N5bWJvbCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeDogYW55KTogeCBpcyBudWxsIHtcclxuICAgIHJldHVybiB4ID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoeDogYW55KTogeCBpcyB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkoeDogYW55KTogeCBpcyBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiB4IGluc3RhbmNlb2YgQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh4OiBhbnkpOiB4IGlzIE9iamVjdCB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih4OiBhbnkpOiB4IGlzIEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHlwZURlZiB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2YWw6IGFueSxcclxuICAgIHByZWQ6IChhbnkpID0+IGJvb2xlYW5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0eUJvb2w6IElUeXBlRGVmID0geyBuYW1lOiAnQm9vbGVhbicsIHZhbDogZmFsc2UsIHByZWQ6IGlzQm9vbGVhbiB9O1xyXG5leHBvcnQgY29uc3QgdHlOdWxsOiBJVHlwZURlZiA9IHsgbmFtZTogJ051bGwnLCB2YWw6IG51bGwsIHByZWQ6IGlzTnVsbCB9O1xyXG5leHBvcnQgY29uc3QgdHlVbmRlZmluZWQ6IElUeXBlRGVmID0geyBuYW1lOiAnVW5kZWZpbmVkJywgdmFsOiB1bmRlZmluZWQsIHByZWQ6IGlzVW5kZWZpbmVkIH07XHJcbmV4cG9ydCBjb25zdCB0eU51bWJlcjogSVR5cGVEZWYgPSB7IG5hbWU6ICdOdW1iZXInLCB2YWw6IDAsIHByZWQ6IGlzTnVtYmVyIH07XHJcbmV4cG9ydCBjb25zdCB0eVN0cmluZzogSVR5cGVEZWYgPSB7IG5hbWU6ICdTdHJpbmcnLCB2YWw6ICcnLCBwcmVkOiBpc1N0cmluZyB9O1xyXG5leHBvcnQgY29uc3QgdHlTeW1ib2w6IElUeXBlRGVmID0geyBuYW1lOiAnU3ltYm9sJywgdmFsOiBudWxsLCBwcmVkOiBpc1N5bWJvbCB9O1xyXG5leHBvcnQgY29uc3QgdHlPYmplY3Q6IElUeXBlRGVmID0geyBuYW1lOiAnT2JqZWN0JywgdmFsOiBmdW5jdGlvbigpIHsgcmV0dXJuIHt9OyB9LCBwcmVkOiBpc09iamVjdCB9O1xyXG5leHBvcnQgY29uc3QgdHlBcnJheTogSVR5cGVEZWYgPSB7IG5hbWU6ICdBcnJheScsIHZhbDogZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfSwgcHJlZDogaXNBcnJheSB9O1xyXG5leHBvcnQgY29uc3QgdHlGdW5jdGlvbjogSVR5cGVEZWYgPSB7IG5hbWU6ICdGdW5jdGlvbicsIHZhbDogZnVuY3Rpb24oKSB7IH0sIHByZWQ6IGlzRnVuY3Rpb24gfTtcclxuXHJcbi8qKlxyXG4gKiAgUHJlZGVmaW5lZCB0eXBlcyBhbmQgdGhlaXIgcHJvcGVydGllcy5cclxuICovXHJcbmNvbnN0IHByZURlZmluZWRUeXBlczogeyBba2V5OiBzdHJpbmddOiBJVHlwZURlZiB9ID0ge1xyXG4gICAgdHlCb29sOiB0eUJvb2wsXHJcbiAgICB0eU51bGw6IHR5TnVsbCxcclxuICAgIHR5VW5kZWZpbmVkOiB0eVVuZGVmaW5lZCxcclxuICAgIHR5TnVtYmVyOiB0eU51bWJlcixcclxuICAgIHR5U3RyaW5nOiB0eVN0cmluZyxcclxuICAgIHR5U3ltYm9sOiB0eVN5bWJvbCxcclxuICAgIHR5T2JqZWN0OiB0eU9iamVjdCxcclxuICAgIHR5QXJyYXk6IHR5QXJyYXksXHJcbiAgICB0eUZ1bmN0aW9uOiB0eUZ1bmN0aW9uXHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5OiBJVHlwZURlZik6IGFueSB7XHJcbiAgICBsZXQgdmFsID0gdHkudmFsO1xyXG4gICAgaWYgKHR5ICE9PSB0eUZ1bmN0aW9uICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YWwgPSB2YWwoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGNoZWNrcyBpZiBhIGdpdmVuIHZhbHVlIGlzIHR5cGUgb2YgdGhlIGdpdmVuIHR5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2sodmFsdWU6IGFueSwgdHk6IElUeXBlRGVmKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHkucHJlZCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB0eXBlIGZvciB0aGUgZ2l2ZW4gdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZTogYW55KTogSVR5cGVEZWYge1xyXG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcmVEZWZpbmVkVHlwZXMpIHtcclxuICAgICAgICBpZiAob2sodmFsdWUsIHByZURlZmluZWRUeXBlc1twcm9wXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZURlZmluZWRUeXBlc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydCh2YWx1ZTogYW55LCB0eTogSVR5cGVEZWYpOiB2b2lkIHtcclxuICAgIGlmIChvayh2YWx1ZSwgdHkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0eXBlIGNoZWNrIGVycm9yOiBleHB0ZWN0ZWQgdHlwZSBpcyAnICtcclxuICAgICAgICB0eSArICcgYnV0IGdpdmVuIHR5cGUgaXMgJyArIHR5cGVvZiB2YWx1ZSk7XHJcbn1cclxuIl19