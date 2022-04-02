/**
 * 指定した範囲の休日を取得する
 * @param Date startTime
 * @param Date endTime
 * @return bool
 */
function getEvents(startTime, endTime) {
  startTime.setHours(0);
  startTime.setMinutes(0);
  startTime.setSeconds(0);
  endTime.setHours(23);
  endTime.setMinutes(59);
  endTime.setSeconds(59);

  const cal = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com');
  return cal.getEvents(startTime, endTime);
}

/**
 * 指定した日付が休日かどうか
 * @param Date date
 * @return bool
 */
function isHoliday(date) {
  if (date.getDay() == 0 || date.getDay() == 6) {
    return true;
  }

  return isSpecialHoliday(date);
}

/**
 * 指定した日付が祝日かどうか
 * @param Date date
 * @return bool
 */
function isSpecialHoliday(date) {
  const cal = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com');
  const events = cal.getEventsForDay(date);

  return events.length > 0;
}
