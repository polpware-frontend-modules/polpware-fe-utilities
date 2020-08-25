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
export declare function lift<T>(value: T, thisArg: Object): PromiseLike<T>;
/**
 * Lifts a value into an rejected state.
 */
export declare function liftIntoReject<T>(value: T): PromiseLike<T>;
/**
 * Converts a given promise into another promise which ensures that
 * the given guard evalutes to be true from the state of the given promise.
 */
export declare function liftWithGuard<T>(promise: PromiseLike<T>, guard: (x: T) => boolean): PromiseLike<T>;
/**
 * Settles a promise.
 */
export declare function settle<T>(promise: PromiseLike<T>): PromiseLike<T>;
/**
 * Converts the given promise into a promise which does not reject anything.
 */
export declare function liftToPredicate<T>(promise: PromiseLike<T>, guard: (x: T) => boolean): PromiseLike<boolean>;
export interface IPipelineSettings<U> {
    validator?: (x: any) => boolean;
    adaptor: (x: any) => U;
}
/**
 * Transforms a given promise with additonal pipeline processing.
 * Specifically, in this method, compared to the given promise, the return
 * promise contains validating and adpating stages.
 */
export declare function readerPipeline<T, U>(readerPromise: PromiseLike<T>, settings: IPipelineSettings<U>): PromiseLike<U>;
/**
 * Transforms a given promise into one promise with our own implementation.
 */
export declare function transform<T>(promise: PromiseLike<T>): PromiseLike<T>;
