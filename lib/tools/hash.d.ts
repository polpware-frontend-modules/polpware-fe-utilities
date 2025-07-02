/**
 * @fileOverview
 * Provides utilities for computing hash values
 */
/**
 * Computes the hash code for a given value.
 * This method takes into account the type of the given
 * value when generating its hash code.
 */
export declare function hashCode(value: any): number;
/**
 * Computes the hash code for a member of an object, based on
 * the given member member, the value to be hashed, and the configuration
 * about how each member contributes to the enire hash code of the
 * object.
 */
export declare function hashMember(name: string, value: any, configuration: {
    [key: string]: number;
}): number;
