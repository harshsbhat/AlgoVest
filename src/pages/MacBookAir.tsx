import { FunctionComponent } from "react";
import styles from "./MacBookAir.module.css";

const MacBookAir: FunctionComponent = () => {
  return (
    <div className={styles.macbookAir3}>
      <div className={styles.subFrame}>
        <div className={styles.innerFrame}>
          <div className={styles.growRectangle}>
            <div className={styles.wrapperGrow22}>
              <img
                className={styles.grow22}
                loading="lazy"
                alt=""
                src="/grow-2-2@2x.png"
              />
            </div>
            <div className={styles.fintechObsessionSaturParent}>
              <h1 className={styles.fintechObsessionContainer}>
                <p className={styles.fintechObsession}>
                  FinTech Obsession 🇮🇳🏴
                </p>
                <p className={styles.saturdaysWithAlgovest}>
                  Saturdays with AlgoVest
                </p>
              </h1>
              <div className={styles.fuelYourFinancial}>
                Fuel your financial future with AlgoVest’s AI powered essential
                guide to the ever-evolving world of FinTech.
              </div>
            </div>
          </div>
          <div className={styles.parentFrame}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-2.svg"
              />
              <input
                className={styles.enterYourEmail}
                placeholder="Enter your email address"
                type="text"
              />
            </div>
            <button className={styles.subscribeButton}>
              <img
                className={styles.subscribeButtonChild}
                alt=""
                src="/rectangle-4.svg"
              />
              <div className={styles.subscribe}>Subscribe</div>
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.image2Icon}
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
    </div>
  );
};

export default MacBookAir;
