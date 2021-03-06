import * as typeChecker from './type-checker';
export function safeParseString(value) {
    if (!value) {
        return '';
    }
    return value.toString();
}
/**
 * Parses a given value into an integer.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jYXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3R5cGluZy90eXBlLWNhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLFdBQVcsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQVU7SUFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQVU7SUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFDRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM3QyxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDOUI7SUFDRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM3QyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFVO0lBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDN0MsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7SUFDRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM3QyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBVTtJQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQztLQUN6QztJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBVSxFQUFFLEVBQXdCO0lBQzVELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzdELE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsSUFBSSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDN0MsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxlQUFlO0lBQ2YsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFVLEVBQUUsRUFBd0I7SUFDeEQsSUFBSSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUM3QixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQztJQUNELElBQUksRUFBRSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7UUFDM0IsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7SUFDRCxJQUFJLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFO1FBQzdCLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzNCO0lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0FBQ3hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlQ2hlY2tlciBmcm9tICcuL3R5cGUtY2hlY2tlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlU3RyaW5nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIGdpdmVuIHZhbHVlIGludG8gYW4gaW50ZWdlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VJbnQodmFsdWU6IGFueSk6IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5U3RyaW5nKSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIGdpdmVuIHZhbHVlIGludG8gYSBmbG9hdCBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlRmxvYXQodmFsdWU6IGFueSk6IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIDAuMDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5U3RyaW5nKSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDAuMDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBnaXZlbiB2YWx1ZSBpbnRvIGEgYm9vbCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VCb29sKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5Qm9vbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5U3RyaW5nKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA+IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGlmIGEgZ2l2ZW4gdmFsdWUgY2FuIGJlIHNhZmVseSBjb252ZXJ0ZWQgaW50byB0aGUgZ2l2ZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0aWJsZSh2YWx1ZTogYW55LCB0eTogdHlwZUNoZWNrZXIuSVR5cGVEZWYpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVDaGVja2VyLmlzTnVsbCh2YWx1ZSkgfHwgdHlwZUNoZWNrZXIuaXNVbmRlZmluZWQodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlOdW1iZXIgJiYgaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IHJlZmluZVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYWZlbHkgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIGludG8gYSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0KHZhbHVlOiBhbnksIHR5OiB0eXBlQ2hlY2tlci5JVHlwZURlZik6IGFueSB7XHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5TnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlCb29sKSB7XHJcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2wodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eVN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBnaXZlbiB0eXBlJyk7XHJcbn1cclxuIl19