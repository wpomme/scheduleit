import styles from "./Top.module.scss"
import {ScheduleList, ScheduleListProps} from "../molecules/ScheduleList";
import {Button} from "../atoms/Button";
import {sortByDecsDate} from "../../utils/time/sort-by-decs-date";
import {isAfterTime} from "../../utils/time/is-after-time";
import {useState} from "react"

export type TopProps = {
  schedules: ScheduleListProps
}

export const Top: React.FC<TopProps> = ({schedules}) => {
  const [isDefaultView, setIsDefaultView] =useState<boolean>(true)
  const nowISOString = new Date().toISOString()
  // TODO make isBeforeTime and sortByAscDate
  const pastSchedules = schedules
    .schedules
    .filter((s) => !isAfterTime(s.time, nowISOString))
    .sort((a, b) => sortByDecsDate(b.time, a.time))
  const nowSchedules = schedules
    .schedules
    .filter((s) => isAfterTime(s.time, nowISOString))
    .sort((a, b) => sortByDecsDate(a.time, b.time))
  return (
    <main className={styles["main"]}>
      <h1 className={styles["title"]}>Schedule It!</h1>
      <Button
        onClick={() => {
          setIsDefaultView(!isDefaultView)
        }}
      >
        {isDefaultView ? "過去のイベント" : "現在のイベント"}
      </Button>
      <ScheduleList
        schedules={isDefaultView ? nowSchedules : pastSchedules}
      />
    </main>
  );
}

