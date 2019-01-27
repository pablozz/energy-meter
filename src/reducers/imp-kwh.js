export default function(state = 1000, action) {
  switch (action.type) {
    case "CHANGE_IMP_KWH":
      return action.payload;
    default:
      return state;
  }
}
