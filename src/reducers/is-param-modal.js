export default function(state = false, action) {
  switch (action.type) {
    case "SWITCH_IS_PARAM_MODAL":
      return action.payload;
    default:
      return state;
  }
}
