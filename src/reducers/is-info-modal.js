export default function(state = false, action) {
  switch (action.type) {
    case "SWITCH_IS_INFO_MODAL":
      return action.payload;
    default:
      return state;
  }
}
