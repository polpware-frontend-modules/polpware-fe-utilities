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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMvIiwic291cmNlcyI6WyJzcmMvbGliL3NyYy90b29scy9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLFdBQWlCLEVBQUUsV0FBaUIsRUFBRSxRQUFpQjtJQUNoRix3QkFBd0I7SUFDeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUMvQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFDcEIsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUN0QixXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5QixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsNkRBQTZEO0lBQzdELElBQUksUUFBUSxFQUFFO1FBQ1YsV0FBVztRQUNYLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNDO0lBRUQsc0JBQXNCO0lBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUNoRCxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQ25CLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFDakIsV0FBVyxDQUFDLElBQUksRUFBRSxFQUNsQixXQUFXLENBQUMsTUFBTSxFQUFFLEVBQ3BCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0IsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQjtJQUM3QixNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2hDLE9BQU8sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLDhDQUFRLENBQUE7SUFDUixnREFBUyxDQUFBO0lBQ1QsbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7QUFDZCxDQUFDLEVBTFcsWUFBWSxLQUFaLFlBQVksUUFLdkI7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsU0FBUztJQUNyQixNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sTUFBTSxHQUFHLGlCQUFpQixFQUFFLENBQUM7SUFDbkMsT0FBTyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7SUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZFLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ2hFLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVTtJQUN6QyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdpdmVuIGRhdGUgYW5kIHRpbWUgaW50byBhIFVUQyB0aW1lLiBcbiAqIElmIHRoZSBnaXZlbiB0aW1lIHpvbmUgaXMgbnVsbCBvciB1bmRlZmluZWQsIHRoaXMgXG4gKiBtZXRob2Qgd2lsbCBub3QgdXNlIHRoZSBsb2NhbCB0aW1lIHpvbmUuXG4gKiBAcGFyYW0gZGF0ZUluTG9jYWwgRGF0ZSBpbiBsb2NhbCB0aW1lXG4gKiBAcGFyYW0gdGltZUluTG9jYWwgVGltZSBpbiBsb2NhbCB0aW1lXG4gKiBAcGFyYW0gdGltZXpvbmUgT3B0aW9uYWwgdGltZSB6b25lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9VdGMoZGF0ZUluTG9jYWw6IERhdGUsIHRpbWVJbkxvY2FsOiBEYXRlLCB0aW1lem9uZT86IG51bWJlcikge1xuICAgIC8vIENvbnN0cnVjdCBhIG5ldyB0aW1lIFxuICAgIGNvbnN0IHdvcmtUaW1lID0gbmV3IERhdGUoZGF0ZUluTG9jYWwuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZUluTG9jYWwuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZUluTG9jYWwuZ2V0RGF5KCksXG4gICAgICAgIHRpbWVJbkxvY2FsLmdldEhvdXJzKCksXG4gICAgICAgIHRpbWVJbkxvY2FsLmdldE1pbnV0ZXMoKSk7XG4gICAgY29uc3QgdGltZVdyYXBwZXIgPSBtb21lbnQod29ya1RpbWUpO1xuICAgIC8vIFRoZSBhYm92ZSB0aW1lIHNob3VsZCBiZSBpbnRlcnByZXRlZCBpbiB0aGUgZ2l2ZW4gdGltZXpvbmVcbiAgICBpZiAodGltZXpvbmUpIHtcbiAgICAgICAgLy8gVXRjIHRpbWVcbiAgICAgICAgdGltZVdyYXBwZXIuc3VidHJhY3QodGltZXpvbmUsICdob3VycycpO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG8gVVRDIHRpbWVcbiAgICBsZXQgdGltZUluVXRjID0gbmV3IERhdGUoRGF0ZS5VVEModGltZVdyYXBwZXIueWVhcigpLFxuICAgICAgICB0aW1lV3JhcHBlci5tb250aCgpLFxuICAgICAgICB0aW1lV3JhcHBlci5kYXkoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuaG91cigpLFxuICAgICAgICB0aW1lV3JhcHBlci5taW51dGUoKSxcbiAgICAgICAgdGltZVdyYXBwZXIuc2Vjb25kKCkpKTtcblxuICAgIHJldHVybiB0aW1lSW5VdGM7XG59XG5cbi8qKlxuIEdldCB0aGUgdGltZXpvbmUgb2Zmc2V0IGJldHdlZW4gdGhlIGxvY2FsIHRpbWUgYW5kIFVUQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0KCkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG4gPSBkLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuIC0gTWF0aC5mbG9vcihuIC8gNjApO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIGNvbW1vbmx5IHVzZWQgaW50ZXJ2YWwuXG4gKi9cbmV4cG9ydCBlbnVtIEludGVydmFsRW51bSB7XG4gICAgRGF5ID0gMTAsXG4gICAgV2VlayA9IDUwLFxuICAgIE1vbnRoID0gMTAwLFxuICAgIFllYXIgPSA1MDBcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBVVEMgdGltZSB0aGlzIG1vbWVudC5cbiAqIFRoaXMgbWV0aG9kIHVzZXMgdGhlIGN1cnJlbnQgdGltZSB6b25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXRjTm93KCk6IERhdGUge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICByZXR1cm4gY29udmVydFRvVXRjKG5vdywgbm93LCBvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzRFNUKGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgY29uc3QgamFudWFyeSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBjb25zdCBqdWx5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCA2LCAxKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiBNYXRoLm1heChqYW51YXJ5LCBqdWx5KSAhPT0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbG9jYWwgdGltZSB0byBVdGMgc3RyaW5nLlxuICogQHBhcmFtIGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1V0Y1N0cmluZyhkYXRlOiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcbn1cbiJdfQ==