import styles from "./content.module.css";
let Content = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Content;
