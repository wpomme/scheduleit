import styles from "./ScheduleBox.module.scss"
import {formatDate} from "../../utils/time/format-date";

export type ScheduleBoxProps = {
  title: string
  time: string
  detail?: string
}

export const ScheduleBox: React.FC<ScheduleBoxProps> = ({title, time, detail}) => {
  return (
    <details className={styles["schedule-box__details"]}>
      <summary className={styles["schedule-box__summary"]}>
        <h2 className={styles["schedule-box__title"]}>{title}</h2>
        <time className={styles["schedule-box__time"]}>{formatDate(time)}</time>
      </summary>
      <p className={styles["schedule-box__detail"]}>{detail}</p>
    </details>
  );
}

