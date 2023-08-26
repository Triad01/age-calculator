import classes from "./Form.module.scss";
import submitButton from "../assets/images/icon-arrow.svg";

const Form = () => {
  return (
    <form className={classes.form}>
      <div className={classes.container}>
        <label htmlFor="day">Day</label>
        <input type="text" id="day" placeholder="DD"></input>
      </div>
      <div className={classes.container}>
        <label htmlFor="month">Month</label>
        <input type="text" id="month" placeholder="MM"></input>
      </div>
      <div className={classes.container}>
        <label htmlFor="year">Year</label>
        <input type="text" id="year" placeholder="YYYY"></input>
      </div>
      <img
        src={submitButton}
        alt="submit button icon"
        className={classes.btn_submit}
      />
    </form>
  );
};
export default Form;
