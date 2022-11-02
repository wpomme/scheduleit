import {sortByDecsDate} from "./sort-by-decs-date"

describe("sortByDecsDate", () => {
  it("sort object", () => {
    const givenFirstObjWithDate = {
      "title": "first",
      "time": "2022-11-07T09:00:00.000+09:00",
    }
    const givenSecondObjWithDate = {
      "title": "second",
      "time": "2022-11-05T09:00:00.000+09:00",
    }
    const givenThirdObjWithDate = {
      "title": "third",
      "time": "2022-11-09T09:00:00.000+09:00",
    }
    const sortedGivenObj = [
      givenFirstObjWithDate,
      givenSecondObjWithDate,
      givenThirdObjWithDate,
    ].sort((a, b) => sortByDecsDate(a.time, b.time))
    expect(sortedGivenObj).toEqual([
      givenSecondObjWithDate,
      givenFirstObjWithDate,
      givenThirdObjWithDate,
    ])
  })
})
