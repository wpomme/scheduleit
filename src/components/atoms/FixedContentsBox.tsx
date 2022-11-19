import React from "react";
import styles from "./FixedContentsBox.module.scss";

export type FixedContentsBoxProps = {
  title: string;
  detail?: string;
};

export const FixedContentsBox: React.FC<FixedContentsBoxProps> = ({
  title,
  detail,
}) => {
  return (
    <details className={styles["fixed-contents-box__details"]}>
      <summary className={styles["fixed-contents-box__summary"]}>
        <h2 className={styles["fixed-contents-box__title"]}>{title}</h2>
      </summary>
      <article
        className={styles["fixed-contents-box__detail"]}
        dangerouslySetInnerHTML={{
          __html: detail ? detail : "",
        }}
      ></article>
    </details>
  );
};
