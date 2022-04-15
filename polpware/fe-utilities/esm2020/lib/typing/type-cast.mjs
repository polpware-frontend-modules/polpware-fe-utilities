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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvZmUtdXRpbGl0aWVzL3NyYy9saWIvdHlwaW5nL3R5cGUtY2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssV0FBVyxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBVTtJQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUVELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBVTtJQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztLQUM5QjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQVU7SUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM3QyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1QjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFVO0lBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDN0MsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO0tBQ3pDO0lBQ0QsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDN0MsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFVLEVBQUUsRUFBd0I7SUFDNUQsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMzQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDN0QsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM3QyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELGVBQWU7SUFDZixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQVUsRUFBRSxFQUF3QjtJQUN4RCxJQUFJLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFO1FBQzdCLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsSUFBSSxFQUFFLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtRQUMzQixPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjtJQUNELElBQUksRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDM0I7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7QUFDeEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVDaGVja2VyIGZyb20gJy4vdHlwZS1jaGVja2VyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VTdHJpbmcodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgZ2l2ZW4gdmFsdWUgaW50byBhbiBpbnRlZ2VyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUludCh2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5TnVtYmVyKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgZ2l2ZW4gdmFsdWUgaW50byBhIGZsb2F0IG51bWJlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VGbG9hdCh2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gMC4wMDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMC4wMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIGdpdmVuIHZhbHVlIGludG8gYSBib29sIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUJvb2wodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlCb29sKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcclxuICAgIH1cclxuICAgIGlmICh0eXBlQ2hlY2tlci5vayh2YWx1ZSwgdHlwZUNoZWNrZXIudHlOdW1iZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgaWYgYSBnaXZlbiB2YWx1ZSBjYW4gYmUgc2FmZWx5IGNvbnZlcnRlZCBpbnRvIHRoZSBnaXZlbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRpYmxlKHZhbHVlOiBhbnksIHR5OiB0eXBlQ2hlY2tlci5JVHlwZURlZik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZUNoZWNrZXIuaXNOdWxsKHZhbHVlKSB8fCB0eXBlQ2hlY2tlci5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eU51bWJlciAmJiBpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogcmVmaW5lXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhZmVseSBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgaW50byBhIHZhbHVlIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnQodmFsdWU6IGFueSwgdHk6IHR5cGVDaGVja2VyLklUeXBlRGVmKTogYW55IHtcclxuICAgIGlmICh0eSA9PT0gdHlwZUNoZWNrZXIudHlOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gc2FmZVBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5ID09PSB0eXBlQ2hlY2tlci50eUJvb2wpIHtcclxuICAgICAgICByZXR1cm4gc2FmZVBhcnNlQm9vbCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHkgPT09IHR5cGVDaGVja2VyLnR5U3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29udmVydCB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIGdpdmVuIHR5cGUnKTtcclxufVxyXG4iXX0=