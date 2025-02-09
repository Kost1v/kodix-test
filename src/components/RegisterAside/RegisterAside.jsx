import css from "./RegisterAside.module.css";
const RegisterAside = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Get Your FREE 30-Days Trial Now!</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11.41 16.09V18H8.74V16.07C7.03 15.71 5.58 14.61 5.47 12.67H7.43C7.53 13.72 8.25 14.54 10.08 14.54C12.04 14.54 12.48 13.56 12.48 12.95C12.48 12.12 12.04 11.34 9.81 10.81C7.33 10.21 5.63 9.19 5.63 7.14C5.63 5.42 7.02 4.3 8.74 3.93V2H11.41V3.95C13.27 4.4 14.2 5.81 14.26 7.34H12.3C12.25 6.23 11.66 5.47 10.08 5.47C8.58 5.47 7.68 6.15 7.68 7.11C7.68 7.95 8.33 8.5 10.35 9.02C12.37 9.54 14.53 10.41 14.53 12.93C14.52 14.76 13.15 15.76 11.41 16.09Z"
                fill="#1FFF1A"
              />
            </svg>
          </div>
          <div>
            <p className={css.titleList}>Absolutely FREE</p>
            <p className={css.textList}>
              No hidden charges, No credit card required
            </p>
          </div>
        </li>
        <li className={css.item}>
          <div>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 16V7H13V0H20L18 5H20L15 16ZM13 9V16H2C0.9 16 0 15.1 0 14V11C0 9.9 0.9 9 2 9H13ZM4.25 11.75H2.75V13.25H4.25V11.75ZM11 0V7H2C0.9 7 0 6.1 0 5V2C0 0.9 0.9 0 2 0H11ZM4.25 2.75H2.75V4.25H4.25V2.75Z"
                fill="#1FFF1A"
              />
            </svg>
          </div>
          <div>
            <p className={css.titleList}>Fast & Easy</p>
            <p className={css.textList}>
              Get access instantly, no downloads required
            </p>
          </div>
        </li>
        <li className={css.item}>
          <div>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6ZM15 18H3V16.6C3 14.6 7 13.5 9 13.5C11 13.5 15 14.6 15 16.6V18Z"
                fill="#1FFF1A"
              />
            </svg>
          </div>
          <div>
            <p className={css.titleList}>Your Own Data</p>
            <p className={css.textList}>
              Enjoy the Free Trial with your company data
            </p>
          </div>
        </li>
        <li className={css.item}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14.23 16L10 13.45L5.77 16L6.89 11.19L3.16 7.96L8.08 7.54L10 3L11.92 7.53L16.84 7.95L13.11 11.18L14.23 16Z"
                fill="#1FFF1A"
              />
            </svg>
          </div>
          <div>
            <p className={css.titleList}>Unlimited Features</p>
            <p className={css.textList}>
              Access all features of the world&apos;s #1 business software!
            </p>
          </div>
        </li>
      </ul>
      <p className={css.contact}>
        Call us at <span className={css.number}>800 1301 448</span>
      </p>
    </div>
  );
};

export default RegisterAside;
