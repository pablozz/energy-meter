import { combineReducers } from "redux";

import resultRows from "./result-rows";
import coeff from "./coeff";
import imp from "./imp";
import impKwh from "./imp-kwh";
import isKw from "./is-kw";
import isSidebar from "./is-sidebar";
import isParamModal from "./is-param-modal";
import voltage from "./voltage";
import cosf from "./cosf";
import isInfoModal from "./is-info-modal";

const allReducers = combineReducers({
  resultRows: resultRows,
  coeff: coeff,
  imp: imp,
  impKwh: impKwh,
  isKw: isKw,
  isSidebar: isSidebar,
  isParamModal: isParamModal,
  voltage: voltage,
  cosf: cosf,
  isInfoModal: isInfoModal
});

export default allReducers;
