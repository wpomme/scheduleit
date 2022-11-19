import React from "react";
import styles from "./ScheduleList.module.scss";
import { ScheduleBoxProps, ScheduleBox } from "../atoms/ScheduleBox";
import {
  FixedContentsBox,
  FixedContentsBoxProps,
} from "../atoms/FixedContentsBox";

export type ScheduleListProps = {
  schedules: ScheduleBoxProps[];
  fixedContents?: FixedContentsBoxProps;
};

export const ScheduleList: React.FC<ScheduleListProps> = ({
  schedules,
  fixedContents,
}) => {
  return (
    <ol className={styles["schedule-list"]}>
      {fixedContents && (
        <li className={styles["schedule-list-item"]} key="fixed-schedule">
          <FixedContentsBox {...fixedContents} />
        </li>
      )}
      {schedules.map((props, index) => {
        return (
          <li className={styles["schedule-list-item"]} key={index.toString()}>
            <ScheduleBox {...props} />
          </li>
        );
      })}
    </ol>
  );
};
