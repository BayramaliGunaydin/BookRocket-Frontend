const INITIAL_STATE = {
  bookList: [
    {
      bookname: "sad",
      id: 1,
    },
  ],
  searchedBookList: [],
  bookSearchError: "",
  book: {},
  bookPosts: [],
  bookLikes:[],
};

const BookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case "GET_BOOKLIST":
      return {
        ...state,
        bookList: action.payload,
        bookSearchError: "",
        searchedBookList: [],
      };
    case "BOOKS_SEARCH":
      return {
        ...state,
        searchedBookList: action.payload,
        bookSearchError: "",
      };
    case "BOOKS_SEARCH_ERROR":
      return {
        ...state,
        bookSearchError: action.payload,
      };
    case "GET_BOOK":
      return {
        ...state,
        book: action.payload,
      };
    case "GET_BOOK_POSTS":
      return {
        ...state,
        bookPosts: action.payload,
      };
    case "SEND_BOOK_POST":
      return {
        ...state,
        bookPosts: [...state.bookPosts, action.payload],
      };
    case "GET_BOOK_LIKES":
      return {
        ...state,
        bookLikes: action.payload,
      };
    case "ADD_BOOK_LIKE":      
        return{
          ...state,
          bookLikes:[...state.bookLikes,action.payload]
        }
    case "DELETE_BOOK_LIKE":
      console.log("booklikes:",state.bookLikes)         
        return{
          ...state,
          bookLikes:state.bookLikes.filter((like)=>{
            console.log(like.user.id,action.payload.user.id)
            return like.user.id!==action.payload.user.id})
        }
    default:
      return state;
  }
};

export default BookReducer;
