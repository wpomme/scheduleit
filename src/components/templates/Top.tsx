import React from "react";
import styles from "./Top.module.scss";
import { ScheduleList, ScheduleListProps } from "../molecules/ScheduleList";
import { Button, ButtonProps } from "../atoms/Button";

export type TopProps = {
  schedules: ScheduleListProps["schedules"];
  fixedContents?: ScheduleListProps["fixedContents"];
  title?: string;
  onClick: ButtonProps["onClick"];
  isDefaultView: boolean;
};

export const Top: React.FC<TopProps> = ({
  schedules,
  fixedContents,
  title,
  onClick,
  isDefaultView,
}) => {
  return (
    <main className={styles["main"]}>
      <h1 className={styles["title"]}>{title ? title : "Schedule It"}</h1>
      <div className={styles["buttons"]}>
        <Button onClick={onClick} disabled={isDefaultView}>
          予定
        </Button>
        <Button onClick={onClick} disabled={!isDefaultView}>
          過去
        </Button>
      </div>
      <ScheduleList schedules={schedules} fixedContents={fixedContents} />
    </main>
  );
};
