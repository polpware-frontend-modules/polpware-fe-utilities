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
            const restArgs = [];
            /*jslint plusplus: true */
            for (let i = 2; i < arguments.length; i++) {
                restArgs.push(arguments[i]);
            }
            const ret = value.apply(thisArg || null, restArgs);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWRpYy1vcGVyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvZmUtdXRpbGl0aWVzL3NyYy9saWIvcHJvbWlzZS9tb25hZGljLW9wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRztBQUNILDhDQUE4QztBQUM5QywyQ0FBMkM7QUFDM0MsR0FBRztBQUNILHdFQUF3RTtBQUN4RSxrRUFBa0U7QUFDbEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSxxRUFBcUU7QUFDckUsd0VBQXdFO0FBQ3hFLDRCQUE0QjtBQUM1QixHQUFHO0FBQ0gsaUVBQWlFO0FBQ2pFLGtFQUFrRTtBQUNsRSxHQUFHO0FBQ0gsa0VBQWtFO0FBQ2xFLHFFQUFxRTtBQUNyRSx3REFBd0Q7QUFDeEQseUVBQXlFO0FBQ3pFLHlFQUF5RTtBQUN6RSx3RUFBd0U7QUFDeEUsa0VBQWtFO0FBQ2xFLEdBQUc7QUFDSCx5RUFBeUU7QUFDekUsdUVBQXVFO0FBQ3ZFLHFFQUFxRTtBQUNyRSxpQkFBaUI7QUFHakIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sS0FBSyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBSSxLQUFRLEVBQUUsT0FBZTtJQUM3Qyx5QkFBeUI7SUFDekIsT0FBTyxJQUFJLFlBQVksQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1FBQzVDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNwQiwwQkFBMEI7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FB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T0FBTyxJQUFJLFlBQVksQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1FBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFxyXG4vLyBBdXRob3I6OiBUb20gVGFuZyA8cHJpbmNpcGxld2FyZUBnbWFpbC5jb20+XHJcbi8vIENvcHlyaWdodDo6IENvcHlyaWdodCAoYykgMjAxNywgVG9tIFRhbmdcclxuLy8gXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xyXG4vLyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXHJcbi8vIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xyXG4vLyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vIFxyXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxyXG4vLyBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuLy8gXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbi8vIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG4vLyBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXHJcbi8vIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cclxuLy8gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXHJcbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4vLyBcclxuLy8gRXhjZXB0IGFzIGNvbnRhaW5lZCBpbiB0aGlzIG5vdGljZSwgdGhlIG5hbWUocykgb2YgdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyBob2xkZXJzIHNoYWxsIG5vdCBiZSB1c2VkIGluIGFkdmVydGlzaW5nIG9yIG90aGVyd2lzZSB0byBwcm9tb3RlIHRoZVxyXG4vLyBzYWxlLCB1c2Ugb3Igb3RoZXIgZGVhbGluZ3MgaW4gdGhpcyBTb2Z0d2FyZSB3aXRob3V0IHByaW9yIHdyaXR0ZW5cclxuLy8gYXV0aG9yaXphdGlvbi5cclxuXHJcblxyXG5pbXBvcnQgeyBEdW1teVByb21pc2UgfSBmcm9tICcuL3Byb21pc2UtbGlrZSc7XHJcbmltcG9ydCAqIGFzIHR5cGVDaGVja2VyIGZyb20gJy4uL3R5cGluZy90eXBlLWNoZWNrZXInO1xyXG5cclxuLyoqXHJcbiAqIExpZnRzIGEgc2luZ2xlIHZhbHVlIG9yIGEgZnVuY3Rpb24gaW50byBhIFByb21pc2UtbGlrZSBvYmplY3QuXHJcbiAqIFByb3ZpZGVzIGEgbWV0aG9kIG9mIHdyYXBwaW5nIGEgc2luZ2xlIHZhbHVlIG9yIGEgZnVuY3Rpb24gIGludG8gYSBQcm9taXNlLFxyXG4gKiBpbiBvcmRlciB0aGF0IHRoZSBmb2xsb3dpbmcgb3BlcmF0aW9uIFxyXG4gKiBtYXkgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgUHJvbWlzZSBvcGVyYXRpb24uXHJcbiAqIEluIHNvbWUgc2NlbmFyaW8sIHdlIG1heSBmaXJzdCBhdHRlbXB0IHRvIGdldCBhIHZhbHVlIGZyb20gY2FjaGUuXHJcbiAqIE1vdGl2YXRpb24uXHJcbiAqIEluIHRoaXMgY2FzZSwgd2UgbmVlZCB0byByZXR1cm4gYSB2YWx1ZS4gSG93ZXZlciwgaWYgdGhlIHZhbHVlIGlzXHJcbiAqIG5vdCBhdmFpbGFibGUgaW4gdGhlIGNhY2hlLCB3ZSBtYXkgaGF2ZSB0byBnbyBhaGVhZCB0byBsb2FkIGl0XHJcbiAqIGFzeW5jaHJvbm91c2x5LiBMb2FkaW5nIGEgdmFsdWUgYXN5bmNocm9ub3VzbHkgdXN1YWxseSByZXR1cm5zXHJcbiAqIGEgUHJvbWlzZS4gVG8gdW50aWZ5IHRoZSByZXR1cm4gZnJvbSB0d28gY2FzZXMsIHdlXHJcbiAqIGVzY2FsYXRlIGEgc2luZ2xlIHZhbHVlIGludG8gYSBQcm9taXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnQ8VD4odmFsdWU6IFQsIHRoaXNBcmc6IE9iamVjdCk6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIC8qanNsaW50IHVucGFyYW06IHRydWUgKi9cclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGlmICh0eXBlQ2hlY2tlci5pc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN0QXJncyA9IFtdO1xyXG4gICAgICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVzdEFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHZhbHVlLmFwcGx5KHRoaXNBcmcgfHwgbnVsbCwgcmVzdEFyZ3MpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHJldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaWZ0cyBhIHZhbHVlIGludG8gYW4gcmVqZWN0ZWQgc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlmdEludG9SZWplY3Q8VD4odmFsdWU6IFQpOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXHJcbiAgICAgICAgcmVqZWN0KHZhbHVlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBnaXZlbiBwcm9taXNlIGludG8gYW5vdGhlciBwcm9taXNlIHdoaWNoIGVuc3VyZXMgdGhhdFxyXG4gKiB0aGUgZ2l2ZW4gZ3VhcmQgZXZhbHV0ZXMgdG8gYmUgdHJ1ZSBmcm9tIHRoZSBzdGF0ZSBvZiB0aGUgZ2l2ZW4gcHJvbWlzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWZ0V2l0aEd1YXJkPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+LCBndWFyZDogKHg6IFQpID0+IGJvb2xlYW4pOiBQcm9taXNlTGlrZTxUPiB7XHJcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGd1YXJkKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHRsZXMgYSBwcm9taXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRsZTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPik6IFByb21pc2VMaWtlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogJ2Z1bGZpbGxlZCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogJ3JlamVjdGVkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHByb21pc2UgaW50byBhIHByb21pc2Ugd2hpY2ggZG9lcyBub3QgcmVqZWN0IGFueXRoaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpZnRUb1ByZWRpY2F0ZTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPiwgZ3VhcmQ6ICh4OiBUKSA9PiBib29sZWFuKTogUHJvbWlzZUxpa2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xyXG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZ3VhcmQoZGF0YSkpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGlwZWxpbmVTZXR0aW5nczxVPiB7XHJcbiAgICB2YWxpZGF0b3I/OiAoeCkgPT4gYm9vbGVhbixcclxuICAgIGFkYXB0b3I6ICh4KSA9PiBVXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIGEgZ2l2ZW4gcHJvbWlzZSB3aXRoIGFkZGl0b25hbCBwaXBlbGluZSBwcm9jZXNzaW5nLlxyXG4gKiBTcGVjaWZpY2FsbHksIGluIHRoaXMgbWV0aG9kLCBjb21wYXJlZCB0byB0aGUgZ2l2ZW4gcHJvbWlzZSwgdGhlIHJldHVyblxyXG4gKiBwcm9taXNlIGNvbnRhaW5zIHZhbGlkYXRpbmcgYW5kIGFkcGF0aW5nIHN0YWdlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkZXJQaXBlbGluZTxULCBVPihyZWFkZXJQcm9taXNlOiBQcm9taXNlTGlrZTxUPiwgc2V0dGluZ3M6IElQaXBlbGluZVNldHRpbmdzPFU+KSB7XHJcbiAgICByZXR1cm4gcmVhZGVyUHJvbWlzZVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5ncy52YWxpZGF0b3IoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgaXMgbm90IHZhbGlkOiAnICsgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5hZGFwdG9yKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhIGdpdmVuIHByb21pc2UgaW50byBvbmUgcHJvbWlzZSB3aXRoIG91ciBvd24gaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+KTogUHJvbWlzZUxpa2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG4iXX0=