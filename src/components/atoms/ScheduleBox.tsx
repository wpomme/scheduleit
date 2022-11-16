import styles from "./ScheduleBox.module.scss"
import {formatDate} from "../../utils/time/format-date";
import LocationOnIcon from "../../../public/svg/location-on-20-pixel.svg";
import ScheduleIcon from "../../../public/svg/schedule-20-pixel.svg";

export type Image = {
  image: {
    url: string
    height?: number;
    width?: number;
  }
  alt: string
}

export type ScheduleBoxProps = {
  title: string
  startDate: string
  detail?: string
  place?: string
  images?: Image[]
}

const iconSize = 20

export const ScheduleBox: React.FC<ScheduleBoxProps> = ({title, startDate, detail, place, images}) => {
  return (
    <details className={styles["schedule-box__details"]}>
      <summary className={styles["schedule-box__summary"]}>
        <h2 className={styles["schedule-box__title"]}>{title}</h2>
        <div className={styles["schedule-box__icon-container"]}>
          <ScheduleIcon
            width={iconSize}
            height={iconSize}
          />
          <time className={styles["schedule-box__time"]}>{formatDate(startDate)}</time>
        </div>
        {place && (
          <div className={styles["schedule-box__icon-container"]}>
            <LocationOnIcon
              width={iconSize}
              height={iconSize}
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
      {images && (
        <div
          className={styles["schedule-box__image-set"]}
        >
          {images.map((props, index) => (
            <img
              src={props.image.url}
              alt={props.alt}
              key={index.toString()}
            />
          ))}
        </div>
      )}
    </details>
  );
}
