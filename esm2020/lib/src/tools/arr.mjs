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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zcmMvdG9vbHMvYXJyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBSSxPQUFpQixFQUFFLEdBQWlCO0lBQzdELElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE9BQU87S0FDVjtJQUVELEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFDLENBQVM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFB1c2hzIGFuIGFycmF5IG9yIGEgc2luZ2xlIHZhbHVlIGludG8gdGhlIHRoaXNBcmc7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHVzaEFycmF5PFQ+KHRoaXNBcmc6IEFycmF5PFQ+LCBzcmM6IEFycmF5PFQ+IHwgVCk6IHZvaWQge1xyXG4gICAgaWYgKCEoc3JjIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgdGhpc0FyZy5wdXNoKHNyYyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNyYy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICB0aGlzQXJnLnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFR1cm5zIHRoZSB2YWx1ZXMgaW4gYW4gb2JqZWN0IGludG8gYW4gYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXJyYXkobzogT2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGZvciAobGV0IG4gaW4gbykge1xyXG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KG4pKSB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKG9bbl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuIl19