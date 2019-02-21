export default function(state = 230, action) {
  switch (action.type) {
    case "CHANGE_VOLTAGE":
      return action.payload;
    default:
      return state;
  }
}
