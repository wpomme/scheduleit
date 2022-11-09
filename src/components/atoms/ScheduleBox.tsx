import styles from "./ScheduleBox.module.scss"
import {formatDate} from "../../utils/time/format-date";
import LocationOnIcon from "../../../public/svg/location-on-20-pixel.svg";

export type ScheduleBoxProps = {
  title: string
  startDate: string
  detail?: string
  place?: string
}

export const ScheduleBox: React.FC<ScheduleBoxProps> = ({title, startDate, detail, place}) => {
  return (
    <details className={styles["schedule-box__details"]}>
      <summary className={styles["schedule-box__summary"]}>
        <h2 className={styles["schedule-box__title"]}>{title}</h2>
        <time className={styles["schedule-box__time"]}>{formatDate(startDate)}</time>
        {place && (
          <div className={styles["schedule-box__place"]}>
            <LocationOnIcon
              width={20}
              height={20}
            />
            <p>{place}</p>
          </div>
        )}
      </summary>
      <article
        className={styles["schedule-box__detail"]}
        dangerouslySetInnerHTML={{
          __html: detail,
        }}>
      </article>
    </details>
  );
}

