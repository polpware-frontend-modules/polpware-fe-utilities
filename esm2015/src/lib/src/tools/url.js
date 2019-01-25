/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Encodes a key-value pair, where a value can be an array.
 * @param {?} key
 * @param {?} value
 * @param {?} str
 * @return {?}
 */
export function urlEncodePair(key, value, str) {
    if (value instanceof Array) {
        value.forEach((item) => {
            str.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(item));
        });
    }
    else {
        str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
}
/**
 * Encodes an object in www form.
 * @param {?} data
 * @return {?}
 */
export function urlEncode(data) {
    /** @type {?} */
    const str = [];
    for (let p in data) {
        if (data.hasOwnProperty(p)) {
            urlEncodePair(p, data[p], str);
        }
    }
    return str.join('&').replace(/%20/g, '+');
}
/**
 * @param {?} name
 * @param {?} url
 * @return {?}
 */
export function getParamByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    /** @type {?} */
    const regex = new RegExp('[?#&]' + name + '(=([^&#]*)|&|#|$)');
    /** @type {?} */
    const results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
/**
 * @param {?} name
 * @param {?=} url
 * @return {?}
 */
export function getQueryParamByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    return getParamByName(name, url);
}
/**
 * @param {?} name
 * @param {?=} url
 * @return {?}
 */
export function getHashParamByName(name, url) {
    if (!url) {
        url = window.location.hash;
    }
    return getParamByName(name, url);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3Rvb2xzL3VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxhQUFhLENBQUMsR0FBVyxFQUFFLEtBQVUsRUFBRSxHQUFrQjtJQUNyRSxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7UUFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7S0FDTjtTQUFNO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN2RTtBQUNMLENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxTQUFTLENBQUMsSUFBWTs7VUFDNUIsR0FBRyxHQUFrQixFQUFFO0lBQzdCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4QixhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsQztLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFZLEVBQUUsR0FBVztJQUNwRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7O1VBQ2pDLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLG1CQUFtQixDQUFDOztVQUN4RCxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2IsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELE9BQU8sa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBWSxFQUFFLEdBQVk7SUFDMUQsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNOLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUM5QjtJQUNELE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNyQyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBWSxFQUFFLEdBQVk7SUFDekQsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNOLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUM5QjtJQUNELE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEVuY29kZXMgYSBrZXktdmFsdWUgcGFpciwgd2hlcmUgYSB2YWx1ZSBjYW4gYmUgYW4gYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXJsRW5jb2RlUGFpcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc3RyOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnW109JyArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmNvZGVzIGFuIG9iamVjdCBpbiB3d3cgZm9ybS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmxFbmNvZGUoZGF0YTogT2JqZWN0KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHN0cjogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgZm9yIChsZXQgcCBpbiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgdXJsRW5jb2RlUGFpcihwLCBkYXRhW3BdLCBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1CeU5hbWUobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyMmXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbUJ5TmFtZShuYW1lOiBzdHJpbmcsIHVybD86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRQYXJhbUJ5TmFtZShuYW1lLCB1cmwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaFBhcmFtQnlOYW1lKG5hbWU6IHN0cmluZywgdXJsPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldFBhcmFtQnlOYW1lKG5hbWUsIHVybCk7XHJcbn1cclxuIl19