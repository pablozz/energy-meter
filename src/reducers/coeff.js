export default function(state = 1, action) {
  switch (action.type) {
    case "CHANGE_COEFF":
      return action.payload;
    default:
      return state;
  }
}
