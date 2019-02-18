export default function(state = false, action) {
  switch (action.type) {
    case "SWITCH_IS_SIDEBAR":
      return action.payload;
    default:
      return state;
  }
}
