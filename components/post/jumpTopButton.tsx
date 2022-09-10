import styles from '../../styles/JumpTopButton.module.css';

const JumpTopButton = () => {
  return (
    <a href="#top" className={styles.jumpTopButton}>
      &uarr;
      <span className="visually-hidden">Return to top</span>
    </a>
  );
};

export default JumpTopButton;
