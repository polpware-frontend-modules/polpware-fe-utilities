// firstSet - secondSet (any element not in secondSet)
export function diff(firstSet, secondSet, predicate) {
    return firstSet.filter(function (x) {
        return !secondSet.some(function (y) {
            return predicate(x, y);
        });
    });
}
// firstSet intersection secondSet
export function intersection(firstSet, secondSet, predicate) {
    return firstSet.filter(function (x) {
        return secondSet.some(function (y) {
            return predicate(x, y);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3Rvb2xzL3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzREFBc0Q7QUFDdEQsTUFBTSxVQUFVLElBQUksQ0FBTyxRQUFrQixFQUN6QyxTQUFtQixFQUNuQixTQUFtRDtJQUNuRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFJO1FBQ3hCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBSTtZQUN4QixPQUFPLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxrQ0FBa0M7QUFDbEMsTUFBTSxVQUFVLFlBQVksQ0FBTyxRQUFrQixFQUNqRCxTQUFtQixFQUNuQixTQUFtRDtJQUNuRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFJO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUk7WUFDdkIsT0FBTyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlyc3RTZXQgLSBzZWNvbmRTZXQgKGFueSBlbGVtZW50IG5vdCBpbiBzZWNvbmRTZXQpXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmPFQsIFU+KGZpcnN0U2V0OiBBcnJheTxUPixcclxuICAgIHNlY29uZFNldDogQXJyYXk8VT4sXHJcbiAgICBwcmVkaWNhdGU6IChmaXJzdEVsZW06IFQsIHNlY29uZEVsZW06IFUpID0+IGJvb2xlYW4pOiBBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gZmlyc3RTZXQuZmlsdGVyKCh4OiBUKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICFzZWNvbmRTZXQuc29tZSgoeTogVSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlZGljYXRlKHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGZpcnN0U2V0IGludGVyc2VjdGlvbiBzZWNvbmRTZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbjxULCBVPihmaXJzdFNldDogQXJyYXk8VD4sXHJcbiAgICBzZWNvbmRTZXQ6IEFycmF5PFU+LFxyXG4gICAgcHJlZGljYXRlOiAoZmlyc3RFbGVtOiBULCBzZWNvbmRFbGVtOiBVKSA9PiBib29sZWFuKTogQXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIGZpcnN0U2V0LmZpbHRlcigoeDogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzZWNvbmRTZXQuc29tZSgoeTogVSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlZGljYXRlKHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIl19