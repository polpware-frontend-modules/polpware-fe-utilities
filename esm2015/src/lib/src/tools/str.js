/**
 * Replaces the placeholders a given format with the given parameters.
 */
export function replace(format, params) {
    /*jslint unparam: true */
    return format.replace(/\{([a-zA-Z]+)\}/g, function (s, key) {
        return (typeof params[key] === 'undefined') ? '' : params[key];
    });
}
/**
 * Transforms the given string into one where
 * some characters have been properly replaced with
 * their escape versions.
 */
export function applyEscape(data) {
    data = data
        .replace(/[\\]/g, '\\\\')
        .replace(/[\"]/g, '\\\"')
        .replace(/[\/]/g, '\\/')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t');
    return data;
}
/**
 * Undo the work by applyEscape. It replaces the escape
 * characters with their unescaped ones.
 */
export function reverseEscape(data) {
    data = data
        .replace(/\\\\/g, '\\')
        .replace(/\\\"/g, '\"')
        .replace(/\\\//g, '\/')
        .replace(/\\\b/g, '\b')
        .replace(/\\\f/g, '\f')
        .replace(/\\\n/g, '\n')
        .replace(/\\\r/g, '\r')
        .replace(/\\\t/g, '\t');
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3Rvb2xzL3N0ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsTUFBYyxFQUFFLE1BQThCO0lBQ2xFLHlCQUF5QjtJQUN6QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsVUFBUyxDQUFDLEVBQUUsR0FBRztRQUNyRCxPQUFPLENBQUMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVk7SUFDcEMsSUFBSSxHQUFHLElBQUk7U0FDTixPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztTQUN4QixPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztTQUN4QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQVk7SUFDdEMsSUFBSSxHQUFHLElBQUk7U0FDTixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUmVwbGFjZXMgdGhlIHBsYWNlaG9sZGVycyBhIGdpdmVuIGZvcm1hdCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoZm9ybWF0OiBzdHJpbmcsIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XHJcbiAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoL1xceyhbYS16QS1aXSspXFx9L2csIGZ1bmN0aW9uKHMsIGtleSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHBhcmFtc1trZXldID09PSAndW5kZWZpbmVkJykgPyAnJyA6IHBhcmFtc1trZXldO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSBnaXZlbiBzdHJpbmcgaW50byBvbmUgd2hlcmVcclxuICogc29tZSBjaGFyYWN0ZXJzIGhhdmUgYmVlbiBwcm9wZXJseSByZXBsYWNlZCB3aXRoXHJcbiAqIHRoZWlyIGVzY2FwZSB2ZXJzaW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVzY2FwZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZGF0YSA9IGRhdGFcclxuICAgICAgICAucmVwbGFjZSgvW1xcXFxdL2csICdcXFxcXFxcXCcpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXFwiXS9nLCAnXFxcXFxcXCInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFwvXS9nLCAnXFxcXC8nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxiXS9nLCAnXFxcXGInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxmXS9nLCAnXFxcXGYnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxuXS9nLCAnXFxcXG4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxyXS9nLCAnXFxcXHInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFx0XS9nLCAnXFxcXHQnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogVW5kbyB0aGUgd29yayBieSBhcHBseUVzY2FwZS4gSXQgcmVwbGFjZXMgdGhlIGVzY2FwZVxyXG4gKiBjaGFyYWN0ZXJzIHdpdGggdGhlaXIgdW5lc2NhcGVkIG9uZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUVzY2FwZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZGF0YSA9IGRhdGFcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcIi9nLCAnXFxcIicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXC8vZywgJ1xcLycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXGIvZywgJ1xcYicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXGYvZywgJ1xcZicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXG4vZywgJ1xcbicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXHIvZywgJ1xccicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXHQvZywgJ1xcdCcpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIl19