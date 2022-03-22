/**
 * Converts the given date and time into a UTC time.
 * If the given time zone is null or undefined, this
 * method will not use the local time zone.
 * @param dateInLocal Date in local time
 * @param timeInLocal Time in local time
 * @param timezone Optional time zone
 */
export declare function convertToUtc(dateInLocal: Date, timeInLocal: Date, timezone?: number): Date;
/**
 Get the timezone offset between the local time and UTC.
 */
export declare function getTimezoneOffset(): number;
/**
 * A set of commonly used interval.
 */
export declare enum IntervalEnum {
    Day = 10,
    Week = 50,
    Month = 100,
    Year = 500
}
/**
 * Returns the UTC time this moment.
 * This method uses the current time zone.
 */
export declare function getUtcNow(): Date;
export declare function hasDST(date?: Date): boolean;
/**
 * Converts a local time to Utc string.
 * @param date
 */
export declare function convertToUtcString(date: Date): string;
