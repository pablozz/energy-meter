export default function(state = 1, action) {
  switch (action.type) {
    case "CHANGE_IMP":
      return action.payload;
    default:
      return state;
  }
}
