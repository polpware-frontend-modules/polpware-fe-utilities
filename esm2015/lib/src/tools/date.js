import * as moment from 'moment';
/**
 * Converts the given date and time into a UTC time.
 * If the given time zone is null or undefined, this
 * method will not use the local time zone.
 * @param dateInLocal Date in local time
 * @param timeInLocal Time in local time
 * @param timezone Optional time zone
 */
export function convertToUtc(dateInLocal, timeInLocal, timezone) {
    // Construct a new time 
    const workTime = new Date(dateInLocal.getFullYear(), dateInLocal.getMonth(), dateInLocal.getDate(), timeInLocal.getHours(), timeInLocal.getMinutes());
    const timeWrapper = moment(workTime);
    // The above time should be interpreted in the given timezone
    if (timezone) {
        // Utc time
        timeWrapper.subtract(timezone, 'hours');
    }
    // Convert to UTC time
    let timeInUtc = new Date(Date.UTC(timeWrapper.year(), timeWrapper.month(), timeWrapper.day(), timeWrapper.hour(), timeWrapper.minute(), timeWrapper.second()));
    return timeInUtc;
}
/**
 Get the timezone offset between the local time and UTC.
 */
export function getTimezoneOffset() {
    const d = new Date();
    const n = d.getTimezoneOffset();
    return -Math.floor(n / 60);
}
/**
 * A set of commonly used interval.
 */
export var IntervalEnum;
(function (IntervalEnum) {
    IntervalEnum[IntervalEnum["Day"] = 10] = "Day";
    IntervalEnum[IntervalEnum["Week"] = 50] = "Week";
    IntervalEnum[IntervalEnum["Month"] = 100] = "Month";
    IntervalEnum[IntervalEnum["Year"] = 500] = "Year";
    IntervalEnum[IntervalEnum["Custom"] = 1000] = "Custom";
})(IntervalEnum || (IntervalEnum = {}));
/**
 * Returns the UTC time this moment.
 * This method uses the current time zone.
 */
export function getUtcNow() {
    const now = new Date();
    const offset = getTimezoneOffset();
    return convertToUtc(now, now, offset);
}
export function hasDST(date = new Date()) {
    const january = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    const july = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(january, july) !== date.getTimezoneOffset();
}
/**
 * Converts a local time to Utc string.
 * @param date
 */
