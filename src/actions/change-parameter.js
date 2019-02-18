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
    case "voltageInput":
      return {
        type: "CHANGE_VOLTAGE",
        payload: data
      };
    case "cosfInput":
      return {
        type: "CHANGE_COSF",
        payload: data
      };
    default:
      break;
  }
};
