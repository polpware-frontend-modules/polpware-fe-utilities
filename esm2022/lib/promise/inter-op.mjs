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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXItb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9mZS11dGlsaXRpZXMvc3JjL2xpYi9wcm9taXNlL2ludGVyLW9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFDSDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE9BQU87SUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVMsV0FBVztZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBUyxXQUFXO1lBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVMsVUFBVTtZQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxRQUFRLEdBQUc7WUFDZixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxHQUFHO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFByb3ZpZGVzIHV0aWxpdGllcyBmb3IgbWFraW5nIGludGVyb3BlcmFibGUgdGhlIHByb21pc2UtbGlrZSBvYmplY3RzXG4gKiBmcm9tIGRpZmZlcmVudCBtb2R1bGVzLlxuICovXG4vKipcbiAqIEV4dGVuZHMgYSBnaXZlbiBwcm9taXNlIGludG8gYSBkZWZlcnJlZCBvYmplY3Qgb2YgalF1ZXJ5LlxuICogV2l0aCB0aGlzIGV4dGVuc2lvbiwgd2UgYXJlIGFibGUgdG8gY2hhaW4gdG9nZXRoZXIgalF1ZXJ5IGRlZmVycmVkXG4gKiBvYmplY3RzICh3aGljaCBhcmUgYWxzbyBwcm9taXNlIG9iamVjdHMuKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9qUXVlcnlEZWZlcnJlZChwcm9taXNlKSB7XG4gICAgaWYgKCFwcm9taXNlLmFsd2F5cykge1xuICAgICAgICBwcm9taXNlLmFsd2F5cyA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkLCBvbkZ1bGZpbGxlZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5kb25lKSB7XG4gICAgICAgIHByb21pc2UuZG9uZSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLmZhaWwpIHtcbiAgICAgICAgcHJvbWlzZS5mYWlsID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLnByb2dyZXNzKSB7XG4gICAgICAgIHByb21pc2UucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UucHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbiJdfQ==