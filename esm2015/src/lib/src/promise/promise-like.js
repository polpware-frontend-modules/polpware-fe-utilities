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
function asap(fn) {
    setTimeout(fn, 1);
}
function bind(fn, thisArg) {
    return function () {
        fn.apply(thisArg, arguments);
    };
}
const ɵ0 = function (value) { return Object.prototype.toString.call(value) === "[object Array]"; };
var isArray = Array.isArray || ɵ0;
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, onFulfilled, onRejected) {
    var done = false;
    try {
        fn(function (value) {
            if (done) {
                return;
            }
            done = true;
            onFulfilled(value);
        }, function (reason) {
            if (done) {
                return;
            }
            done = true;
            onRejected(reason);
        });
    }
    catch (ex) {
        if (done) {
            return;
        }
        done = true;
        onRejected(ex);
    }
}
function handle(deferred) {
    var me = this;
    if (this._state === null) {
        this._deferreds.push(deferred);
        return;
    }
    asap(function () {
        var cb, ret;
        cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
            (me._state ? deferred.resolve : deferred.reject)(me._value);
            return;
        }
        try {
            ret = cb(me._value);
        }
        catch (e) {
            deferred.reject(e);
            return;
        }
        deferred.resolve(ret);
    });
}
function finale() {
    var i, len;
    /*jslint plusplus:true */
    for (i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
    }
    this._deferreds = null;
}
function reject(newValue) {
    this._state = false;
    this._value = newValue;
    finale.call(this);
}
function resolve(newValue) {
    try { //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === this) {
            throw new TypeError('A promise cannot be resolved with itself.');
        }
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
            var then = newValue.then;
            if (typeof then === 'function') {
                doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                return;
            }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
    }
    catch (e) {
        reject.call(this, e);
    }
}
/**
 * Defines a dummy promise, which simulates the behavior of a normal Promise
 * but is suitable used in synchronous call.
 * This resulted object is also a jQuery deferred object, therefore,
 * it will be resolved by the jQuery deferred object if it is a resolved value in
 * the jQuery deferred object.
 */
