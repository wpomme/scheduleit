import styles from "./Top.module.scss"
import {ScheduleList, ScheduleListProps} from "../molecules/ScheduleList";

export type TopProps = {
  schedules: ScheduleListProps
}

export const Top: React.FC<TopProps> = ({schedules}) => {
  return (
    <main className={styles["main"]}>
      <h1 className={styles["title"]}>Schedule It!</h1>
      <ScheduleList
        {...schedules}
      />
    </main>
  );
}

