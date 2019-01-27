export const changeParameter = (type, data) => {
  switch (type) {
    case "coeffInput":
      return {
        type: "CHANGE_COEFF",
        payload: data
      };
    case "impInput":
      return {
        type: "CHANGE_IMP",
        payload: data
      };
    case "impKwhInput":
      return {
        type: "CHANGE_IMP_KWH",
        payload: data
      };
    default:
      break;
  }
};
