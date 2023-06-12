import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section
    className={`${styles.flexCenter} my-4 pt-20 pb-10 mx-20`}
    id="socials"
  >
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-[192px] min-[120px]`}
        >
          <a
            href={client.link}
            alt="social media link"
            rel="noref"
            target="_blank"
          >
            <img
              src={client.logo}
              alt="client"
              className=" sm:w-[100px] w-[100px] object-contain"
            />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
