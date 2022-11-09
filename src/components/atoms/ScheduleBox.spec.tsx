import {ScheduleBox} from "./ScheduleBox"
import {render} from "@testing-library/react"
import '@testing-library/jest-dom'

describe("Render ScheduleBox", () => {
  test("should first", () => {
    const {getByRole} = render(
      <ScheduleBox
        title="First title"
        startDate="2022/11/01"
        detail="describe here"
        place="shibuya clubhouse"
      />
    )
    expect(getByRole("heading")).toHaveTextContent("First title")
  })
})
