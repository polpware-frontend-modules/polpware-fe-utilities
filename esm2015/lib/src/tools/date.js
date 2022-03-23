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
    const workTime = new Date(dateInLocal.getFullYear(), dateInLocal.getMonth(), dateInLocal.getDay(), timeInLocal.getHours(), timeInLocal.getMinutes());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMvIiwic291cmNlcyI6WyJsaWIvc3JjL3Rvb2xzL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsV0FBaUIsRUFBRSxXQUFpQixFQUFFLFFBQWlCO0lBQ2hGLHdCQUF3QjtJQUN4QixNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQy9DLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFDdEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUNwQixXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyw2REFBNkQ7SUFDN0QsSUFBSSxRQUFRLEVBQUU7UUFDVixXQUFXO1FBQ1gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDM0M7SUFFRCxzQkFBc0I7SUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2hELFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFDbkIsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUNqQixXQUFXLENBQUMsSUFBSSxFQUFFLEVBQ2xCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFDcEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUzQixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCO0lBQzdCLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDaEMsT0FBTyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFlBTVg7QUFORCxXQUFZLFlBQVk7SUFDcEIsOENBQVEsQ0FBQTtJQUNSLGdEQUFTLENBQUE7SUFDVCxtREFBVyxDQUFBO0lBQ1gsaURBQVUsQ0FBQTtJQUNWLHNEQUFhLENBQUE7QUFDakIsQ0FBQyxFQU5XLFlBQVksS0FBWixZQUFZLFFBTXZCO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFNBQVM7SUFDckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QixNQUFNLE1BQU0sR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25DLE9BQU8sWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN2RSxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNoRSxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVU7SUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUIsQ0FBQztBQUVELE1BQU0sQ0FBTixJQUFZLFNBYVg7QUFiRCxXQUFZLFNBQVM7SUFDakIsK0NBQVcsQ0FBQTtJQUNYLGlEQUFRLENBQUE7SUFDUiwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLHVDQUFHLENBQUE7SUFDSCx5Q0FBSSxDQUFBO0lBQ0oseUNBQUksQ0FBQTtJQUNKLDZDQUFNLENBQUE7SUFDTixtREFBUyxDQUFBO0lBQ1QsZ0RBQU8sQ0FBQTtJQUNQLGtEQUFRLENBQUE7SUFDUixrREFBUSxDQUFBO0FBQ1osQ0FBQyxFQWJXLFNBQVMsS0FBVCxTQUFTLFFBYXBCO0FBRUQsTUFBTSxVQUFVLGVBQWU7SUFDM0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUU7UUFDOUIsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkQsSUFBSSxlQUFlLEVBQUU7WUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDTCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLGNBQWMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQy9DLENBQUMsQ0FBQztTQUNOO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFHRCxNQUFNLENBQU4sSUFBWSxhQVFYO0FBUkQsV0FBWSxhQUFhO0lBQ3JCLHFEQUFVLENBQUE7SUFDVixxREFBTSxDQUFBO0lBQ04sdURBQU8sQ0FBQTtJQUNQLDJEQUFTLENBQUE7SUFDVCx5REFBUSxDQUFBO0lBQ1IscURBQU0sQ0FBQTtJQUNOLHlEQUFRLENBQUE7QUFDWixDQUFDLEVBUlcsYUFBYSxLQUFiLGFBQWEsUUFReEI7QUFHRCxNQUFNLFVBQVUsYUFBYTtJQUN6QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksVUFBVSxJQUFJLGFBQWEsRUFBRTtRQUNsQyxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuRCxJQUFJLGVBQWUsRUFBRTtZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNMLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsY0FBYyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1NBQ047S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjO0lBQzFCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNMLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7U0FDckIsQ0FBQyxDQUFDO0tBQ047SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdGltZSBpbnRvIGEgVVRDIHRpbWUuIFxuICogSWYgdGhlIGdpdmVuIHRpbWUgem9uZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgdGhpcyBcbiAqIG1ldGhvZCB3aWxsIG5vdCB1c2UgdGhlIGxvY2FsIHRpbWUgem9uZS5cbiAqIEBwYXJhbSBkYXRlSW5Mb2NhbCBEYXRlIGluIGxvY2FsIHRpbWVcbiAqIEBwYXJhbSB0aW1lSW5Mb2NhbCBUaW1lIGluIGxvY2FsIHRpbWVcbiAqIEBwYXJhbSB0aW1lem9uZSBPcHRpb25hbCB0aW1lIHpvbmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1V0YyhkYXRlSW5Mb2NhbDogRGF0ZSwgdGltZUluTG9jYWw6IERhdGUsIHRpbWV6b25lPzogbnVtYmVyKSB7XG4gICAgLy8gQ29uc3RydWN0IGEgbmV3IHRpbWUgXG4gICAgY29uc3Qgd29ya1RpbWUgPSBuZXcgRGF0ZShkYXRlSW5Mb2NhbC5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlSW5Mb2NhbC5nZXRNb250aCgpLFxuICAgICAgICBkYXRlSW5Mb2NhbC5nZXREYXkoKSxcbiAgICAgICAgdGltZUluTG9jYWwuZ2V0SG91cnMoKSxcbiAgICAgICAgdGltZUluTG9jYWwuZ2V0TWludXRlcygpKTtcbiAgICBjb25zdCB0aW1lV3JhcHBlciA9IG1vbWVudCh3b3JrVGltZSk7XG4gICAgLy8gVGhlIGFib3ZlIHRpbWUgc2hvdWxkIGJlIGludGVycHJldGVkIGluIHRoZSBnaXZlbiB0aW1lem9uZVxuICAgIGlmICh0aW1lem9uZSkge1xuICAgICAgICAvLyBVdGMgdGltZVxuICAgICAgICB0aW1lV3JhcHBlci5zdWJ0cmFjdCh0aW1lem9uZSwgJ2hvdXJzJyk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0byBVVEMgdGltZVxuICAgIGxldCB0aW1lSW5VdGMgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aW1lV3JhcHBlci55ZWFyKCksXG4gICAgICAgIHRpbWVXcmFwcGVyLm1vbnRoKCksXG4gICAgICAgIHRpbWVXcmFwcGVyLmRheSgpLFxuICAgICAgICB0aW1lV3JhcHBlci5ob3VyKCksXG4gICAgICAgIHRpbWVXcmFwcGVyLm1pbnV0ZSgpLFxuICAgICAgICB0aW1lV3JhcHBlci5zZWNvbmQoKSkpO1xuXG4gICAgcmV0dXJuIHRpbWVJblV0Yztcbn1cblxuLyoqXG4gR2V0IHRoZSB0aW1lem9uZSBvZmZzZXQgYmV0d2VlbiB0aGUgbG9jYWwgdGltZSBhbmQgVVRDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXQoKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICByZXR1cm4gLSBNYXRoLmZsb29yKG4gLyA2MCk7XG59XG5cbi8qKlxuICogQSBzZXQgb2YgY29tbW9ubHkgdXNlZCBpbnRlcnZhbC5cbiAqL1xuZXhwb3J0IGVudW0gSW50ZXJ2YWxFbnVtIHtcbiAgICBEYXkgPSAxMCxcbiAgICBXZWVrID0gNTAsXG4gICAgTW9udGggPSAxMDAsXG4gICAgWWVhciA9IDUwMCxcbiAgICBDdXN0b20gPSAxMDAwXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgVVRDIHRpbWUgdGhpcyBtb21lbnQuXG4gKiBUaGlzIG1ldGhvZCB1c2VzIHRoZSBjdXJyZW50IHRpbWUgem9uZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFV0Y05vdygpOiBEYXRlIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1V0Yyhub3csIG5vdywgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0RTVChkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIGNvbnN0IGphbnVhcnkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgY29uc3QganVseSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgNiwgMSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoamFudWFyeSwganVseSkgIT09IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGxvY2FsIHRpbWUgdG8gVXRjIHN0cmluZy5cbiAqIEBwYXJhbSBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9VdGNTdHJpbmcoZGF0ZTogRGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBlbnVtIE1vbnRoRW51bSB7XG4gICAgSmFudWFyeSA9IDEsXG4gICAgRmVicnVhcnksXG4gICAgTWFyY2gsXG4gICAgQXByaWwsXG4gICAgTWF5LFxuICAgIEp1bmUsXG4gICAgSnVseSxcbiAgICBBdWd1c3QsXG4gICAgU2VwdGVtYmVyLFxuICAgIE9jdG9iZXIsXG4gICAgTm92ZW1iZXIsXG4gICAgRGVjZW1iZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoc09mWWVhcigpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBlbnVtTWVtYmVyIGluIE1vbnRoRW51bSkge1xuICAgICAgICB2YXIgaXNWYWx1ZVByb3BlcnR5ID0gcGFyc2VJbnQoZW51bU1lbWJlciwgMTApID49IDBcbiAgICAgICAgaWYgKGlzVmFsdWVQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbnVtTWVtYmVyLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi4nICsgTW9udGhFbnVtW2VudW1NZW1iZXJdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5cbmV4cG9ydCBlbnVtIERheU9mV2Vla0VudW0ge1xuICAgIFN1bmRheSA9IDAsXG4gICAgTW9uZGF5LFxuICAgIFR1ZXNkYXksXG4gICAgV2VkbmVzZGF5LFxuICAgIFRodXJzZGF5LFxuICAgIEZyaWRheSxcbiAgICBTYXR1cmRheVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzT2ZXZWVrKCkge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAodmFyIGVudW1NZW1iZXIgaW4gRGF5T2ZXZWVrRW51bSkge1xuICAgICAgICB2YXIgaXNWYWx1ZVByb3BlcnR5ID0gcGFyc2VJbnQoZW51bU1lbWJlciwgMTApID49IDBcbiAgICAgICAgaWYgKGlzVmFsdWVQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbnVtTWVtYmVyLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi4nICsgRGF5T2ZXZWVrRW51bVtlbnVtTWVtYmVyXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNPZk1vbnRoKCkge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzI7IGkrKykge1xuICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZTogaSxcbiAgICAgICAgICAgIHRleHQ6IGkudG9TdHJpbmcoKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbiJdfQ==