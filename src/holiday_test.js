function testGetEvents() {
  const tests = [
    { "input": {"startTime" : new Date('2022/03/14'), "endTime" : new Date('2022/03/14')} , "want": 0 },
    { "input": {"startTime" : new Date('2022/03/21'), "endTime" : new Date('2022/03/21')} , "want": 1 }, 
    { "input": {"startTime" : new Date('2022/02/01'), "endTime" : new Date('2022/03/31')} , "want": 3 }, 
  ];
  for (const test of tests) {
    const got = getEvents(test.input.startTime, test.input.endTime);
    if (got.length != test.want) {
      console.error("[NG] input:{ startTime:" + test.input.startTime + " endTime:" + test.input.endTime + "} want:" + test.want + " got:" + got.length);
    }
  }
}

function testIsHoliday() {
  const tests = [
    { "input": new Date('2022/03/14'), "want": false }, // ホワイトデー 月曜日 = 平日
    { "input": new Date('2022/03/19'), "want": true }, // 土曜日 = 休日
    { "input": new Date('2022/03/20'), "want": true }, // 日曜日 = 休日
    { "input": new Date('2022/03/21'), "want": true }, // 春分の日 月曜日= 祝日
  ];
  for (const test of tests) {
    const got = isHoliday(test.input);
    if (got != test.want) {
      console.error("[NG] input:" + test.input + " want:" + test.want + " got:" + got);
    }
  }
}

function testIsSpecialHoliday() {
  const tests = [
    { "input": new Date('2022/03/14'), "want": false }, // ホワイトデー 月曜日 = 平日
    { "input": new Date('2022/03/19'), "want": false }, // 土曜日 = 休日
    { "input": new Date('2022/03/20'), "want": false }, // 日曜日 = 休日
    { "input": new Date('2022/03/21'), "want": true }, // 春分の日 月曜日= 祝日
  ];
  for (const test of tests) {
    const got = isSpecialHoliday(test.input);
    if (got != test.want) {
      console.error("[NG] input:" + test.input + " want:" + test.want + " got:" + got);
    }
  }
}