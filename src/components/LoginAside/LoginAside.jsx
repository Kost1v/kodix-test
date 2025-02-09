import css from "./LoginAside.module.css";
const LoginAside = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Kodix <span className={css.pro}>PRO</span></p>
      <p className={css.text}>Unlimited traffic, strategic support, and AI-driven upsells</p>
      <a href="#" className={css.link}>Learn More</a>
    </div>
  );
};

export default LoginAside;
