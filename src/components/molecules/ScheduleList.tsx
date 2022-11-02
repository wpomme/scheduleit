import styles from "./ScheduleList.module.scss"
import {ScheduleBoxProps, ScheduleBox} from "../atoms/ScheduleBox"

export type ScheduleListProps = {
  schedules: ScheduleBoxProps[]
}

export const ScheduleList: React.FC<ScheduleListProps> = ({schedules}) => {
  return (
    <ol className={styles["schedule-list"]}>
      {schedules.map((props, index) => {
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

