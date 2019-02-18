export default function(state = 0.98, action) {
  switch (action.type) {
    case "CHANGE_COSF":
      return action.payload;
    default:
      return state;
  }
}
