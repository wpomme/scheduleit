import styles from "./Top.module.scss"
import {ScheduleList, ScheduleListProps} from "../molecules/ScheduleList";
import {Button} from "../atoms/Button";

export type TopProps = {
  schedules: ScheduleListProps
}

export const Top: React.FC<TopProps> = ({schedules}) => {
  return (
    <main className={styles["main"]}>
      <h1 className={styles["title"]}>Schedule It!</h1>
      <Button
        onClick={() => {
          console.log("pass")
        }}
      >
        過去のイベント
      </Button>
      <ScheduleList
        {...schedules}
      />
    </main>
  );
}

