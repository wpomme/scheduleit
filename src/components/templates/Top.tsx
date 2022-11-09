import styles from "./Top.module.scss"
import {ScheduleList, ScheduleListProps} from "../molecules/ScheduleList";
import {Button, ButtonProps} from "../atoms/Button";

export type TopProps = {
  schedules: ScheduleListProps["schedules"]
  onClick: ButtonProps["onClick"]
  isDefaultView: boolean
}

export const Top: React.FC<TopProps> = ({schedules, onClick, isDefaultView}) => {
  return (
    <main className={styles["main"]}>
      <h1 className={styles["title"]}>Schedule It!</h1>
      <div className={styles["buttons"]}>
        <Button
          onClick={onClick}
          disabled={isDefaultView}
        >
          現在のイベント
        </Button>
        <Button
          onClick={onClick}
          disabled={!isDefaultView}
        >
          過去のイベント
        </Button>
      </div>
      <ScheduleList schedules={schedules} />
    </main>
  );
}

