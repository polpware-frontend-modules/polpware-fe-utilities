/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileOverview
 * Provides utilities for making interoperable the promise-like objects
 * from different modules.
 */
/**
 * Extends a given promise into a deferred object of jQuery.
 * With this extension, we are able to chain together jQuery deferred
 * objects (which are also promise objects.)
 * @param {?} promise
 * @return {?}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXItb3AuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvZmUtdXRpbGl0aWVzLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zcmMvcHJvbWlzZS9pbnRlci1vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE9BQU87SUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDakIsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFTLFdBQVc7WUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7S0FDTDtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2YsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFTLFdBQVc7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztLQUNMO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDZixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVMsVUFBVTtZQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztLQUNMO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFDbkIsT0FBTyxDQUFDLFFBQVEsR0FBRztZQUNmLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztLQUNMO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDbEIsT0FBTyxDQUFDLE9BQU8sR0FBRztZQUNkLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztLQUNMO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUHJvdmlkZXMgdXRpbGl0aWVzIGZvciBtYWtpbmcgaW50ZXJvcGVyYWJsZSB0aGUgcHJvbWlzZS1saWtlIG9iamVjdHNcbiAqIGZyb20gZGlmZmVyZW50IG1vZHVsZXMuXG4gKi9cbi8qKlxuICogRXh0ZW5kcyBhIGdpdmVuIHByb21pc2UgaW50byBhIGRlZmVycmVkIG9iamVjdCBvZiBqUXVlcnkuXG4gKiBXaXRoIHRoaXMgZXh0ZW5zaW9uLCB3ZSBhcmUgYWJsZSB0byBjaGFpbiB0b2dldGhlciBqUXVlcnkgZGVmZXJyZWRcbiAqIG9iamVjdHMgKHdoaWNoIGFyZSBhbHNvIHByb21pc2Ugb2JqZWN0cy4pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2pRdWVyeURlZmVycmVkKHByb21pc2UpIHtcbiAgICBpZiAoIXByb21pc2UuYWx3YXlzKSB7XG4gICAgICAgIHByb21pc2UuYWx3YXlzID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQsIG9uRnVsZmlsbGVkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlLmRvbmUpIHtcbiAgICAgICAgcHJvbWlzZS5kb25lID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UuZmFpbCkge1xuICAgICAgICBwcm9taXNlLmZhaWwgPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UucHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvbWlzZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghcHJvbWlzZS5wcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UucHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuIl19