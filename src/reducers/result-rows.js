export default function(state = [], action) {
  switch (action.type) {
    case "ADD_RESULT_ROW":
      return action.payload;
    default:
      return state;
  }
}
