const INITIAL_STATE = {
  bookList: [],
  searchedBookList: [],
  bookSearchError: "",
  book: {},
  bookPosts: [],
  bookLikes:[],
  mostLikedBooks:[],
  mostPostedBooks:[],
  error:""
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
      case "GET_BOOKLIST_ERROR":
      return {
        ...state,
        bookList: [],
        bookSearchError: action.payload,
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
        searchedBookList: [],
        bookSearchError: action.payload,
      };
    case "GET_BOOK":
      return {
        ...state,
        book: action.payload,
      };
    case "BOOK_GET_ERROR":
      return{
      ...state,
      error:action.payload
      } 
    case "GET_BOOK_POSTS":
      return {
        ...state,
        bookPosts: action.payload,
      };
    case "GET_BOOK_POSTS_ERROR":
        return {
          ...state,
          bookPosts: [],
          error:action.payload
        };  
    case "SEND_BOOK_POST":
      return {
        ...state,
        bookPosts: [...state.bookPosts, action.payload],
      };
    case "SEND_BOOK_POST_ERROR":
        return {
          ...state,
          error:action.payload,
        };  
    case "GET_BOOK_LIKES":
      return {
        ...state,
        bookLikes: action.payload,
      };
    case "GET_BOOK_LIKES_ERROR":
        return {
          ...state,
          bookLikes: [],
          error:action.payload
        };  
    case "ADD_BOOK_LIKE":      
        return{
          ...state,
          bookLikes:[...state.bookLikes,action.payload],
        }
    case "ADD_BOOK_LIKE_ERROR":      
        return{
          ...state,
          bookLikes:[...state.bookLikes],
          error:action.payload,
        }   
    case "DELETE_BOOK_LIKE":
      console.log("booklikes:",state.bookLikes)         
        return{
          ...state,
          bookLikes:state.bookLikes.filter((like)=>{
            return like.user.id!==action.payload.user.id}),
        }
    case "DELETE_BOOK_LIKE_ERROR":      
          return{
            ...state,
            error:action.payload
          }
    case "GET_MOST_LIKED_BOOKS":
      return{
        ...state,
        mostLikedBooks:action.payload,
      }
    case "GET_MOST_POSTED_BOOKS":
      return{
        ...state,
        mostPostedBooks:action.payload,
      }
    case "ADD_BOOK_ERROR":
      return{
        ...state,
        error:action.payload
      }              
    case "RESET_BOOK_ERROR":
      return{
        ...state,
        error:""
      }         
    default:
      return state;
  }
};

export default BookReducer;
