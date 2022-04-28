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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvZmUtdXRpbGl0aWVzL3NyYy9saWIvdG9vbHMvc3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxNQUFjLEVBQUUsTUFBOEI7SUFDbEUseUJBQXlCO0lBQ3pCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxVQUFTLENBQUMsRUFBRSxHQUFHO1FBQ3JELE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBWTtJQUNwQyxJQUFJLEdBQUcsSUFBSTtTQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1NBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1NBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBWTtJQUN0QyxJQUFJLEdBQUcsSUFBSTtTQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBSZXBsYWNlcyB0aGUgcGxhY2Vob2xkZXJzIGEgZ2l2ZW4gZm9ybWF0IHdpdGggdGhlIGdpdmVuIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShmb3JtYXQ6IHN0cmluZywgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogc3RyaW5nIHtcclxuICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvXFx7KFthLXpBLVpdKylcXH0vZywgZnVuY3Rpb24ocywga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICd1bmRlZmluZWQnKSA/ICcnIDogcGFyYW1zW2tleV07XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIGdpdmVuIHN0cmluZyBpbnRvIG9uZSB3aGVyZVxyXG4gKiBzb21lIGNoYXJhY3RlcnMgaGF2ZSBiZWVuIHByb3Blcmx5IHJlcGxhY2VkIHdpdGhcclxuICogdGhlaXIgZXNjYXBlIHZlcnNpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RXNjYXBlKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBkYXRhID0gZGF0YVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFxcXF0vZywgJ1xcXFxcXFxcJylcclxuICAgICAgICAucmVwbGFjZSgvW1xcXCJdL2csICdcXFxcXFxcIicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXC9dL2csICdcXFxcLycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXGJdL2csICdcXFxcYicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXGZdL2csICdcXFxcZicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXG5dL2csICdcXFxcbicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXHJdL2csICdcXFxccicpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXHRdL2csICdcXFxcdCcpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbmRvIHRoZSB3b3JrIGJ5IGFwcGx5RXNjYXBlLiBJdCByZXBsYWNlcyB0aGUgZXNjYXBlXHJcbiAqIGNoYXJhY3RlcnMgd2l0aCB0aGVpciB1bmVzY2FwZWQgb25lcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlRXNjYXBlKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBkYXRhID0gZGF0YVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcXFwiL2csICdcXFwiJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcLy9nLCAnXFwvJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcYi9nLCAnXFxiJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcZi9nLCAnXFxmJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcbi9nLCAnXFxuJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcci9nLCAnXFxyJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFxcdC9nLCAnXFx0Jyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iXX0=