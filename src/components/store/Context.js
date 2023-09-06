import React from "react";

const Context = React.createContext({
  day: 0,
  month: 0,
  year: 0,
  calcAge: (userData) => {},
});

export default Context;
