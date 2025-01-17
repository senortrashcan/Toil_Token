import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="mb-20">
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-primary`}
      >
        <img src={icon} alt="icon" className="w-[100%] h-[100%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          We Toiled Away, <br className="sm:block hidden" />
          For Your Saftey
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          The $TOIL contract is{" "}
          <span className="text-gradient">100% community-owned</span>, which
          means that it can not be controlled by anyone. <br />
          A Leaner, Meaner{" "}
          <span className="text-gradient">Cryptocurrency.</span>
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          Total Supply:{" "}
          <span className="font-sans text-gradient">10,000 $TOIL</span>
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
