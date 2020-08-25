/**
 * Defines a dummy promise, which simulates the behavior of a normal Promise
 * but is suitable used in synchronous call.
 * This resulted object is also a jQuery deferred object, therefore,
 * it will be resolved by the jQuery deferred object if it is a resolved value in
 * the jQuery deferred object.
 */
export declare function DummyPromise<T>(fn: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): void;
