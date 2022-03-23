// 
// Author:: Tom Tang <principleware@gmail.com>
// Copyright:: Copyright (c) 2017, Tom Tang
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// 
// Except as contained in this notice, the name(s) of the above copyright
// holders shall not be used in advertising or otherwise to promote the
// sale, use or other dealings in this Software without prior written
// authorization.
import { DummyPromise } from './promise-like';
import * as typeChecker from '../typing/type-checker';
/**
 * Lifts a single value or a function into a Promise-like object.
 * Provides a method of wrapping a single value or a function  into a Promise,
 * in order that the following operation
 * may conform to the standard Promise operation.
 * In some scenario, we may first attempt to get a value from cache.
 * Motivation.
 * In this case, we need to return a value. However, if the value is
 * not available in the cache, we may have to go ahead to load it
 * asynchronously. Loading a value asynchronously usually returns
 * a Promise. To untify the return from two cases, we
 * escalate a single value into a Promise.
 */
export function lift(value, thisArg) {
    /*jslint unparam: true */
    return new DummyPromise(function (resolve, reject) {
        if (typeChecker.isFunction(value)) {
            var restArgs = [];
            /*jslint plusplus: true */
            for (var i = 2; i < arguments.length; i++) {
                restArgs.push(arguments[i]);
            }
            var ret = value.apply(thisArg || null, restArgs);
            resolve(ret);
        }
        else {
            resolve(value);
        }
    });
}
/**
 * Lifts a value into an rejected state.
 */
export function liftIntoReject(value) {
    return new DummyPromise(function (resolve, reject) {
        /*jslint unparam: true */
        reject(value);
    });
}
/**
 * Converts a given promise into another promise which ensures that
 * the given guard evalutes to be true from the state of the given promise.
 */
export function liftWithGuard(promise, guard) {
    return promise.then(function (data) {
        return new DummyPromise(function (resolve, reject) {
            if (guard(data)) {
                resolve(data);
            }
            else {
                reject(data);
            }
        });
    });
}
/**
 * Settles a promise.
 */
export function settle(promise) {
    return new DummyPromise(function (resolve) {
        promise.then(function (value) {
            resolve({
                state: 'fulfilled',
                data: value
            });
        }, function () {
            resolve({
                state: 'rejected'
            });
        });
    });
}
/**
 * Converts the given promise into a promise which does not reject anything.
 */
export function liftToPredicate(promise, guard) {
    return new DummyPromise(function (resolve, reject) {
        /*jslint unparam: true */
        promise.then(function (data) {
            resolve(guard(data));
        }, function () {
            resolve(false);
        });
    });
}
/**
 * Transforms a given promise with additonal pipeline processing.
 * Specifically, in this method, compared to the given promise, the return
 * promise contains validating and adpating stages.
 */
export function readerPipeline(readerPromise, settings) {
    return readerPromise
        .then(function (data) {
        if (settings.validator) {
            if (!settings.validator(data)) {
                throw new Error('Data is not valid: ' + data);
            }
        }
        return data;
    })
        .then(function (data) {
        return settings.adaptor(data);
    });
}
/**
 * Transforms a given promise into one promise with our own implementation.
 */