export function DummyPromise(fn) {
    if (typeof this !== 'object') {
        throw new TypeError('Promises must be constructed via new');
    }
    if (typeof fn !== 'function') {
        throw new TypeError('not a function');
    }
    this._state = null;
    this._value = null;
    this._deferreds = [];
    doResolve(fn, bind(resolve, this), bind(reject, this));
}
function Handler(onFulfilled, onRejected, resolve, reject) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
}
DummyPromise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
};
DummyPromise.prototype.then = function (onFulfilled, onRejected) {
    const me = this;
    return new DummyPromise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
    });
};
DummyPromise.prototype.all = function (arrayArg) {
    var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arrayArg) ? arrayArg : arguments);
    return new DummyPromise(function (resolve, reject) {
        if (args.length === 0) {
            return resolve([]);
        }
        var remaining = args.length, i;
        function res(i, val) {
            try {
                if (val && (typeof val === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, function (val) { res(i, val); }, reject);
                        return;
                    }
                }
                args[i] = val;
                /*jslint plusplus: true */
                if (--remaining === 0) {
                    resolve(args);
                }
            }
            catch (ex) {
                reject(ex);
            }
        }
        /*jslint plusplus: true */ for (i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    });
};
DummyPromise.prototype.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === DummyPromise) {
        return value;
    }
    return new DummyPromise(function (resolve) {
        resolve(value);
    });
};
DummyPromise.prototype.reject = function (value) {
    /*jslint unparam: true */
    return new DummyPromise(function (resolve, reject) {
        reject(value);
    });
};
DummyPromise.prototype.race = function (values) {
    return new DummyPromise(function (resolve, reject) {
        var i, len;
        /*jslint plusplus: true */
        for (i = 0, len = values.length; i < len; i++) {
            values[i].then(resolve, reject);
        }
    });
};
DummyPromise.prototype.always = function (onFulfilled) {
    return this.then(onFulfilled, onFulfilled);
};
DummyPromise.prototype.done = function (onFulfilled) {
    return this.then(onFulfilled);
};
DummyPromise.prototype.fail = function (onRejected) {
    return this.then(null, onRejected);
};
DummyPromise.prototype.promise = function () {
    return this;
};
DummyPromise.prototype.progress = function () {
    return this;
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS1saWtlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbInNyYy9saWIvc3JjL3Byb21pc2UvcHJvbWlzZS1saWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUc7QUFDSCw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCx3RUFBd0U7QUFDeEUsa0VBQWtFO0FBQ2xFLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEUscUVBQXFFO0FBQ3JFLHdFQUF3RTtBQUN4RSw0QkFBNEI7QUFDNUIsR0FBRztBQUNILGlFQUFpRTtBQUNqRSxrRUFBa0U7QUFDbEUsR0FBRztBQUNILGtFQUFrRTtBQUNsRSxxRUFBcUU7QUFDckUsd0RBQXdEO0FBQ3hELHlFQUF5RTtBQUN6RSx5RUFBeUU7QUFDekUsd0VBQXdFO0FBQ3hFLGtFQUFrRTtBQUNsRSxHQUFHO0FBQ0gseUVBQXlFO0FBQ3pFLHVFQUF1RTtBQUN2RSxxRUFBcUU7QUFDckUsaUJBQWlCO0FBRWpCLFNBQVMsSUFBSSxDQUFDLEVBQUU7SUFDWixVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTztJQUNyQixPQUFPO1FBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztXQUU4QixVQUFTLEtBQUssSUFBSSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFBckgsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sTUFBMEYsQ0FBQztBQUV0SDs7Ozs7R0FLRztBQUNILFNBQVMsU0FBUyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBVTtJ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RyxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN6QixDQUFDO0FBR0QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFTLFVBQVU7SUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLFdBQVcsRUFBRSxVQUFVO0lBQzFELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztJQUNoQixPQUFPLElBQUksWUFBWSxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVMsUUFBUTtJQUMxQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTFHLE9BQU8sSUFBSSxZQUFZLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtRQUM1QyxJQUFJLElBQUks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V0FBVyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0FBRUYsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBUyxVQUFVO0lBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRUYsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUc7SUFDN0IsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUc7SUFDOUIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG4vLyBBdXRob3I6OiBUb20gVGFuZyA8cHJpbmNpcGxld2FyZUBnbWFpbC5jb20+XG4vLyBDb3B5cmlnaHQ6OiBDb3B5cmlnaHQgKGMpIDIwMTcsIFRvbSBUYW5nXG4vLyBcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuLy8gYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xuLy8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG4vLyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vLyBcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4vLyBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vIFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbi8vIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbi8vIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbi8vIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbi8vIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLyBcbi8vIEV4Y2VwdCBhcyBjb250YWluZWQgaW4gdGhpcyBub3RpY2UsIHRoZSBuYW1lKHMpIG9mIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIGhvbGRlcnMgc2hhbGwgbm90IGJlIHVzZWQgaW4gYWR2ZXJ0aXNpbmcgb3Igb3RoZXJ3aXNlIHRvIHByb21vdGUgdGhlXG4vLyBzYWxlLCB1c2Ugb3Igb3RoZXIgZGVhbGluZ3MgaW4gdGhpcyBTb2Z0d2FyZSB3aXRob3V0IHByaW9yIHdyaXR0ZW5cbi8vIGF1dGhvcml6YXRpb24uXG5cbmZ1bmN0aW9uIGFzYXAoZm4pIHtcbiAgICBzZXRUaW1lb3V0KGZuLCAxKTtcbn1cblxuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBBcnJheV1cIjsgfTtcblxuLyoqXG4gKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuICovXG5mdW5jdGlvbiBkb1Jlc29sdmUoZm4sIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBmbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIG9uRnVsZmlsbGVkKHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgb25SZWplY3RlZChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICBvblJlamVjdGVkKGV4KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShkZWZlcnJlZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhc2FwKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2IsIHJldDtcbiAgICAgICAgY2IgPSBtZS5fc3RhdGUgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgICAgIGlmIChjYiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgKG1lLl9zdGF0ZSA/IGRlZmVycmVkLnJlc29sdmUgOiBkZWZlcnJlZC5yZWplY3QpKG1lLl92YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldCA9IGNiKG1lLl92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJldCk7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gZmluYWxlKCkge1xuICAgIHZhciBpLCBsZW47XG4gICAgLypqc2xpbnQgcGx1c3BsdXM6dHJ1ZSAqL1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBoYW5kbGUuY2FsbCh0aGlzLCB0aGlzLl9kZWZlcnJlZHNbaV0pO1xuICAgIH1cbiAgICB0aGlzLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiByZWplY3QobmV3VmFsdWUpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmluYWxlLmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUobmV3VmFsdWUpIHtcbiAgICB0cnkgeyAvL1Byb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgJiYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBiaW5kKHJlc29sdmUsIHRoaXMpLCBiaW5kKHJlamVjdCwgdGhpcykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGZpbmFsZS5jYWxsKHRoaXMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgcmVqZWN0LmNhbGwodGhpcywgZSk7IH1cbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgZHVtbXkgcHJvbWlzZSwgd2hpY2ggc2ltdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBhIG5vcm1hbCBQcm9taXNlXG4gKiBidXQgaXMgc3VpdGFibGUgdXNlZCBpbiBzeW5jaHJvbm91cyBjYWxsLlxuICogVGhpcyByZXN1bHRlZCBvYmplY3QgaXMgYWxzbyBhIGpRdWVyeSBkZWZlcnJlZCBvYmplY3QsIHRoZXJlZm9yZSxcbiAqIGl0IHdpbGwgYmUgcmVzb2x2ZWQgYnkgdGhlIGpRdWVyeSBkZWZlcnJlZCBvYmplY3QgaWYgaXQgaXMgYSByZXNvbHZlZCB2YWx1ZSBpblxuICogdGhlIGpRdWVyeSBkZWZlcnJlZCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEdW1teVByb21pc2U8VD4oZm46IChyZXNvbHZlOiAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsIHJlamVjdDogKHJlYXNvbj8pID0+IHZvaWQpID0+IHZvaWQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcbiAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cbiAgICBkb1Jlc29sdmUoZm4sIGJpbmQocmVzb2x2ZSwgdGhpcyksIGJpbmQocmVqZWN0LCB0aGlzKSk7XG59XG5cblxuZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG59XG5cblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGhhbmRsZS5jYWxsKG1lLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzb2x2ZSwgcmVqZWN0KSk7XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uKGFycmF5QXJnKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoYXJyYXlBcmcpID8gYXJyYXlBcmcgOiBhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aCwgaTtcbiAgICAgICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWwsIGZ1bmN0aW9uKHZhbCkgeyByZXMoaSwgdmFsKTsgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gdmFsO1xuXG4gICAgICAgICAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICAgICAgICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi8gICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBEdW1teVByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLypqc2xpbnQgdW5wYXJhbTogdHJ1ZSAqL1xuICAgIHJldHVybiBuZXcgRHVtbXlQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZWplY3QodmFsdWUpO1xuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpLCBsZW47XG4gICAgICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5hbHdheXMgPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4ob25GdWxmaWxsZWQsIG9uRnVsZmlsbGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xufTtcbiJdfQ==