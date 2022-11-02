import styles from "./ScheduleList.module.scss"
import {ScheduleBoxProps, ScheduleBox} from "../atoms/ScheduleBox"

export type ScheduleListProps = {
  schedules: ScheduleBoxProps[]
}

const sortByDecsDate = (a: string, b: string) => {
  return (
      Date.parse(a) - Date.parse(b)
  )
}

export const ScheduleList: React.FC<ScheduleListProps> = ({schedules}) => {
  const sortedSchedules = schedules.sort((a, b) => sortByDecsDate(a.time, b.time))
  return (
    <ol className={styles["schedule-list"]}>
      {sortedSchedules.map((props, index) => {
        return (
          <li
            className={styles["schedule-list-item"]}
            key={index.toString()}
          >
            <ScheduleBox {...props}/>
          </li>
        );
      })}
    </ol>
  );
}