export function transform(promise) {
    return new DummyPromise(function (resolve, reject) {
        promise.then(resolve, reject);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWRpYy1vcGVyYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbImxpYi9zcmMvcHJvbWlzZS9tb25hZGljLW9wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRztBQUNILDhDQUE4QztBQUM5QywyQ0FBMkM7QUFDM0MsR0FBRztBQUNILHdFQUF3RTtBQUN4RSxrRUFBa0U7QUFDbEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSxxRUFBcUU7QUFDckUsd0VBQXdFO0FBQ3hFLDRCQUE0QjtBQUM1QixHQUFHO0FBQ0gsaUVBQWlFO0FBQ2pFLGtFQUFrRTtBQUNsRSxHQUFHO0FBQ0gsa0VBQWtFO0FBQ2xFLHFFQUFxRTtBQUNyRSx3REFBd0Q7QUFDeEQseUVBQXlFO0FBQ3pFLHlFQUF5RTtBQUN6RSx3RUFBd0U7QUFDeEUsa0VBQWtFO0FBQ2xFLEdBQUc7QUFDSCx5RUFBeUU7QUFDekUsdUVBQXVFO0FBQ3ZFLHFFQUFxRTtBQUNyRSxpQkFBaUI7QUFHakIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sS0FBSyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBSSxLQUFRLEVBQUUsT0FBZTtJQUM3Qyx5QkFBeUI7SUFDekIsT0FBTyxJQUFJLFlBQVksQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1FBQzVDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsMEJBQTBCO1lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLFNB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SUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXHJcbi8vIEF1dGhvcjo6IFRvbSBUYW5nIDxwcmluY2lwbGV3YXJlQGdtYWlsLmNvbT5cclxuLy8gQ29weXJpZ2h0OjogQ29weXJpZ2h0IChjKSAyMDE3LCBUb20gVGFuZ1xyXG4vLyBcclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXHJcbi8vIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cclxuLy8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXHJcbi8vIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy8gXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXHJcbi8vIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vLyBcclxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcclxuLy8gRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXHJcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcbi8vIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcclxuLy8gTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxyXG4vLyBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cclxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbi8vIFxyXG4vLyBFeGNlcHQgYXMgY29udGFpbmVkIGluIHRoaXMgbm90aWNlLCB0aGUgbmFtZShzKSBvZiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vIGhvbGRlcnMgc2hhbGwgbm90IGJlIHVzZWQgaW4gYWR2ZXJ0aXNpbmcgb3Igb3RoZXJ3aXNlIHRvIHByb21vdGUgdGhlXHJcbi8vIHNhbGUsIHVzZSBvciBvdGhlciBkZWFsaW5ncyBpbiB0aGlzIFNvZnR3YXJlIHdpdGhvdXQgcHJpb3Igd3JpdHRlblxyXG4vLyBhdXRob3JpemF0aW9uLlxyXG5cclxuXHJcbmltcG9ydCB7IER1bW15UHJvbWlzZSB9IGZyb20gJy4vcHJvbWlzZS1saWtlJztcclxuaW1wb3J0ICogYXMgdHlwZUNoZWNrZXIgZnJvbSAnLi4vdHlwaW5nL3R5cGUtY2hlY2tlcic7XHJcblxyXG4vKipcclxuICogTGlmdHMgYSBzaW5nbGUgdmFsdWUgb3IgYSBmdW5jdGlvbiBpbnRvIGEgUHJvbWlzZS1saWtlIG9iamVjdC5cclxuICogUHJvdmlkZXMgYSBtZXRob2Qgb2Ygd3JhcHBpbmcgYSBzaW5nbGUgdmFsdWUgb3IgYSBmdW5jdGlvbiAgaW50byBhIFByb21pc2UsXHJcbiAqIGluIG9yZGVyIHRoYXQgdGhlIGZvbGxvd2luZyBvcGVyYXRpb24gXHJcbiAqIG1heSBjb25mb3JtIHRvIHRoZSBzdGFuZGFyZCBQcm9taXNlIG9wZXJhdGlvbi5cclxuICogSW4gc29tZSBzY2VuYXJpbywgd2UgbWF5IGZpcnN0IGF0dGVtcHQgdG8gZ2V0IGEgdmFsdWUgZnJvbSBjYWNoZS5cclxuICogTW90aXZhdGlvbi5cclxuICogSW4gdGhpcyBjYXNlLCB3ZSBuZWVkIHRvIHJldHVybiBhIHZhbHVlLiBIb3dldmVyLCBpZiB0aGUgdmFsdWUgaXNcclxuICogbm90IGF2YWlsYWJsZSBpbiB0aGUgY2FjaGUsIHdlIG1heSBoYXZlIHRvIGdvIGFoZWFkIHRvIGxvYWQgaXRcclxuICogYXN5bmNocm9ub3VzbHkuIExvYWRpbmcgYSB2YWx1ZSBhc3luY2hyb25vdXNseSB1c3VhbGx5IHJldHVybnNcclxuICogYSBQcm9taXNlLiBUbyB1bnRpZnkgdGhlIHJldHVybiBmcm9tIHR3byBjYXNlcywgd2VcclxuICogZXNjYWxhdGUgYSBzaW5nbGUgdmFsdWUgaW50byBhIFByb21pc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdDxUPih2YWx1ZTogVCwgdGhpc0FyZzogT2JqZWN0KTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgaWYgKHR5cGVDaGVja2VyLmlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3RBcmdzID0gW107XHJcbiAgICAgICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0QXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gdmFsdWUuYXBwbHkodGhpc0FyZyB8fCBudWxsLCByZXN0QXJncyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpZnRzIGEgdmFsdWUgaW50byBhbiByZWplY3RlZCBzdGF0ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0SW50b1JlamVjdDxUPih2YWx1ZTogVCk6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgICAgICByZWplY3QodmFsdWUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGdpdmVuIHByb21pc2UgaW50byBhbm90aGVyIHByb21pc2Ugd2hpY2ggZW5zdXJlcyB0aGF0XHJcbiAqIHRoZSBnaXZlbiBndWFyZCBldmFsdXRlcyB0byBiZSB0cnVlIGZyb20gdGhlIHN0YXRlIG9mIHRoZSBnaXZlbiBwcm9taXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnRXaXRoR3VhcmQ8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4sIGd1YXJkOiAoeDogVCkgPT4gYm9vbGVhbik6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZ3VhcmQoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0dGxlcyBhIHByb21pc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGxlPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+KTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAnZnVsZmlsbGVkJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAncmVqZWN0ZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gcHJvbWlzZSBpbnRvIGEgcHJvbWlzZSB3aGljaCBkb2VzIG5vdCByZWplY3QgYW55dGhpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdFRvUHJlZGljYXRlPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+LCBndWFyZDogKHg6IFQpID0+IGJvb2xlYW4pOiBQcm9taXNlTGlrZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShndWFyZChkYXRhKSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQaXBlbGluZVNldHRpbmdzPFU+IHtcclxuICAgIHZhbGlkYXRvcj86ICh4KSA9PiBib29sZWFuLFxyXG4gICAgYWRhcHRvcjogKHgpID0+IFVcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYSBnaXZlbiBwcm9taXNlIHdpdGggYWRkaXRvbmFsIHBpcGVsaW5lIHByb2Nlc3NpbmcuXHJcbiAqIFNwZWNpZmljYWxseSwgaW4gdGhpcyBtZXRob2QsIGNvbXBhcmVkIHRvIHRoZSBnaXZlbiBwcm9taXNlLCB0aGUgcmV0dXJuXHJcbiAqIHByb21pc2UgY29udGFpbnMgdmFsaWRhdGluZyBhbmQgYWRwYXRpbmcgc3RhZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRlclBpcGVsaW5lPFQsIFU+KHJlYWRlclByb21pc2U6IFByb21pc2VMaWtlPFQ+LCBzZXR0aW5nczogSVBpcGVsaW5lU2V0dGluZ3M8VT4pIHtcclxuICAgIHJldHVybiByZWFkZXJQcm9taXNlXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzLnZhbGlkYXRvcihkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBpcyBub3QgdmFsaWQ6ICcgKyBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLmFkYXB0b3IoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIGEgZ2l2ZW4gcHJvbWlzZSBpbnRvIG9uZSBwcm9taXNlIHdpdGggb3VyIG93biBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm08VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4pOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcbiJdfQ==