// State is not app state, only partial state reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
    default:
      break;
  }
  return state;
}
