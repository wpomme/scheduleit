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
      <Button onClick={onClick} >
        {isDefaultView ? "過去のイベント" : "現在のイベント"}
      </Button>
      <ScheduleList schedules={schedules} />
    </main>
  );
}

