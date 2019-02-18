export const switchIsKw = data => {
  return {
    type: "SWITCH_IS_KW",
    payload: data
  };
};

export const switchIsSidebar = data => {
  return {
    type: "SWITCH_IS_SIDEBAR",
    payload: data
  };
};

export const switchIsParamModal = data => {
  return {
    type: "SWITCH_IS_PARAM_MODAL",
    payload: data
  };
};

export const switchIsInfoModal = data => {
  return {
    type: "SWITCH_IS_INFO_MODAL",
    payload: data
  };
};
