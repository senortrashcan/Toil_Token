import styles from "../style";
import Button2 from "./Button2";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mx-14 py-16 sm:mx-32 md:w-[1000px] w-[300px] items-center justify-center`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Join the conquest of the canines and the blockchain!
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        You will find the mechanical warriors all over the internet. Though our
        headquarter is on Telegram.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button2 />
    </div>
  </section>
);

export default CTA;
