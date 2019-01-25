/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// firstSet - secondSet (any element not in secondSet)
/**
 * @template T, U
 * @param {?} firstSet
 * @param {?} secondSet
 * @param {?} predicate
 * @return {?}
 */
export function diff(firstSet, secondSet, predicate) {
    return firstSet.filter((x) => {
        return !secondSet.some((y) => {
            return predicate(x, y);
        });
    });
}
// firstSet intersection secondSet
/**
 * @template T, U
 * @param {?} firstSet
 * @param {?} secondSet
 * @param {?} predicate
 * @return {?}
 */
export function intersection(firstSet, secondSet, predicate) {
    return firstSet.filter((x) => {
        return secondSet.some((y) => {
            return predicate(x, y);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3Rvb2xzL3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsSUFBSSxDQUFPLFFBQWtCLEVBQ3pDLFNBQW1CLEVBQ25CLFNBQW1EO0lBQ25ELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUksRUFBRSxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDOzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsWUFBWSxDQUFPLFFBQWtCLEVBQ2pELFNBQW1CLEVBQ25CLFNBQW1EO0lBQ25ELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUksRUFBRSxFQUFFO1FBQzVCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUksRUFBRSxFQUFFO1lBQzNCLE9BQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpcnN0U2V0IC0gc2Vjb25kU2V0IChhbnkgZWxlbWVudCBub3QgaW4gc2Vjb25kU2V0KVxyXG5leHBvcnQgZnVuY3Rpb24gZGlmZjxULCBVPihmaXJzdFNldDogQXJyYXk8VD4sXHJcbiAgICBzZWNvbmRTZXQ6IEFycmF5PFU+LFxyXG4gICAgcHJlZGljYXRlOiAoZmlyc3RFbGVtOiBULCBzZWNvbmRFbGVtOiBVKSA9PiBib29sZWFuKTogQXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIGZpcnN0U2V0LmZpbHRlcigoeDogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhc2Vjb25kU2V0LnNvbWUoKHk6IFUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZWRpY2F0ZSh4LCB5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBmaXJzdFNldCBpbnRlcnNlY3Rpb24gc2Vjb25kU2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Rpb248VCwgVT4oZmlyc3RTZXQ6IEFycmF5PFQ+LFxyXG4gICAgc2Vjb25kU2V0OiBBcnJheTxVPixcclxuICAgIHByZWRpY2F0ZTogKGZpcnN0RWxlbTogVCwgc2Vjb25kRWxlbTogVSkgPT4gYm9vbGVhbik6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiBmaXJzdFNldC5maWx0ZXIoKHg6IFQpID0+IHtcclxuICAgICAgICByZXR1cm4gc2Vjb25kU2V0LnNvbWUoKHk6IFUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZWRpY2F0ZSh4LCB5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiJdfQ==