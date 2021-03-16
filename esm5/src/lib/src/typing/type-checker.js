/*
BasicTypes :=
    boolean
  | number
  | string
  | date
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
export function isDate(x) {
    return Object.prototype.toString.call(x) === '[object Date]';
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
export var tyBool = { name: 'Boolean', val: false, pred: isBoolean };
export var tyNull = { name: 'Null', val: null, pred: isNull };
export var tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
export var tyNumber = { name: 'Number', val: 0, pred: isNumber };
export var tyString = { name: 'String', val: '', pred: isString };
var ɵ0 = function () { return Date.now(); };
export var tyDate = { name: 'Object', val: ɵ0, pred: isDate };
export var tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
var ɵ1 = function () { return {}; };
export var tyObject = { name: 'Object', val: ɵ1, pred: isObject };
var ɵ2 = function () { return []; };
export var tyArray = { name: 'Array', val: ɵ2, pred: isArray };
var ɵ3 = function () { };
export var tyFunction = { name: 'Function', val: ɵ3, pred: isFunction };
/**
 *  Predefined types and their properties.
 */
var preDefinedTypes = {
    tyBool: tyBool,
    tyNull: tyNull,
    tyUndefined: tyUndefined,
    tyNumber: tyNumber,
    tyString: tyString,
    tyDate: tyDate,
    tySymbol: tySymbol,
    tyObject: tyObject,
    tyArray: tyArray,
    tyFunction: tyFunction
};
/**
 * Returns the default value for a given type.
 */
