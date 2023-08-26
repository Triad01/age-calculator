import classes from "./Attribution.module.scss";

const Attribution = () => {
  const url = "https://www.frontendmentor.io?ref=challenge";
  return (
    <div className={classes.attribution}>
      Challenge by
      <a href={url} target="_blank" rel="noreferrer">
        Frontend Mentor
      </a>
      . Coded by <a href={url}>Triad</a>.
    </div>
  );
};
export default Attribution;
