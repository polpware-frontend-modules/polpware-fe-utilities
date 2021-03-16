/**
 * Pushs an array or a single value into the thisArg;
 */
export function pushArray(thisArg, src) {
    if (!(src instanceof Array)) {
        thisArg.push(src);
        return;
    }
    src.forEach(function (item) {
        thisArg.push(item);
    });
}
/**
 * Turns the values in an object into an array
 */
export function makeArray(o) {
    const ret = [];
    for (let n in o) {
        if (o.hasOwnProperty(n)) {
            ret.push(o[n]);
        }
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3Rvb2xzL2Fyci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUksT0FBaUIsRUFBRSxHQUFpQjtJQUM3RCxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixPQUFPO0tBQ1Y7SUFFRCxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxDQUFTO0lBQy9CLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2IsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQdXNocyBhbiBhcnJheSBvciBhIHNpbmdsZSB2YWx1ZSBpbnRvIHRoZSB0aGlzQXJnO1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hBcnJheTxUPih0aGlzQXJnOiBBcnJheTxUPiwgc3JjOiBBcnJheTxUPiB8IFQpOiB2b2lkIHtcclxuICAgIGlmICghKHNyYyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgIHRoaXNBcmcucHVzaChzcmMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzcmMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgdGhpc0FyZy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUdXJucyB0aGUgdmFsdWVzIGluIGFuIG9iamVjdCBpbnRvIGFuIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFycmF5KG86IE9iamVjdCkge1xyXG4gICAgY29uc3QgcmV0ID0gW107XHJcbiAgICBmb3IgKGxldCBuIGluIG8pIHtcclxuICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShuKSkge1xyXG4gICAgICAgICAgICByZXQucHVzaChvW25dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbiJdfQ==