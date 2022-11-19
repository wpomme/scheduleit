import { isAfterTime } from "./is-after-time";

describe("isAfterTime", () => {
  it("return true if the given date a is bigger than the given date b.", () => {
    const givenDateA = "2022-11-05T09:00:00.000+09:00";
    const givenDateB = "2000-11-05T09:00:00.000+09:00";
    expect(isAfterTime(givenDateA, givenDateB)).toBeTruthy();
  });
});
