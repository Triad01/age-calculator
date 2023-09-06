import React, { useState, useContext } from "react";
import classes from "./Form.module.scss";
import submitButton from "../assets/images/icon-arrow.svg";
import Context from "./store/Context";

const Form = () => {
  const userAgeContext = useContext(Context);
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const dayChangeHandler = (event) => {
    setFormData((prevData) => {
      return { ...prevData, day: event.target.value };
    });
  };

  const monthChangeHandler = (event) => {
    setFormData((prevData) => {
      return { ...prevData, month: event.target.value };
    });
  };
  const yearChangeHandler = (event) => {
    setFormData((prevData) => {
      return { ...prevData, year: event.target.value };
    });
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    userAgeContext.calcAge(formData);
    setFormData({
      day: "",
      month: "",
      year: "",
    });
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.container}>
        <label htmlFor="day">Day</label>
        <input
          value={formData.day}
          onChange={dayChangeHandler}
          type="text"
          id="day"
          placeholder="DD"
        ></input>
      </div>
      <div className={classes.container}>
        <label htmlFor="month">Month</label>
        <input
          value={formData.month}
          onChange={monthChangeHandler}
          type="text"
          id="month"
          placeholder="MM"
        ></input>
      </div>
      <div className={classes.container}>
        <label htmlFor="year">Year</label>
        <input
          value={formData.year}
          onChange={yearChangeHandler}
          type="text"
          id="year"
          placeholder="YYYY"
        ></input>
      </div>
      <button
        src={submitButton}
        alt="submit button icon"
        className={classes.btn_submit}
      />
    </form>
  );
};
export default React.memo(Form);
