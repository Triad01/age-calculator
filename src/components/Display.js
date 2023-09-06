import classes from "./Display.module.scss";
import React, { useContext } from "react";
import Context from "./store/Context";

const Display = () => {
  const userAgeContext = useContext(Context);
  const day = userAgeContext.day;
  const month = userAgeContext.month;
  const year = userAgeContext.year;

  return (
    <div>
      <div className={classes.display}>
        <div>
          <i>
            <span>{year}</span>years
          </i>
        </div>
        <div>
          <i>
            <span>{month}</span>months
          </i>
        </div>
        <div>
          <i>
            <span>{day}</span>days
          </i>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Display);
