import { combineReducers } from "redux";

import resultRows from "./result-rows";
import coeff from "./coeff";
import imp from "./imp";
import impKwh from "./imp-kwh";

const allReducers = combineReducers({
  resultRows: resultRows,
  coeff: coeff,
  imp: imp,
  impKwh: impKwh
});

export default allReducers;
