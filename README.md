# GasHoliday
Google Apps Scriptの祝日関連ライブラリ

## 事前準備
GASを使いたいユーザのカレンダーに[ja.japanese#holiday@group.v.calendar.google.com](ja.japanese#holiday@group.v.calendar.google.com)のカレンダーを登録

## スクリプトID
`1k3mUTOsjAy_4q3ga1jIEDoFjClLFpSP47VR1_luS4IMbzNfRoNi7DxCi`

## GAS
https://docs.google.com/document/d/1iP2wL4F3WckMQEXGAnMgokY9L20ixJR_ldFKX24DjyY/edit?usp=sharing

## Example
```JavaScript
const events = holiday.getEvents(new Date('2022/02/01'), new Date('2022/03/31'));
```

```JavaScript
const events = holiday.isHoliday(new Date('2022/02/01'));
```

```JavaScript
const events = holiday.isSpecialHoliday(new Date('2022/02/01'));
```