export function defaultValue(ty) {
    var val = ty.val;
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
    for (var prop in preDefinedTypes) {
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
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jaGVja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3R5cGluZy90eXBlLWNoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztFQVlFO0FBR0YsTUFBTSxVQUFVLFNBQVMsQ0FBQyxDQUFNO0lBQzVCLE9BQU8sT0FBTyxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsQ0FBTTtJQUMzQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxDQUFNO0lBQ3pCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLGVBQWUsQ0FBQztBQUNqRSxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxDQUFNO0lBQzNCLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLENBQU07SUFDekIsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLENBQU07SUFDOUIsT0FBTyxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQzNCLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQU07SUFDMUIsT0FBTyxDQUFDLFlBQVksS0FBSyxDQUFDO0FBQzlCLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLENBQU07SUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUVELE1B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LE9BQU8sQ0FBQyxLQUFVO0lBQzlCLEtBQUssSUFBSSxJQUFJLElBQUksZUFBZSxFQUFFO1FBQzlCLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNsQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBVSxFQUFFLEVBQVk7SUFDM0MsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2YsT0FBTztLQUNWO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0M7UUFDbEQsRUFBRSxHQUFHLHFCQUFxQixHQUFHLE9BQU8sS0FBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkJhc2ljVHlwZXMgOj0gXHJcbiAgICBib29sZWFuIFxyXG4gIHwgbnVtYmVyIFxyXG4gIHwgc3RyaW5nIFxyXG4gIHwgZGF0ZVxyXG4gIHwgc3ltYm9sXHJcbiAgfCBudWxsXHJcbiAgfCB1bmRlZmluZWRcclxuICB8IGFycmF5IFxyXG4gIHwgb2JqZWN0XHJcbiAgfCBmdW5jdGlvblxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oeDogYW55KTogeCBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeDogYW55KTogeCBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHg6IGFueSk6IHggaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUoeDogYW55KTogeCBpcyBPYmplY3Qge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeDogYW55KTogeCBpcyBzeW1ib2wge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3ltYm9sJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh4OiBhbnkpOiB4IGlzIG51bGwge1xyXG4gICAgcmV0dXJuIHggPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh4OiBhbnkpOiB4IGlzIHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh4OiBhbnkpOiB4IGlzIEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHggaW5zdGFuY2VvZiBBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHg6IGFueSk6IHggaXMgT2JqZWN0IHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHg6IGFueSk6IHggaXMgRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUeXBlRGVmIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHZhbDogYW55LFxyXG4gICAgcHJlZDogKGFueSkgPT4gYm9vbGVhblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5Qm9vbDogSVR5cGVEZWYgPSB7IG5hbWU6ICdCb29sZWFuJywgdmFsOiBmYWxzZSwgcHJlZDogaXNCb29sZWFuIH07XHJcbmV4cG9ydCBjb25zdCB0eU51bGw6IElUeXBlRGVmID0geyBuYW1lOiAnTnVsbCcsIHZhbDogbnVsbCwgcHJlZDogaXNOdWxsIH07XHJcbmV4cG9ydCBjb25zdCB0eVVuZGVmaW5lZDogSVR5cGVEZWYgPSB7IG5hbWU6ICdVbmRlZmluZWQnLCB2YWw6IHVuZGVmaW5lZCwgcHJlZDogaXNVbmRlZmluZWQgfTtcclxuZXhwb3J0IGNvbnN0IHR5TnVtYmVyOiBJVHlwZURlZiA9IHsgbmFtZTogJ051bWJlcicsIHZhbDogMCwgcHJlZDogaXNOdW1iZXIgfTtcclxuZXhwb3J0IGNvbnN0IHR5U3RyaW5nOiBJVHlwZURlZiA9IHsgbmFtZTogJ1N0cmluZycsIHZhbDogJycsIHByZWQ6IGlzU3RyaW5nIH07XHJcbmV4cG9ydCBjb25zdCB0eURhdGU6IElUeXBlRGVmID0geyBuYW1lOiAnT2JqZWN0JywgdmFsOiBmdW5jdGlvbigpIHsgcmV0dXJuIERhdGUubm93KCk7IH0sIHByZWQ6IGlzRGF0ZSB9O1xyXG5leHBvcnQgY29uc3QgdHlTeW1ib2w6IElUeXBlRGVmID0geyBuYW1lOiAnU3ltYm9sJywgdmFsOiBudWxsLCBwcmVkOiBpc1N5bWJvbCB9O1xyXG5leHBvcnQgY29uc3QgdHlPYmplY3Q6IElUeXBlRGVmID0geyBuYW1lOiAnT2JqZWN0JywgdmFsOiBmdW5jdGlvbigpIHsgcmV0dXJuIHt9OyB9LCBwcmVkOiBpc09iamVjdCB9O1xyXG5leHBvcnQgY29uc3QgdHlBcnJheTogSVR5cGVEZWYgPSB7IG5hbWU6ICdBcnJheScsIHZhbDogZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfSwgcHJlZDogaXNBcnJheSB9O1xyXG5leHBvcnQgY29uc3QgdHlGdW5jdGlvbjogSVR5cGVEZWYgPSB7IG5hbWU6ICdGdW5jdGlvbicsIHZhbDogZnVuY3Rpb24oKSB7IH0sIHByZWQ6IGlzRnVuY3Rpb24gfTtcclxuXHJcbi8qKlxyXG4gKiAgUHJlZGVmaW5lZCB0eXBlcyBhbmQgdGhlaXIgcHJvcGVydGllcy5cclxuICovXHJcbmNvbnN0IHByZURlZmluZWRUeXBlczogeyBba2V5OiBzdHJpbmddOiBJVHlwZURlZiB9ID0ge1xyXG4gICAgdHlCb29sOiB0eUJvb2wsXHJcbiAgICB0eU51bGw6IHR5TnVsbCxcclxuICAgIHR5VW5kZWZpbmVkOiB0eVVuZGVmaW5lZCxcclxuICAgIHR5TnVtYmVyOiB0eU51bWJlcixcclxuICAgIHR5U3RyaW5nOiB0eVN0cmluZyxcclxuICAgIHR5RGF0ZTogdHlEYXRlLFxyXG4gICAgdHlTeW1ib2w6IHR5U3ltYm9sLFxyXG4gICAgdHlPYmplY3Q6IHR5T2JqZWN0LFxyXG4gICAgdHlBcnJheTogdHlBcnJheSxcclxuICAgIHR5RnVuY3Rpb246IHR5RnVuY3Rpb25cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGEgZ2l2ZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWUodHk6IElUeXBlRGVmKTogYW55IHtcclxuICAgIGxldCB2YWwgPSB0eS52YWw7XHJcbiAgICBpZiAodHkgIT09IHR5RnVuY3Rpb24gJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhbCA9IHZhbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFR5cGUgY2hlY2tzIGlmIGEgZ2l2ZW4gdmFsdWUgaXMgdHlwZSBvZiB0aGUgZ2l2ZW4gdHlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvayh2YWx1ZTogYW55LCB0eTogSVR5cGVEZWYpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eS5wcmVkKHZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHR5cGUgZm9yIHRoZSBnaXZlbiB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlOiBhbnkpOiBJVHlwZURlZiB7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHByZURlZmluZWRUeXBlcykge1xyXG4gICAgICAgIGlmIChvayh2YWx1ZSwgcHJlRGVmaW5lZFR5cGVzW3Byb3BdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlRGVmaW5lZFR5cGVzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KHZhbHVlOiBhbnksIHR5OiBJVHlwZURlZik6IHZvaWQge1xyXG4gICAgaWYgKG9rKHZhbHVlLCB0eSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3R5cGUgY2hlY2sgZXJyb3I6IGV4cHRlY3RlZCB0eXBlIGlzICcgK1xyXG4gICAgICAgIHR5ICsgJyBidXQgZ2l2ZW4gdHlwZSBpcyAnICsgdHlwZW9mIHZhbHVlKTtcclxufVxyXG4iXX0=