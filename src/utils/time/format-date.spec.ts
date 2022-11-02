import {formatDate} from "./format-date";

describe("formatDate", () => {
  it("Format and Print Date exactly if ISO formatted date is given.", () => {
    const givenDate = "2022-11-05T09:00:00.000+09:00"
    expect(formatDate(givenDate)).toBe("2022年11月5日(土) 09:00")
  })
})
