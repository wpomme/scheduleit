import styles from "./ScheduleBox.module.scss"
import {formatDate} from "../../utils/time/format-date";

export type ScheduleBoxProps = {
  title: string
  time: string
  detail?: string
}

export const ScheduleBox: React.FC<ScheduleBoxProps> = ({title, time, detail}) => {
  return (
    <details className={styles["details"]}>
      <summary className={styles["summary"]}>
        <h2 className="schedule-box--title">{title}</h2>
        <time className="schedule-box--time">{formatDate(time)}</time>
      </summary>
      <p>{detail}</p>
    </details>
  );
}

