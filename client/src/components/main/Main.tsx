import {ReactNode} from "react";

import styles from "./Main.module.css";

export const Main = ({children}: {children: ReactNode}) => {
  return <main className={styles.main}>{children}</main>;
};
