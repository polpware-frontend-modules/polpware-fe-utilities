(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment')) :
  typeof define === 'function' && define.amd ? define('@polpware/fe-utilities', ['exports', 'moment'], factory) :
  (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['fe-utilities'] = {}), global.moment));
}(this, (function (exports, moment) { 'use strict';

  /**
   * Generates a guid.
   */
  function guid() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
      });
      return uuid;
  }
  /**
   * Generates a random number between the given range
   */
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Encodes a key-value pair, where a value can be an array.
   */
  function urlEncodePair(key, value, str) {
      if (value instanceof Array) {
          value.forEach(function (item) {
              str.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(item));
          });
      }
      else {
          str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      }
  }
  /**
   * Encodes an object in www form.
   */
  function urlEncode(data) {
      var str = [];
      for (var p in data) {
          if (data.hasOwnProperty(p)) {
              urlEncodePair(p, data[p], str);
          }
      }
      return str.join('&').replace(/%20/g, '+');
  }
  function getParamByName(name, url) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?#&]' + name + '(=([^&#]*)|&|#|$)');
      var results = regex.exec(url);
      if (!results) {
          return null;
      }
      if (!results[2]) {
          return '';
      }
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  function getQueryParamByName(name, url) {
      if (!url) {
          url = window.location.href;
      }
      return getParamByName(name, url);
  }
  function getHashParamByName(name, url) {
      if (!url) {
          url = window.location.hash;
      }
      return getParamByName(name, url);
  }

  /**
   * Pushs an array or a single value into the thisArg;
   */
  function pushArray(thisArg, src) {
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
  function makeArray(o) {
      var ret = [];
      for (var n in o) {
          if (o.hasOwnProperty(n)) {
              ret.push(o[n]);
          }
      }
      return ret;
  }

  /**
   * Replaces the placeholders a given format with the given parameters.
   */
  function replace(format, params) {
      /*jslint unparam: true */
      return format.replace(/\{([a-zA-Z]+)\}/g, function (s, key) {
          return (typeof params[key] === 'undefined') ? '' : params[key];
      });
  }
  /**
   * Transforms the given string into one where
   * some characters have been properly replaced with
   * their escape versions.
   */
  function applyEscape(data) {
      data = data
          .replace(/[\\]/g, '\\\\')
          .replace(/[\"]/g, '\\\"')
          .replace(/[\/]/g, '\\/')
          .replace(/[\b]/g, '\\b')
          .replace(/[\f]/g, '\\f')
          .replace(/[\n]/g, '\\n')
          .replace(/[\r]/g, '\\r')
          .replace(/[\t]/g, '\\t');
      return data;
  }
  /**
   * Undo the work by applyEscape. It replaces the escape
   * characters with their unescaped ones.
   */
  function reverseEscape(data) {
      data = data
          .replace(/\\\\/g, '\\')
          .replace(/\\\"/g, '\"')
          .replace(/\\\//g, '\/')
          .replace(/\\\b/g, '\b')
          .replace(/\\\f/g, '\f')
          .replace(/\\\n/g, '\n')
          .replace(/\\\r/g, '\r')
          .replace(/\\\t/g, '\t');
      return data;
  }

  // firstSet - secondSet (any element not in secondSet)
  function diff(firstSet, secondSet, predicate) {
      return firstSet.filter(function (x) {
          return !secondSet.some(function (y) {
              return predicate(x, y);
          });
      });
  }
  // firstSet intersection secondSet
  function intersection(firstSet, secondSet, predicate) {
      return firstSet.filter(function (x) {
          return secondSet.some(function (y) {
              return predicate(x, y);
          });
      });
  }

  /*
  BasicTypes :=
      boolean
    | number
    | string
    | date
    | symbol
    | null
    | undefined
    | array
    | object
    | function
  */
  function isBoolean(x) {
      return typeof x === 'boolean';
  }
  function isNumber(x) {
      return typeof x === 'number';
  }
  function isString(x) {
      return typeof x === 'string';
  }
  function isDate(x) {
      return Object.prototype.toString.call(x) === '[object Date]';
  }
  function isSymbol(x) {
      return typeof x === 'symbol';
  }
  function isNull(x) {
      return x === null;
  }
  function isUndefined(x) {
      return x === undefined;
  }
  function isArray(x) {
      return x instanceof Array;
  }
  function isObject(x) {
      return typeof x === 'object';
  }
  function isFunction(x) {
      return typeof x === 'function';
  }
  ;
  var tyBool = { name: 'Boolean', val: false, pred: isBoolean };
  var tyNull = { name: 'Null', val: null, pred: isNull };
  var tyUndefined = { name: 'Undefined', val: undefined, pred: isUndefined };
  var tyNumber = { name: 'Number', val: 0, pred: isNumber };
  var tyString = { name: 'String', val: '', pred: isString };
  var ɵ0 = function () { return Date.now(); };
  var tyDate = { name: 'Object', val: ɵ0, pred: isDate };
  var tySymbol = { name: 'Symbol', val: null, pred: isSymbol };
  var ɵ1 = function () { return {}; };
  var tyObject = { name: 'Object', val: ɵ1, pred: isObject };
  var ɵ2 = function () { return []; };
  var tyArray = { name: 'Array', val: ɵ2, pred: isArray };
  var ɵ3 = function () { };
  var tyFunction = { name: 'Function', val: ɵ3, pred: isFunction };
  /**
   *  Predefined types and their properties.
   */
  var preDefinedTypes = {
      tyBool: tyBool,
      tyNull: tyNull,
      tyUndefined: tyUndefined,
      tyNumber: tyNumber,
      tyString: tyString,
      tyDate: tyDate,
      tySymbol: tySymbol,
      tyObject: tyObject,
      tyArray: tyArray,
      tyFunction: tyFunction
  };
  /**
   * Returns the default value for a given type.
   */
  function defaultValue(ty) {
      var val = ty.val;
      if (ty !== tyFunction && typeof val === 'function') {
          val = val();
      }
      return val;
  }
  /**
   * Type checks if a given value is type of the given ty
   */
  function ok(value, ty) {
      return ty.pred(value);
  }
  /**
   * Returns the type for the given value.
   */
  function getType(value) {
      for (var prop in preDefinedTypes) {
          if (ok(value, preDefinedTypes[prop])) {
              return preDefinedTypes[prop];
          }
      }
      return null;
  }
  function assert(value, ty) {
      if (ok(value, ty)) {
          return;
      }
      throw new Error('type check error: exptected type is ' +
          ty + ' but given type is ' + typeof value);
  }

  /**
   * @fileOverview
   * Provides utilities for computing hash values
   */
  /**
   * Computes the hash code for a given value.
   * This method takes into account the type of the given
   * value when generating its hash code.
   */
  function hashCode(value) {
      var hash = 0;
      if (ok(value, tyBool)) {
          value = value ? 1 : 0;
      }
      else if (ok(value, tyNumber)) {
          if (value === 0) {
              return 0;
          }
      }
      if (!value) {
          return 0;
      }
      value = value.toString();
      if (value.length === 0) {
          return hash;
      }
      /*jslint plusplus: true */
      for (var i = 0, len = value.length; i < len; i++) {
          var chr = value.charCodeAt(i);
          hash = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
      }
      return hash;
  }
  /**
   * Computes the hash code for a member of an object.
   */
  function hashPrimitiveMember(name, value, configuration) {
      var code = hashCode(value);
      if (configuration) {
          var bits = configuration[name];
          if (bits) {
              return code << configuration[name];
          }
      }
      return code;
  }
  /**
   * Computes the hash code for a member of an object, based on
   * the given member member, the value to be hashed, and the configuration
   * about how each member contributes to the enire hash code of the
   * object.
   */
  function hashMember(name, value, configuration) {
      if (ok(value, tyArray)) {
          var code = 0;
          /*jslint plusplus: true */
          for (var i = 0; i < value.length; i++) {
              code = code + hashPrimitiveMember(name, value[i], configuration);
          }
          return code;
      }
      return hashPrimitiveMember(name, value, configuration);
  }

  /**
   * Converts the given date and time into a UTC time.
   * If the given time zone is null or undefined, this
   * method will not use the local time zone.
   * @param dateInLocal Date in local time
   * @param timeInLocal Time in local time
   * @param timezone Optional time zone
   */
  function convertToUtc(dateInLocal, timeInLocal, timezone) {
      // Construct a new time 
      var workTime = new Date(dateInLocal.getFullYear(), dateInLocal.getMonth(), dateInLocal.getDay(), timeInLocal.getHours(), timeInLocal.getMinutes());
      var timeWrapper = moment(workTime);
      // The above time should be interpreted in the given timezone
      if (timezone) {
          // Utc time
          timeWrapper.subtract(timezone, 'hours');
      }
      // Convert to UTC time
      var timeInUtc = new Date(Date.UTC(timeWrapper.year(), timeWrapper.month(), timeWrapper.day(), timeWrapper.hour(), timeWrapper.minute(), timeWrapper.second()));
      return timeInUtc;
  }
  /**
   Get the timezone offset between the local time and UTC.
   */
  function getTimezoneOffset() {
      var d = new Date();
      var n = d.getTimezoneOffset();
      return -Math.floor(n / 60);
  }
  /**
   * A set of commonly used interval.
   */

  (function (IntervalEnum) {
      IntervalEnum[IntervalEnum["Day"] = 10] = "Day";
      IntervalEnum[IntervalEnum["Week"] = 50] = "Week";
      IntervalEnum[IntervalEnum["Month"] = 100] = "Month";
      IntervalEnum[IntervalEnum["Year"] = 500] = "Year";
      IntervalEnum[IntervalEnum["Custom"] = 1000] = "Custom";
  })(exports.IntervalEnum || (exports.IntervalEnum = {}));
  /**
   * Returns the UTC time this moment.
   * This method uses the current time zone.
   */
  function getUtcNow() {
      var now = new Date();
      var offset = getTimezoneOffset();
      return convertToUtc(now, now, offset);
  }
  function hasDST(date) {
      if (date === void 0) { date = new Date(); }
      var january = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
      var july = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      return Math.max(january, july) !== date.getTimezoneOffset();
  }
  /**
   * Converts a local time to Utc string.
   * @param date
   */
  function convertToUtcString(date) {
      return date.toISOString();
  }

  (function (MonthEnum) {
      MonthEnum[MonthEnum["January"] = 1] = "January";
      MonthEnum[MonthEnum["February"] = 2] = "February";
      MonthEnum[MonthEnum["March"] = 3] = "March";
      MonthEnum[MonthEnum["April"] = 4] = "April";
      MonthEnum[MonthEnum["May"] = 5] = "May";
      MonthEnum[MonthEnum["June"] = 6] = "June";
      MonthEnum[MonthEnum["July"] = 7] = "July";
      MonthEnum[MonthEnum["August"] = 8] = "August";
      MonthEnum[MonthEnum["September"] = 9] = "September";
      MonthEnum[MonthEnum["October"] = 10] = "October";
      MonthEnum[MonthEnum["November"] = 11] = "November";
      MonthEnum[MonthEnum["December"] = 12] = "December";
  })(exports.MonthEnum || (exports.MonthEnum = {}));
  function getMonthsOfYear() {
      var ret = [];
      for (var enumMember in exports.MonthEnum) {
          var isValueProperty = parseInt(enumMember, 10) >= 0;
          if (isValueProperty) {
              ret.push({
                  value: enumMember,
                  text: 'polpCronJob.' + exports.MonthEnum[enumMember]
              });
          }
      }
      return ret;
  }

  (function (DayOfWeekEnum) {
      DayOfWeekEnum[DayOfWeekEnum["Sunday"] = 0] = "Sunday";
      DayOfWeekEnum[DayOfWeekEnum["Monday"] = 1] = "Monday";
      DayOfWeekEnum[DayOfWeekEnum["Tuesday"] = 2] = "Tuesday";
      DayOfWeekEnum[DayOfWeekEnum["Wednesday"] = 3] = "Wednesday";
      DayOfWeekEnum[DayOfWeekEnum["Thursday"] = 4] = "Thursday";
      DayOfWeekEnum[DayOfWeekEnum["Friday"] = 5] = "Friday";
      DayOfWeekEnum[DayOfWeekEnum["Saturday"] = 6] = "Saturday";
  })(exports.DayOfWeekEnum || (exports.DayOfWeekEnum = {}));
  function getDaysOfWeek() {
      var ret = [];
      for (var enumMember in exports.DayOfWeekEnum) {
          var isValueProperty = parseInt(enumMember, 10) >= 0;
          if (isValueProperty) {
              ret.push({
                  value: enumMember,
                  text: 'polpCronJob.' + exports.DayOfWeekEnum[enumMember]
              });
          }
      }
      return ret;
  }
  function getDaysOfMonth() {
      var ret = [];
      for (var i = 1; i < 32; i++) {
          ret.push({
              value: i,
              text: i.toString()
          });
      }
      return ret;
  }

  function safeParseString(value) {
      if (!value) {
          return '';
      }
      return value.toString();
  }
  /**
   * Parses a given value into an integer.
   */
  function safeParseInt(value) {
      if (!value) {
          return 0;
      }
      if (ok(value, tyString)) {
          return parseInt(value, 10);
      }
      if (ok(value, tyNumber)) {
          return value;
      }
      return 0;
  }
  /**
   * Parses a given value into a float number.
   */
  function safeParseFloat(value) {
      if (!value) {
          return 0.00;
      }
      if (ok(value, tyString)) {
          return parseFloat(value);
      }
      if (ok(value, tyNumber)) {
          return value;
      }
      return 0.00;
  }
  /**
   * Parses a given value into a bool value.
   */
  function safeParseBool(value) {
      if (!value) {
          return false;
      }
      if (ok(value, tyBool)) {
          return value;
      }
      if (ok(value, tyString)) {
          return value.toLowerCase() === 'true';
      }
      if (ok(value, tyNumber)) {
          return value > 0;
      }
      return false;
  }
  /**
   * Returns if a given value can be safely converted into the given type.
   */
  function convertible(value, ty) {
      if (ok(value, ty)) {
          return true;
      }
      if (isNull(value) || isUndefined(value)) {
          return false;
      }
      if (ty === tyNumber && isNaN(value)) {
          return false;
      }
      // TODO: refine
      return true;
  }
  /**
   * Safely converts the given value into a value of the given type.
   */
  function convert(value, ty) {
      if (ty === tyNumber) {
          return safeParseFloat(value);
      }
      if (ty === tyBool) {
          return safeParseBool(value);
      }
      if (ty === tyString) {
          return value.toString();
      }
      throw new Error('Cannot convert the given value to the given type');
  }

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
  var ɵ0$1 = function (value) { return Object.prototype.toString.call(value) === "[object Array]"; };
  var isArray$1 = Array.isArray || ɵ0$1;
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
  function DummyPromise(fn) {
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
      var me = this;
      return new DummyPromise(function (resolve, reject) {
          handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
  };
  DummyPromise.prototype.all = function (arrayArg) {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray$1(arrayArg) ? arrayArg : arguments);
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

  // 
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
  function lift(value, thisArg) {
      /*jslint unparam: true */
      return new DummyPromise(function (resolve, reject) {
          if (isFunction(value)) {
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
  function liftIntoReject(value) {
      return new DummyPromise(function (resolve, reject) {
          /*jslint unparam: true */
          reject(value);
      });
  }
  /**
   * Converts a given promise into another promise which ensures that
   * the given guard evalutes to be true from the state of the given promise.
   */
  function liftWithGuard(promise, guard) {
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
  function settle(promise) {
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
  function liftToPredicate(promise, guard) {
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
  function readerPipeline(readerPromise, settings) {
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
  function transform(promise) {
      return new DummyPromise(function (resolve, reject) {
          promise.then(resolve, reject);
      });
  }

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
  function tojQueryDeferred(promise) {
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

  exports.DummyPromise = DummyPromise;
  exports.applyEscape = applyEscape;
  exports.assert = assert;
  exports.convert = convert;
  exports.convertToUtc = convertToUtc;
  exports.convertToUtcString = convertToUtcString;
  exports.convertible = convertible;
  exports.defaultValue = defaultValue;
  exports.diff = diff;
  exports.getDaysOfMonth = getDaysOfMonth;
  exports.getDaysOfWeek = getDaysOfWeek;
  exports.getHashParamByName = getHashParamByName;
  exports.getMonthsOfYear = getMonthsOfYear;
  exports.getParamByName = getParamByName;
  exports.getQueryParamByName = getQueryParamByName;
  exports.getRandomInt = getRandomInt;
  exports.getTimezoneOffset = getTimezoneOffset;
  exports.getType = getType;
  exports.getUtcNow = getUtcNow;
  exports.guid = guid;
  exports.hasDST = hasDST;
  exports.hashCode = hashCode;
  exports.hashMember = hashMember;
  exports.intersection = intersection;
  exports.isArray = isArray;
  exports.isBoolean = isBoolean;
  exports.isDate = isDate;
  exports.isFunction = isFunction;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isUndefined = isUndefined;
  exports.lift = lift;
  exports.liftIntoReject = liftIntoReject;
  exports.liftToPredicate = liftToPredicate;
  exports.liftWithGuard = liftWithGuard;
  exports.makeArray = makeArray;
  exports.ok = ok;
  exports.pushArray = pushArray;
  exports.readerPipeline = readerPipeline;
  exports.replace = replace;
  exports.reverseEscape = reverseEscape;
  exports.safeParseBool = safeParseBool;
  exports.safeParseFloat = safeParseFloat;
  exports.safeParseInt = safeParseInt;
  exports.safeParseString = safeParseString;
  exports.settle = settle;
  exports.tojQueryDeferred = tojQueryDeferred;
  exports.transform = transform;
  exports.tyArray = tyArray;
  exports.tyBool = tyBool;
  exports.tyDate = tyDate;
  exports.tyFunction = tyFunction;
  exports.tyNull = tyNull;
  exports.tyNumber = tyNumber;
  exports.tyObject = tyObject;
  exports.tyString = tyString;
  exports.tySymbol = tySymbol;
  exports.tyUndefined = tyUndefined;
  exports.urlEncode = urlEncode;
  exports.urlEncodePair = urlEncodePair;
  exports.ɵ0 = ɵ0;
  exports.ɵ1 = ɵ1;
  exports.ɵ2 = ɵ2;
  exports.ɵ3 = ɵ3;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-fe-utilities.umd.js.map
