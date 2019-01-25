/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as typeChecker from './type-checker';
/**
 * @param {?} value
 * @return {?}
 */
export function safeParseString(value) {
    if (!value) {
        return '';
    }
    return value.toString();
}
/**
 * Parses a given value into an integer.
 * @param {?} value
 * @return {?}
 */
export function safeParseInt(value) {
    if (!value) {
        return 0;
    }
    if (typeChecker.ok(value, typeChecker.tyString)) {
        return parseInt(value, 10);
    }
    if (typeChecker.ok(value, typeChecker.tyNumber)) {
        return value;
    }
    return 0;
}
/**
 * Parses a given value into a float number.
 * @param {?} value
 * @return {?}
 */
export function safeParseFloat(value) {
    if (!value) {
        return 0.00;
    }
    if (typeChecker.ok(value, typeChecker.tyString)) {
        return parseFloat(value);
    }
    if (typeChecker.ok(value, typeChecker.tyNumber)) {
        return value;
    }
    return 0.00;
}
/**
 * Parses a given value into a bool value.
 * @param {?} value
 * @return {?}
 */
export function safeParseBool(value) {
    if (!value) {
        return false;
    }
    if (typeChecker.ok(value, typeChecker.tyBool)) {
        return value;
    }
    if (typeChecker.ok(value, typeChecker.tyString)) {
        return value.toLowerCase() === 'true';
    }
    if (typeChecker.ok(value, typeChecker.tyNumber)) {
        return value > 0;
    }
    return false;
}
/**
 * Returns if a given value can be safely converted into the given type.
 * @param {?} value
 * @param {?} ty
 * @return {?}
 */
export function convertible(value, ty) {
    if (typeChecker.ok(value, ty)) {
        return true;
    }
    if (typeChecker.isNull(value) || typeChecker.isUndefined(value)) {
        return false;
    }
    if (ty === typeChecker.tyNumber && isNaN(value)) {
        return false;
    }
    // TODO: refine
    return true;
}
/**
 * Safely converts the given value into a value of the given type.
 * @param {?} value
 * @param {?} ty
 * @return {?}
 */
export function convert(value, ty) {
    if (ty === typeChecker.tyNumber) {
        return safeParseFloat(value);
    }
    if (ty === typeChecker.tyBool) {
        return safeParseBool(value);
    }
    if (ty === typeChecker.tyString) {
        return value.toString();
    }
    throw new Error('Cannot convert the given value to the given type');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jYXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3R5cGluZy90eXBlLWNhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxXQUFXLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTlDLE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBVTtJQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUVELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBVTtJQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztLQUM5QjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQVU7SUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM3QyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1QjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFVO0lBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDN0MsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO0tBQ3pDO0lBQ0QsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDN0MsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBVSxFQUFFLEVBQXdCO0lBQzVELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzdELE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsSUFBSSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDN0MsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxlQUFlO0lBQ2YsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBVSxFQUFFLEVBQXdCO0lBQ3hELElBQUksRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7SUFDRCxJQUFJLEVBQUUsS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQzNCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsSUFBSSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUM3QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMzQjtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztBQUN4RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZUNoZWNrZXIgZnJvbSAnLi90eXBlLWNoZWNrZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZVN0cmluZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGFuIGludGVnZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlSW50KHZhbHVlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGEgZmxvYXQgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUZsb2F0KHZhbHVlOiBhbnkpOiBudW1iZXIge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAwLjAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAwLjAwO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgZ2l2ZW4gdmFsdWUgaW50byBhIGJvb2wgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlQm9vbCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUJvb2wpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eVN0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBpZiBhIGdpdmVuIHZhbHVlIGNhbiBiZSBzYWZlbHkgY29udmVydGVkIGludG8gdGhlIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGlibGUodmFsdWU6IGFueSwgdHk6IHR5cGVDaGVja2VyLklUeXBlRGVmKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5KSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlQ2hlY2tlci5pc051bGwodmFsdWUpIHx8IHR5cGVDaGVja2VyLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5TnVtYmVyICYmIGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiByZWZpbmVcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogU2FmZWx5IGNvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBpbnRvIGEgdmFsdWUgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydCh2YWx1ZTogYW55LCB0eTogdHlwZUNoZWNrZXIuSVR5cGVEZWYpOiBhbnkge1xyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5Qm9vbCkge1xyXG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VCb29sKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgZ2l2ZW4gdHlwZScpO1xyXG59XHJcbiJdfQ==