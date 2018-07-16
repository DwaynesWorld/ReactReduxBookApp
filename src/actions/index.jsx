// selctBook is an Action Creator
// it must return an action ->
// a object with type and payload
export function selectBook(book) {
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
