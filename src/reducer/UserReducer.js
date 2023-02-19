const INITIAL_STATE = {
  currentUserPosts: [],
  currentUserLikes: [],
  friendList:[],
  books: [],
  user:{},
  posts:[],
  likes:[],
  searchedUsers:[],
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER_POST_LIST":
      return {
        ...state,
        currentUserPosts: action.payload,
      };
    case "GET_CURRENT_USER_LIKE_LIST":
      return {
        ...state,
        currentUserLikes: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        user:action.payload,
      };
      case "GET_USER_POST_LIST":
      return {
        ...state,
        posts: action.payload,
      };
      case "GET_USER_LIKE_LIST":
      return {
        ...state,
        likes: action.payload,
      };
      case "GET_USER_FRIENDS":
      return {
        ...state,
        friendList:action.payload,
      };
      case "SEARCH_USER":
        return {
          ...state,
          searchedUsers:action.payload,
        }
    default:
      return state;
  }
};

export default UserReducer;
