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
export function getTimezoneOffset() {
    var d = new Date();
    var n = d.getTimezoneOffset();
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
    var now = new Date();
    var offset = getTimezoneOffset();
    return convertToUtc(now, now, offset);
}
export function hasDST(date) {
    if (date === void 0) { date = new Date(); }
    var january = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    var july = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
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
    var ret = [];
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
    var ret = [];
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
    var ret = [];
    for (var i = 1; i < 32; i++) {
        ret.push({
            value: i,
            text: i.toString()
        });
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMvIiwic291cmNlcyI6WyJsaWIvc3JjL3Rvb2xzL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsV0FBaUIsRUFBRSxXQUFpQixFQUFFLFFBQWlCO0lBQ2hGLHdCQUF3QjtJQUN4QixJQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQy9DLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFDdEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUNwQixXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyw2REFBNkQ7SUFDN0QsSUFBSSxRQUFRLEVBQUU7UUFDVixXQUFXO1FBQ1gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDM0M7SUFFRCxzQkFBc0I7SUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2hELFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFDbkIsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUNqQixXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2xCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFDcEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUzQixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCO0lBQzdCLElBQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFF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SUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkQsSUFBSSxlQUFlLEVBQUU7WUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDTCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLGNBQWMsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO2FBQ25ELENBQUMsQ0FBQztTQUNOO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYztJQUMxQixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDTCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ3JCLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdpdmVuIGRhdGUgYW5kIHRpbWUgaW50byBhIFVUQyB0aW1lLiBcbiAqIElmIHRoZSBnaXZlbiB0aW1lIHpvbmUgaXMgbnVsbCBvciB1bmRlZmluZWQsIHRoaXMgXG4gKiBtZXRob2Qgd2lsbCBub3QgdXNlIHRoZSBsb2NhbCB0aW1lIHpvbmUuXG4gKiBAcGFyYW0gZGF0ZUluTG9jYWwgRGF0ZSBpbiBsb2NhbCB0aW1lXG4gKiBAcGFyYW0gdGltZUluTG9jYWwgVGltZSBpbiBsb2NhbCB0aW1lXG4gKiBAcGFyYW0gdGltZXpvbmUgT3B0aW9uYWwgdGltZSB6b25lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9VdGMoZGF0ZUluTG9jYWw6IERhdGUsIHRpbWVJbkxvY2FsOiBEYXRlLCB0aW1lem9uZT86IG51bWJlcikge1xuICAgIC8vIENvbnN0cnVjdCBhIG5ldyB0aW1lIFxuICAgIGNvbnN0IHdvcmtUaW1lID0gbmV3IERhdGUoZGF0ZUluTG9jYWwuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZUluTG9jYWwuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZUluTG9jYWwuZ2V0RGF5KCksXG4gICAgICAgIHRpbWVJbkxvY2FsLmdldEhvdXJzKCksXG4gICAgICAgIHRpbWVJbkxvY2FsLmdldE1pbnV0ZXMoKSk7XG4gICAgY29uc3QgdGltZVdyYXBwZXIgPSBtb21lbnQod29ya1RpbWUpO1xuICAgIC8vIFRoZSBhYm92ZSB0aW1lIHNob3VsZCBiZSBpbnRlcnByZXRlZCBpbiB0aGUgZ2l2ZW4gdGltZXpvbmVcbiAgICBpZiAodGltZXpvbmUpIHtcbiAgICAgICAgLy8gVXRjIHRpbWVcbiAgICAgICAgdGltZVdyYXBwZXIuc3VidHJhY3QodGltZXpvbmUsICdob3VycycpO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG8gVVRDIHRpbWVcbiAgICBsZXQgdGltZUluVXRjID0gbmV3IERhdGUoRGF0ZS5VVEModGltZVdyYXBwZXIueWVhcigpLFxuICAgICAgICB0aW1lV3JhcHBlci5tb250aCgpLFxuICAgICAgICB0aW1lV3JhcHBlci5kYXkoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuaG91cigpLFxuICAgICAgICB0aW1lV3JhcHBlci5taW51dGUoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuc2Vjb25kKCkpKTtcblxuICAgIHJldHVybiB0aW1lSW5VdGM7XG59XG5cbi8qKlxuIEdldCB0aGUgdGltZXpvbmUgb2Zmc2V0IGJldHdlZW4gdGhlIGxvY2FsIHRpbWUgYW5kIFVUQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0KCkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG4gPSBkLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIC0gTWF0aC5mbG9vcihuIC8gNjApO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIGNvbW1vbmx5IHVzZWQgaW50ZXJ2YWwuXG4gKi9cbmV4cG9ydCBlbnVtIEludGVydmFsRW51bSB7XG4gICAgRGF5ID0gMTAsXG4gICAgV2VlayA9IDUwLFxuICAgIE1vbnRoID0gMTAwLFxuICAgIFllYXIgPSA1MDAsXG4gICAgQ3VzdG9tID0gMTAwMFxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIFVUQyB0aW1lIHRoaXMgbW9tZW50LlxuICogVGhpcyBtZXRob2QgdXNlcyB0aGUgY3VycmVudCB0aW1lIHpvbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVdGNOb3coKTogRGF0ZSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBvZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiBjb252ZXJ0VG9VdGMobm93LCBub3csIG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNEU1QoZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICBjb25zdCBqYW51YXJ5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGNvbnN0IGp1bHkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDYsIDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KGphbnVhcnksIGp1bHkpICE9PSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBsb2NhbCB0aW1lIHRvIFV0YyBzdHJpbmcuXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXRjU3RyaW5nKGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xufVxuXG5leHBvcnQgZW51bSBNb250aEVudW0ge1xuICAgIEphbnVhcnkgPSAxLFxuICAgIEZlYnJ1YXJ5LFxuICAgIE1hcmNoLFxuICAgIEFwcmlsLFxuICAgIE1heSxcbiAgICBKdW5lLFxuICAgIEp1bHksXG4gICAgQXVndXN0LFxuICAgIFNlcHRlbWJlcixcbiAgICBPY3RvYmVyLFxuICAgIE5vdmVtYmVyLFxuICAgIERlY2VtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aHNPZlllYXIoKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgZm9yICh2YXIgZW51bU1lbWJlciBpbiBNb250aEVudW0pIHtcbiAgICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXG4gICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW51bU1lbWJlcixcbiAgICAgICAgICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuJyArIE1vbnRoRW51bVtlbnVtTWVtYmVyXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuXG5leHBvcnQgZW51bSBEYXlPZldlZWtFbnVtIHtcbiAgICBTdW5kYXkgPSAwLFxuICAgIE1vbmRheSxcbiAgICBUdWVzZGF5LFxuICAgIFdlZG5lc2RheSxcbiAgICBUaHVyc2RheSxcbiAgICBGcmlkYXksXG4gICAgU2F0dXJkYXlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c09mV2VlaygpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBlbnVtTWVtYmVyIGluIERheU9mV2Vla0VudW0pIHtcbiAgICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXG4gICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW51bU1lbWJlcixcbiAgICAgICAgICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuJyArIERheU9mV2Vla0VudW1bZW51bU1lbWJlcl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzT2ZNb250aCgpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDMyOyBpKyspIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IGksXG4gICAgICAgICAgICB0ZXh0OiBpLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG4iXX0=