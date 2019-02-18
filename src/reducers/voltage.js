export default function(state = 235, action) {
  switch (action.type) {
    case "CHANGE_VOLTAGE":
      return action.payload;
    default:
      return state;
  }
}