export function convertToUtcString(date) {
    return date.toISOString();
}
export var MonthEnum;
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
})(MonthEnum || (MonthEnum = {}));
export function getMonthsOfYear() {
    const ret = [];
    for (var enumMember in MonthEnum) {
        var isValueProperty = parseInt(enumMember, 10) >= 0;
        if (isValueProperty) {
            ret.push({
                value: enumMember,
                text: 'polpCronJob.' + MonthEnum[enumMember]
            });
        }
    }
    return ret;
}
export var DayOfWeekEnum;
(function (DayOfWeekEnum) {
    DayOfWeekEnum[DayOfWeekEnum["Sunday"] = 0] = "Sunday";
    DayOfWeekEnum[DayOfWeekEnum["Monday"] = 1] = "Monday";
    DayOfWeekEnum[DayOfWeekEnum["Tuesday"] = 2] = "Tuesday";
    DayOfWeekEnum[DayOfWeekEnum["Wednesday"] = 3] = "Wednesday";
    DayOfWeekEnum[DayOfWeekEnum["Thursday"] = 4] = "Thursday";
    DayOfWeekEnum[DayOfWeekEnum["Friday"] = 5] = "Friday";
    DayOfWeekEnum[DayOfWeekEnum["Saturday"] = 6] = "Saturday";
})(DayOfWeekEnum || (DayOfWeekEnum = {}));
export function getDaysOfWeek() {
    const ret = [];
    for (var enumMember in DayOfWeekEnum) {
        var isValueProperty = parseInt(enumMember, 10) >= 0;
        if (isValueProperty) {
            ret.push({
                value: enumMember,
                text: 'polpCronJob.' + DayOfWeekEnum[enumMember]
            });
        }
    }
    return ret;
}
export function getDaysOfMonth() {
    const ret = [];
    for (let i = 1; i < 32; i++) {
        ret.push({
            value: i,
            text: i.toString()
        });
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMvIiwic291cmNlcyI6WyJsaWIvc3JjL3Rvb2xzL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsV0FBaUIsRUFBRSxXQUFpQixFQUFFLFFBQWlCO0lBQ2hGLHdCQUF3QjtJQUN4QixNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQy9DLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFDdEIsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUNyQixXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyw2REFBNkQ7SUFDN0QsSUFBSSxRQUFRLEVBQUU7UUFDVixXQUFXO1FBQ1gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDM0M7SUFFRCxzQkFBc0I7SUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2hELFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFDbkIsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUNqQixXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2xCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFDcEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUzQixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCO0lBQzdCLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFF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RyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuRCxJQUFJLGVBQWUsRUFBRTtZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNMLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsY0FBYyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1NBQ047S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjO0lBQzFCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNMLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7U0FDckIsQ0FBQyxDQUFDO0tBQ047SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdGltZSBpbnRvIGEgVVRDIHRpbWUuIFxuICogSWYgdGhlIGdpdmVuIHRpbWUgem9uZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgdGhpcyBcbiAqIG1ldGhvZCB3aWxsIG5vdCB1c2UgdGhlIGxvY2FsIHRpbWUgem9uZS5cbiAqIEBwYXJhbSBkYXRlSW5Mb2NhbCBEYXRlIGluIGxvY2FsIHRpbWVcbiAqIEBwYXJhbSB0aW1lSW5Mb2NhbCBUaW1lIGluIGxvY2FsIHRpbWVcbiAqIEBwYXJhbSB0aW1lem9uZSBPcHRpb25hbCB0aW1lIHpvbmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1V0YyhkYXRlSW5Mb2NhbDogRGF0ZSwgdGltZUluTG9jYWw6IERhdGUsIHRpbWV6b25lPzogbnVtYmVyKSB7XG4gICAgLy8gQ29uc3RydWN0IGEgbmV3IHRpbWUgXG4gICAgY29uc3Qgd29ya1RpbWUgPSBuZXcgRGF0ZShkYXRlSW5Mb2NhbC5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlSW5Mb2NhbC5nZXRNb250aCgpLFxuICAgICAgICBkYXRlSW5Mb2NhbC5nZXREYXRlKCksXG4gICAgICAgIHRpbWVJbkxvY2FsLmdldEhvdXJzKCksXG4gICAgICAgIHRpbWVJbkxvY2FsLmdldE1pbnV0ZXMoKSk7XG4gICAgY29uc3QgdGltZVdyYXBwZXIgPSBtb21lbnQod29ya1RpbWUpO1xuICAgIC8vIFRoZSBhYm92ZSB0aW1lIHNob3VsZCBiZSBpbnRlcnByZXRlZCBpbiB0aGUgZ2l2ZW4gdGltZXpvbmVcbiAgICBpZiAodGltZXpvbmUpIHtcbiAgICAgICAgLy8gVXRjIHRpbWVcbiAgICAgICAgdGltZVdyYXBwZXIuc3VidHJhY3QodGltZXpvbmUsICdob3VycycpO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG8gVVRDIHRpbWVcbiAgICBsZXQgdGltZUluVXRjID0gbmV3IERhdGUoRGF0ZS5VVEModGltZVdyYXBwZXIueWVhcigpLFxuICAgICAgICB0aW1lV3JhcHBlci5tb250aCgpLFxuICAgICAgICB0aW1lV3JhcHBlci5kYXkoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuaG91cigpLFxuICAgICAgICB0aW1lV3JhcHBlci5taW51dGUoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuc2Vjb25kKCkpKTtcblxuICAgIHJldHVybiB0aW1lSW5VdGM7XG59XG5cbi8qKlxuIEdldCB0aGUgdGltZXpvbmUgb2Zmc2V0IGJldHdlZW4gdGhlIGxvY2FsIHRpbWUgYW5kIFVUQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0KCkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG4gPSBkLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIC0gTWF0aC5mbG9vcihuIC8gNjApO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIGNvbW1vbmx5IHVzZWQgaW50ZXJ2YWwuXG4gKi9cbmV4cG9ydCBlbnVtIEludGVydmFsRW51bSB7XG4gICAgRGF5ID0gMTAsXG4gICAgV2VlayA9IDUwLFxuICAgIE1vbnRoID0gMTAwLFxuICAgIFllYXIgPSA1MDAsXG4gICAgQ3VzdG9tID0gMTAwMFxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIFVUQyB0aW1lIHRoaXMgbW9tZW50LlxuICogVGhpcyBtZXRob2QgdXNlcyB0aGUgY3VycmVudCB0aW1lIHpvbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVdGNOb3coKTogRGF0ZSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBvZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiBjb252ZXJ0VG9VdGMobm93LCBub3csIG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNEU1QoZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICBjb25zdCBqYW51YXJ5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGNvbnN0IGp1bHkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDYsIDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KGphbnVhcnksIGp1bHkpICE9PSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBsb2NhbCB0aW1lIHRvIFV0YyBzdHJpbmcuXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXRjU3RyaW5nKGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xufVxuXG5leHBvcnQgZW51bSBNb250aEVudW0ge1xuICAgIEphbnVhcnkgPSAxLFxuICAgIEZlYnJ1YXJ5LFxuICAgIE1hcmNoLFxuICAgIEFwcmlsLFxuICAgIE1heSxcbiAgICBKdW5lLFxuICAgIEp1bHksXG4gICAgQXVndXN0LFxuICAgIFNlcHRlbWJlcixcbiAgICBPY3RvYmVyLFxuICAgIE5vdmVtYmVyLFxuICAgIERlY2VtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aHNPZlllYXIoKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgZm9yICh2YXIgZW51bU1lbWJlciBpbiBNb250aEVudW0pIHtcbiAgICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXG4gICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW51bU1lbWJlcixcbiAgICAgICAgICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuJyArIE1vbnRoRW51bVtlbnVtTWVtYmVyXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuXG5leHBvcnQgZW51bSBEYXlPZldlZWtFbnVtIHtcbiAgICBTdW5kYXkgPSAwLFxuICAgIE1vbmRheSxcbiAgICBUdWVzZGF5LFxuICAgIFdlZG5lc2RheSxcbiAgICBUaHVyc2RheSxcbiAgICBGcmlkYXksXG4gICAgU2F0dXJkYXlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c09mV2VlaygpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBlbnVtTWVtYmVyIGluIERheU9mV2Vla0VudW0pIHtcbiAgICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXG4gICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW51bU1lbWJlcixcbiAgICAgICAgICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuJyArIERheU9mV2Vla0VudW1bZW51bU1lbWJlcl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzT2ZNb250aCgpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDMyOyBpKyspIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IGksXG4gICAgICAgICAgICB0ZXh0OiBpLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG4iXX0=