import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] ml-24 md:ml-48 relative z-[5] mx-16" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}><span className="text-gradient">Anonymously</span> spend your crypto on whatever you like</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Through the use of the <span className="text-gradient">non-KYC</span> NXG Debit Card you can easily pay for anything, anywhere. <br/><span className="text-gradient">Holders of $NXG</span> can utilize both a virtual and physical NXG Debit Card in their daily use.</p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="appstore" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="playstore" className="w-[128px] h-[42px] object-contain cursor-pointer" />

      </div>
    </div>
  </section>
)

export default Billing;
