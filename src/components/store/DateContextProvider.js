import React, { useReducer } from "react";
import Context from "./Context";

const defaultValues = {
  day: 0,
  month: 0,
  year: 0,
};

const userReducerFunction = (action, state) => {
  if (action.type === "CALC") {
    return {
      day: action.userData.day,
      month: action.userData.month,
      year: action.userData.year,
    };
  } else {
    return state;
  }
};

const DateContextProvider = (props) => {
  const [initialValues, dispatchAction] = useReducer(
    userReducerFunction,
    defaultValues
  );

  const calcAgeHandler = (userData) => {
    dispatchAction({ type: "CALC", userData });
  };

  const contextValues = {
    day: initialValues.day,
    month: initialValues.month,
    year: initialValues.year,
    calcAge: calcAgeHandler,
  };
  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};

export default React.memo(DateContextProvider);
