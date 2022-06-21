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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS1saWtlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2ZlLXV0aWxpdGllcy8iLCJzb3VyY2VzIjpbImxpYi9zcmMvcHJvbWlzZS9wcm9taXNlLWxpa2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRztBQUNILDhDQUE4QztBQUM5QywyQ0FBMkM7QUFDM0MsR0FBRztBQUNILHdFQUF3RTtBQUN4RSxrRUFBa0U7QUFDbEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSxxRUFBcUU7QUFDckUsd0VBQXdFO0FBQ3hFLDRCQUE0QjtBQUM1QixHQUFHO0FBQ0gsaUVBQWlFO0FBQ2pFLGtFQUFrRTtBQUNsRSxHQUFHO0FBQ0gsa0VBQWtFO0FBQ2xFLHFFQUFxRTtBQUNyRSx3REFBd0Q7QUFDeEQseUVBQXlFO0FBQ3pFLHlFQUF5RTtBQUN6RSx3RUFBd0U7QUFDeEUsa0VBQWtFO0FBQ2xFLEdBQUc7QUFDSCx5RUFBeUU7QUFDekUsdUVBQXVFO0FBQ3ZFLHFFQUFxRTtBQUNyRSxpQkFBaUI7QUFFakIsU0FBUyxJQUFJLENBQUMsRUFBRTtJQUNaLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPO0lBQ3JCLE9BQU87UUFDSCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUM7QUFDTixDQUFDO1dBRThCLFVBQVMsS0FBSyxJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUFySCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxNQUEwRixDQUFDO0FBRXRIOzs7OztHQUtHO0FBQ0gsU0FBUyxTQUFTLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxVQUFVO0lBQzFD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LENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLFVBQVU7SUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRztJQUM3QixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRztJQUM5QixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcbi8vIEF1dGhvcjo6IFRvbSBUYW5nIDxwcmluY2lwbGV3YXJlQGdtYWlsLmNvbT5cbi8vIENvcHlyaWdodDo6IENvcHlyaWdodCAoYykgMjAxNywgVG9tIFRhbmdcbi8vIFxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG4vLyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4vLyBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbi8vIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vIFxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbi8vIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy8gXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuLy8gRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuLy8gTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuLy8gTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuLy8gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vIFxuLy8gRXhjZXB0IGFzIGNvbnRhaW5lZCBpbiB0aGlzIG5vdGljZSwgdGhlIG5hbWUocykgb2YgdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gaG9sZGVycyBzaGFsbCBub3QgYmUgdXNlZCBpbiBhZHZlcnRpc2luZyBvciBvdGhlcndpc2UgdG8gcHJvbW90ZSB0aGVcbi8vIHNhbGUsIHVzZSBvciBvdGhlciBkZWFsaW5ncyBpbiB0aGlzIFNvZnR3YXJlIHdpdGhvdXQgcHJpb3Igd3JpdHRlblxuLy8gYXV0aG9yaXphdGlvbi5cblxuZnVuY3Rpb24gYXNhcChmbikge1xuICAgIHNldFRpbWVvdXQoZm4sIDEpO1xufVxuXG5mdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiOyB9O1xuXG4vKipcbiAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG4gKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cbiAqXG4gKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG4gKi9cbmZ1bmN0aW9uIGRvUmVzb2x2ZShmbiwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGZuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgb25GdWxmaWxsZWQodmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBvblJlamVjdGVkKHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIG9uUmVqZWN0ZWQoZXgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlKGRlZmVycmVkKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjYiwgcmV0O1xuICAgICAgICBjYiA9IG1lLl9zdGF0ZSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICAgICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAgICAgICAobWUuX3N0YXRlID8gZGVmZXJyZWQucmVzb2x2ZSA6IGRlZmVycmVkLnJlamVjdCkobWUuX3ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0ID0gY2IobWUuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUocmV0KTtcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBmaW5hbGUoKSB7XG4gICAgdmFyIGksIGxlbjtcbiAgICAvKmpzbGludCBwbHVzcGx1czp0cnVlICovXG4gICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGhhbmRsZS5jYWxsKHRoaXMsIHRoaXMuX2RlZmVycmVkc1tpXSk7XG4gICAgfVxuICAgIHRoaXMuX2RlZmVycmVkcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChuZXdWYWx1ZSkge1xuICAgIHRoaXMuX3N0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShuZXdWYWx1ZSkge1xuICAgIHRyeSB7IC8vUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICB2YXIgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIGJpbmQocmVzb2x2ZSwgdGhpcyksIGJpbmQocmVqZWN0LCB0aGlzKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgZmluYWxlLmNhbGwodGhpcyk7XG4gICAgfSBjYXRjaCAoZSkgeyByZWplY3QuY2FsbCh0aGlzLCBlKTsgfVxufVxuXG4vKipcbiAqIERlZmluZXMgYSBkdW1teSBwcm9taXNlLCB3aGljaCBzaW11bGF0ZXMgdGhlIGJlaGF2aW9yIG9mIGEgbm9ybWFsIFByb21pc2VcbiAqIGJ1dCBpcyBzdWl0YWJsZSB1c2VkIGluIHN5bmNocm9ub3VzIGNhbGwuXG4gKiBUaGlzIHJlc3VsdGVkIG9iamVjdCBpcyBhbHNvIGEgalF1ZXJ5IGRlZmVycmVkIG9iamVjdCwgdGhlcmVmb3JlLFxuICogaXQgd2lsbCBiZSByZXNvbHZlZCBieSB0aGUgalF1ZXJ5IGRlZmVycmVkIG9iamVjdCBpZiBpdCBpcyBhIHJlc29sdmVkIHZhbHVlIGluXG4gKiB0aGUgalF1ZXJ5IGRlZmVycmVkIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIER1bW15UHJvbWlzZTxUPihmbjogKHJlc29sdmU6ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPykgPT4gdm9pZCkgPT4gdm9pZCkge1xuICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUgPSBudWxsO1xuICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcblxuICAgIGRvUmVzb2x2ZShmbiwgYmluZChyZXNvbHZlLCB0aGlzKSwgYmluZChyZWplY3QsIHRoaXMpKTtcbn1cblxuXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbn1cblxuXG5EdW1teVByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaGFuZGxlLmNhbGwobWUsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCByZXNvbHZlLCByZWplY3QpKTtcbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oYXJyYXlBcmcpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShhcnJheUFyZykgPyBhcnJheUFyZyA6IGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoLCBpO1xuICAgICAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbCwgZnVuY3Rpb24odmFsKSB7IHJlcyhpLCB2YWwpOyB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSB2YWw7XG5cbiAgICAgICAgICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqL1xuICAgICAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKmpzbGludCBwbHVzcGx1czogdHJ1ZSAqLyAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IER1bW15UHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlICovXG4gICAgcmV0dXJuIG5ldyBEdW1teVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlamVjdCh2YWx1ZSk7XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnJhY2UgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3IER1bW15UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGksIGxlbjtcbiAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0udGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLmFsd2F5cyA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZCwgb25GdWxmaWxsZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24ob25GdWxmaWxsZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG9uRnVsZmlsbGVkKTtcbn07XG5cbkR1bW15UHJvbWlzZS5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuRHVtbXlQcm9taXNlLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5EdW1teVByb21pc2UucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuIl19