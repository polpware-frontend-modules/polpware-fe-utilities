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
export declare function tojQueryDeferred(promise: any): any;
