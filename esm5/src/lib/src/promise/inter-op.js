/**
 * @fileOverview
 * Provides utilities for making interoperable the promise-like objects
 * from different modules.
 */
/**
 * Extends a given promise into a deferred object of jQuery.
 * With this extension, we are able to chain together jQuery deferred
 * objects (which are also promise objects.)
 */
export function tojQueryDeferred(promise) {
    if (!promise.always) {
        promise.always = function (onFulfilled) {
            return this.then(onFulfilled, onFulfilled);
        };
    }
    if (!promise.done) {
        promise.done = function (onFulfilled) {
            return this.then(onFulfilled);
        };
    }
    if (!promise.fail) {
        promise.fail = function (onRejected) {
            return this.then(null, onRejected);
        };
    }
    if (!promise.progress) {
        promise.progress = function () {
            return this;
        };
    }
    if (!promise.promise) {
        promise.promise = function () {
            return this;
        };
    }
    return promise;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXItb3AuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvcHJvbWlzZS9pbnRlci1vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxPQUFPO0lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBUyxXQUFXO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO0tBQ0w7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtRQUNmLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBUyxXQUFXO1lBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUM7S0FDTDtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2YsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFTLFVBQVU7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7S0FDTDtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxRQUFRLEdBQUc7WUFDZixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7S0FDTDtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxPQUFPLEdBQUc7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7S0FDTDtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFByb3ZpZGVzIHV0aWxpdGllcyBmb3IgbWFraW5nIGludGVyb3BlcmFibGUgdGhlIHByb21pc2UtbGlrZSBvYmplY3RzXG4gKiBmcm9tIGRpZmZlcmVudCBtb2R1bGVzLlxuICovXG4vKipcbiAqIEV4dGVuZHMgYSBnaXZlbiBwcm9taXNlIGludG8gYSBkZWZlcnJlZCBvYmplY3Qgb2YgalF1ZXJ5LlxuICogV2l0aCB0aGlzIGV4dGVuc2lvbiwgd2UgYXJlIGFibGUgdG8gY2hhaW4gdG9nZXRoZXIgalF1ZXJ5IGRlZmVycmVkXG4gKiBvYmplY3RzICh3aGljaCBhcmUgYWxzbyBwcm9taXNlIG9iamVjdHMuKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9qUXVlcnlEZWZlcnJlZChwcm9taXNlKSB7XG4gICAgaWYgKCFwcm9taXNlLmFsd2F5cykge1xuICAgICAgICBwcm9taXNlLmFsd2F5cyA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkLCBvbkZ1bGZpbGxlZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5kb25lKSB7XG4gICAgICAgIHByb21pc2UuZG9uZSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLmZhaWwpIHtcbiAgICAgICAgcHJvbWlzZS5mYWlsID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLnByb2dyZXNzKSB7XG4gICAgICAgIHByb21pc2UucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UucHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbiJdfQ==