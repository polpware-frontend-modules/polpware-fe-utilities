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
    var workTime = new Date(dateInLocal.getFullYear(), dateInLocal.getMonth(), dateInLocal.getDate(), timeInLocal.getHours(), timeInLocal.getMinutes());
    var timeWrapper = moment(workTime);
    // The above time should be interpreted in the given timezone
    if (timezone) {
        // Utc time
        timeWrapper.subtract(timezone, 'hours');
    }
    // Convert to UTC time
    var timeInUtc = new Date(Date.UTC(timeWrapper.year(), timeWrapper.month(), timeWrapper.date(), timeWrapper.hour(), timeWrapper.minute(), timeWrapper.second()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMvIiwic291cmNlcyI6WyJsaWIvc3JjL3Rvb2xzL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsV0FBaUIsRUFBRSxXQUFpQixFQUFFLFFBQWlCO0lBQ2hGLHdCQUF3QjtJQUN4QixJQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQy9DLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFDdEIsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUNyQixXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyw2REFBNkQ7SUFDN0QsSUFBSSxRQUFRLEVBQUU7UUFDVixXQUFXO1FBQ1gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDM0M7SUFFRCxzQkFBc0I7SUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2hELFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFDbkIsV0FBVyxDQUFDLElBQUksRUFBRSxFQUNsQixXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2xCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFDcEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUzQixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCO0lBQzdCLElBQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFF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SUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkQsSUFBSSxlQUFlLEVBQUU7WUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDTCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLGNBQWMsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO2FBQ25ELENBQUMsQ0FBQztTQUNOO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYztJQUMxQixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDTCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ3JCLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdpdmVuIGRhdGUgYW5kIHRpbWUgaW50byBhIFVUQyB0aW1lLiBcbiAqIElmIHRoZSBnaXZlbiB0aW1lIHpvbmUgaXMgbnVsbCBvciB1bmRlZmluZWQsIHRoaXMgXG4gKiBtZXRob2Qgd2lsbCBub3QgdXNlIHRoZSBsb2NhbCB0aW1lIHpvbmUuXG4gKiBAcGFyYW0gZGF0ZUluTG9jYWwgRGF0ZSBpbiBsb2NhbCB0aW1lXG4gKiBAcGFyYW0gdGltZUluTG9jYWwgVGltZSBpbiBsb2NhbCB0aW1lXG4gKiBAcGFyYW0gdGltZXpvbmUgT3B0aW9uYWwgdGltZSB6b25lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9VdGMoZGF0ZUluTG9jYWw6IERhdGUsIHRpbWVJbkxvY2FsOiBEYXRlLCB0aW1lem9uZT86IG51bWJlcikge1xuICAgIC8vIENvbnN0cnVjdCBhIG5ldyB0aW1lIFxuICAgIGNvbnN0IHdvcmtUaW1lID0gbmV3IERhdGUoZGF0ZUluTG9jYWwuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZUluTG9jYWwuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZUluTG9jYWwuZ2V0RGF0ZSgpLFxuICAgICAgICB0aW1lSW5Mb2NhbC5nZXRIb3VycygpLFxuICAgICAgICB0aW1lSW5Mb2NhbC5nZXRNaW51dGVzKCkpO1xuICAgIGNvbnN0IHRpbWVXcmFwcGVyID0gbW9tZW50KHdvcmtUaW1lKTtcbiAgICAvLyBUaGUgYWJvdmUgdGltZSBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgaW4gdGhlIGdpdmVuIHRpbWV6b25lXG4gICAgaWYgKHRpbWV6b25lKSB7XG4gICAgICAgIC8vIFV0YyB0aW1lXG4gICAgICAgIHRpbWVXcmFwcGVyLnN1YnRyYWN0KHRpbWV6b25lLCAnaG91cnMnKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRvIFVUQyB0aW1lXG4gICAgbGV0IHRpbWVJblV0YyA9IG5ldyBEYXRlKERhdGUuVVRDKHRpbWVXcmFwcGVyLnllYXIoKSxcbiAgICAgICAgdGltZVdyYXBwZXIubW9udGgoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuZGF0ZSgpLFxuICAgICAgICB0aW1lV3JhcHBlci5ob3VyKCksXG4gICAgICAgIHRpbWVXcmFwcGVyLm1pbnV0ZSgpLFxuICAgICAgICB0aW1lV3JhcHBlci5zZWNvbmQoKSkpO1xuXG4gICAgcmV0dXJuIHRpbWVJblV0Yztcbn1cblxuLyoqXG4gR2V0IHRoZSB0aW1lem9uZSBvZmZzZXQgYmV0d2VlbiB0aGUgbG9jYWwgdGltZSBhbmQgVVRDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXQoKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICByZXR1cm4gLSBNYXRoLmZsb29yKG4gLyA2MCk7XG59XG5cbi8qKlxuICogQSBzZXQgb2YgY29tbW9ubHkgdXNlZCBpbnRlcnZhbC5cbiAqL1xuZXhwb3J0IGVudW0gSW50ZXJ2YWxFbnVtIHtcbiAgICBEYXkgPSAxMCxcbiAgICBXZWVrID0gNTAsXG4gICAgTW9udGggPSAxMDAsXG4gICAgWWVhciA9IDUwMCxcbiAgICBDdXN0b20gPSAxMDAwXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgVVRDIHRpbWUgdGhpcyBtb21lbnQuXG4gKiBUaGlzIG1ldGhvZCB1c2VzIHRoZSBjdXJyZW50IHRpbWUgem9uZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFV0Y05vdygpOiBEYXRlIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1V0Yyhub3csIG5vdywgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0RTVChkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIGNvbnN0IGphbnVhcnkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgY29uc3QganVseSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgNiwgMSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoamFudWFyeSwganVseSkgIT09IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGxvY2FsIHRpbWUgdG8gVXRjIHN0cmluZy5cbiAqIEBwYXJhbSBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9VdGNTdHJpbmcoZGF0ZTogRGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBlbnVtIE1vbnRoRW51bSB7XG4gICAgSmFudWFyeSA9IDEsXG4gICAgRmVicnVhcnksXG4gICAgTWFyY2gsXG4gICAgQXByaWwsXG4gICAgTWF5LFxuICAgIEp1bmUsXG4gICAgSnVseSxcbiAgICBBdWd1c3QsXG4gICAgU2VwdGVtYmVyLFxuICAgIE9jdG9iZXIsXG4gICAgTm92ZW1iZXIsXG4gICAgRGVjZW1iZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoc09mWWVhcigpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBlbnVtTWVtYmVyIGluIE1vbnRoRW51bSkge1xuICAgICAgICB2YXIgaXNWYWx1ZVByb3BlcnR5ID0gcGFyc2VJbnQoZW51bU1lbWJlciwgMTApID49IDBcbiAgICAgICAgaWYgKGlzVmFsdWVQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbnVtTWVtYmVyLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi4nICsgTW9udGhFbnVtW2VudW1NZW1iZXJdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5cbmV4cG9ydCBlbnVtIERheU9mV2Vla0VudW0ge1xuICAgIFN1bmRheSA9IDAsXG4gICAgTW9uZGF5LFxuICAgIFR1ZXNkYXksXG4gICAgV2VkbmVzZGF5LFxuICAgIFRodXJzZGF5LFxuICAgIEZyaWRheSxcbiAgICBTYXR1cmRheVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzT2ZXZWVrKCkge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAodmFyIGVudW1NZW1iZXIgaW4gRGF5T2ZXZWVrRW51bSkge1xuICAgICAgICB2YXIgaXNWYWx1ZVByb3BlcnR5ID0gcGFyc2VJbnQoZW51bU1lbWJlciwgMTApID49IDBcbiAgICAgICAgaWYgKGlzVmFsdWVQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbnVtTWVtYmVyLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi4nICsgRGF5T2ZXZWVrRW51bVtlbnVtTWVtYmVyXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNPZk1vbnRoKCkge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzI7IGkrKykge1xuICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZTogaSxcbiAgICAgICAgICAgIHRleHQ6IGkudG9TdHJpbmcoKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbiJdfQ==