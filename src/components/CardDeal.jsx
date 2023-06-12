import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Perform <span className="text-gradient">instant transactions</span> <br className="sm:block hidden" />with the NXG Swap
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The NXG Swap is a lightning fast DEX which is ran on custom nodes accessing the MEMPool. <br />With the optimal user-settings, this ensures the <span className="text-gradient">fastest transaction speeds possible.</span></p>
      <Button styles="mt-10" /> 
    </div>
    <div className={layout.sectionImg}>
    <img src={card} alt="card" className="w-[100%] h-[100%] mr-24" />

    </div>
  </section>
)

export default CardDeal;
