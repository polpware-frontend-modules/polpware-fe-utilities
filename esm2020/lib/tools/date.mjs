import moment from 'moment';
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
    let timeInUtc = new Date(Date.UTC(timeWrapper.year(), timeWrapper.month(), timeWrapper.date(), timeWrapper.hour(), timeWrapper.minute(), timeWrapper.second()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2ZlLXV0aWxpdGllcy9zcmMvbGliL3Rvb2xzL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLFdBQWlCLEVBQUUsV0FBaUIsRUFBRSxRQUFpQjtJQUNoRix3QkFBd0I7SUFDeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUMvQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFDckIsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUN0QixXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5QixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsNkRBQTZEO0lBQzdELElBQUksUUFBUSxFQUFFO1FBQ1YsV0FBVztRQUNYLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNDO0lBRUQsc0JBQXNCO0lBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUNoRCxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQ25CLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFDbEIsV0FBVyxDQUFDLElBQUksRUFBRSxFQUNsQixXQUFXLENBQUMsTUFBTSxFQUFFLEVBQ3BCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0IsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQjtJQUM3QixNQUFNLENBQUMsR0FB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bEMsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkQsSUFBSSxlQUFlLEVBQUU7WUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDTCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLGNBQWMsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO2FBQ25ELENBQUMsQ0FBQztTQUNOO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYztJQUMxQixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDTCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ3JCLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBkYXRlIGFuZCB0aW1lIGludG8gYSBVVEMgdGltZS4gXG4gKiBJZiB0aGUgZ2l2ZW4gdGltZSB6b25lIGlzIG51bGwgb3IgdW5kZWZpbmVkLCB0aGlzIFxuICogbWV0aG9kIHdpbGwgbm90IHVzZSB0aGUgbG9jYWwgdGltZSB6b25lLlxuICogQHBhcmFtIGRhdGVJbkxvY2FsIERhdGUgaW4gbG9jYWwgdGltZVxuICogQHBhcmFtIHRpbWVJbkxvY2FsIFRpbWUgaW4gbG9jYWwgdGltZVxuICogQHBhcmFtIHRpbWV6b25lIE9wdGlvbmFsIHRpbWUgem9uZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXRjKGRhdGVJbkxvY2FsOiBEYXRlLCB0aW1lSW5Mb2NhbDogRGF0ZSwgdGltZXpvbmU/OiBudW1iZXIpIHtcbiAgICAvLyBDb25zdHJ1Y3QgYSBuZXcgdGltZSBcbiAgICBjb25zdCB3b3JrVGltZSA9IG5ldyBEYXRlKGRhdGVJbkxvY2FsLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRhdGVJbkxvY2FsLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGVJbkxvY2FsLmdldERhdGUoKSxcbiAgICAgICAgdGltZUluTG9jYWwuZ2V0SG91cnMoKSxcbiAgICAgICAgdGltZUluTG9jYWwuZ2V0TWludXRlcygpKTtcbiAgICBjb25zdCB0aW1lV3JhcHBlciA9IG1vbWVudCh3b3JrVGltZSk7XG4gICAgLy8gVGhlIGFib3ZlIHRpbWUgc2hvdWxkIGJlIGludGVycHJldGVkIGluIHRoZSBnaXZlbiB0aW1lem9uZVxuICAgIGlmICh0aW1lem9uZSkge1xuICAgICAgICAvLyBVdGMgdGltZVxuICAgICAgICB0aW1lV3JhcHBlci5zdWJ0cmFjdCh0aW1lem9uZSwgJ2hvdXJzJyk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0byBVVEMgdGltZVxuICAgIGxldCB0aW1lSW5VdGMgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aW1lV3JhcHBlci55ZWFyKCksXG4gICAgICAgIHRpbWVXcmFwcGVyLm1vbnRoKCksXG4gICAgICAgIHRpbWVXcmFwcGVyLmRhdGUoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuaG91cigpLFxuICAgICAgICB0aW1lV3JhcHBlci5taW51dGUoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuc2Vjb25kKCkpKTtcblxuICAgIHJldHVybiB0aW1lSW5VdGM7XG59XG5cbi8qKlxuIEdldCB0aGUgdGltZXpvbmUgb2Zmc2V0IGJldHdlZW4gdGhlIGxvY2FsIHRpbWUgYW5kIFVUQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0KCkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG4gPSBkLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIC0gTWF0aC5mbG9vcihuIC8gNjApO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIGNvbW1vbmx5IHVzZWQgaW50ZXJ2YWwuXG4gKi9cbmV4cG9ydCBlbnVtIEludGVydmFsRW51bSB7XG4gICAgRGF5ID0gMTAsXG4gICAgV2VlayA9IDUwLFxuICAgIE1vbnRoID0gMTAwLFxuICAgIFllYXIgPSA1MDAsXG4gICAgQ3VzdG9tID0gMTAwMFxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIFVUQyB0aW1lIHRoaXMgbW9tZW50LlxuICogVGhpcyBtZXRob2QgdXNlcyB0aGUgY3VycmVudCB0aW1lIHpvbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVdGNOb3coKTogRGF0ZSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBvZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiBjb252ZXJ0VG9VdGMobm93LCBub3csIG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNEU1QoZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICBjb25zdCBqYW51YXJ5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGNvbnN0IGp1bHkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDYsIDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KGphbnVhcnksIGp1bHkpICE9PSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBsb2NhbCB0aW1lIHRvIFV0YyBzdHJpbmcuXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXRjU3RyaW5nKGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xufVxuXG5leHBvcnQgZW51bSBNb250aEVudW0ge1xuICAgIEphbnVhcnkgPSAxLFxuICAgIEZlYnJ1YXJ5LFxuICAgIE1hcmNoLFxuICAgIEFwcmlsLFxuICAgIE1heSxcbiAgICBKdW5lLFxuICAgIEp1bHksXG4gICAgQXVndXN0LFxuICAgIFNlcHRlbWJlcixcbiAgICBPY3RvYmVyLFxuICAgIE5vdmVtYmVyLFxuICAgIERlY2VtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aHNPZlllYXIoKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgZm9yICh2YXIgZW51bU1lbWJlciBpbiBNb250aEVudW0pIHtcbiAgICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXG4gICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW51bU1lbWJlcixcbiAgICAgICAgICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuJyArIE1vbnRoRW51bVtlbnVtTWVtYmVyXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuXG5leHBvcnQgZW51bSBEYXlPZldlZWtFbnVtIHtcbiAgICBTdW5kYXkgPSAwLFxuICAgIE1vbmRheSxcbiAgICBUdWVzZGF5LFxuICAgIFdlZG5lc2RheSxcbiAgICBUaHVyc2RheSxcbiAgICBGcmlkYXksXG4gICAgU2F0dXJkYXlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c09mV2VlaygpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBlbnVtTWVtYmVyIGluIERheU9mV2Vla0VudW0pIHtcbiAgICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXG4gICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW51bU1lbWJlcixcbiAgICAgICAgICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuJyArIERheU9mV2Vla0VudW1bZW51bU1lbWJlcl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzT2ZNb250aCgpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDMyOyBpKyspIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IGksXG4gICAgICAgICAgICB0ZXh0OiBpLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG4iXX0=