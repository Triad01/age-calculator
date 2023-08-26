import classes from "./Display.module.scss";
// import displayIcon from "../assets/images/icon-arrow.svg";

const Display = () => {
  return (
    <div>
      <div className={classes.display}>
        {/* <img className={classes.icon} src={displayIcon} alt="display icon" /> */}
        <div>
          <i>
            <span>38</span>years
          </i>
        </div>
        <div>
          <i>
            <span>--</span>months
          </i>
        </div>
        <div>
          <i>
            <span>--</span>days
          </i>
        </div>
      </div>
    </div>
  );
};
export default Display;
