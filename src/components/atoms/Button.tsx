import React from "react"
import styles from "./Button.module.scss"

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {children, onClick} = props
  return (
    <button
      className={styles["button"]}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

