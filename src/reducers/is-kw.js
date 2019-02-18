export default function(state = true, action) {
  switch (action.type) {
    case "SWITCH_IS_KW":
      return action.payload;
    default:
      return state;
  }
}
