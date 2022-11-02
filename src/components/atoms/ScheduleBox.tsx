import styles from "./ScheduleBox.module.scss"

export type ScheduleBoxProps = {
  title: string
  time: string
  detail?: string
}

export const ScheduleBox: React.FC<ScheduleBoxProps> = ({title, time, detail}) => {
  const timeObj = new Date(time)
  return (
    <details className={styles["details"]} >
      <summary
        className={styles["summary"]}
      >
        <h2 className="schedule-box--title">{title}</h2>
        <time className="schedule-box--time">{timeObj.toLocaleString("ja-JP")}</time>
      </summary>
      <p>{detail}</p>
    </details>
  );
}

