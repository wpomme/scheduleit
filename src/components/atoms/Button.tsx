import styles from "./Button.module.scss"

export type ButtonProps = {
  children: React.ReactNode
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button
      className={styles["button"]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

