import { useState } from "react";
import styles from './Accordian.module.scss'
interface accordian{
    title:string;
    content:string;
}
const Accordian = ({ title, content }: accordian) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className={styles.accordian}>
      <div onClick={() => setShowText(!showText)} className={styles["accordian-heading"]}>
        <div>{title}</div>
        <div>{!showText ? "+" : "-"}</div>
      </div>
      {showText && <div className={styles["accordion-content"]}>{content}</div>}
    </div>
  );
};

export default Accordian;
