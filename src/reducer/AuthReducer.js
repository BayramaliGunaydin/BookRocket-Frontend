
const INITIAL_STATE = {
  isLogged: false,
  token: "",
  user: {},
  friendList:[],
  friendRequests:[],
  sendedFriendRequests:[],
  notification: 0,
  userBooks:[],
  userChats:[],
  chatMessages:[],
  chatingUser:{},
  currentChat:{},
  role:"",
  error:"",
  positiveAlert:"",
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogged: true,
        user: action.payload,
        role:action.payload.role.rolename,
        token: action.payload.token,
      };
      case "LOGIN_ERROR":
        return {
          error:action.payload
        };  
    case "NOTIFICATION_COUNT":
      return{
        ...state,
        notification:state?.friendRequests?.length,
      } 
    case "REGISTER":
      return {
        isLogged: true,
        user: action.payload,
        role:action.payload.role.rolename,
        token: action.payload.token,
      };
    case "LOGOUT":       
      return {
        isLogged: false,
        token: "",
        user: {},
        friendList:[],
        friendRequests:[],
        sendedFriendRequests:[],
        notification: 0,
        userBooks:[],
        userChats:[],
        chatMessages:[],
        chatingUser:{},
        currentChat:{},
        error:"",
        positiveAlert:"",
      };
    case "SET_USER_IMAGE":
      return{
        ...state,
        user:{...state.user,pic:action.payload},
        positiveAlert:"Profil Resmi Değiştirildi"
      };
      case "SET_USER_IMAGE_ERROR":
        return{
          ...state,
          user:{...state.user,pic:action.payload},
          error:action.payload.message
        };  
    case "GET_CUSER_FRIENDS":
      return{
        ...state,
        friendList:action.payload
      } 
    case "GET_USER_FRIEND_REQUESTS":
      return{
        ...state,
        friendRequests:action.payload,
        notification:action.payload.length
      }
    case "GET_USER_FRIEND_REQUESTS_ACCEPT":
      return{
        ...state,
        friendRequests:state.friendRequests.filter(request=>request.id!==action.payload.id),
        friendList:[...state.friendList,action.payload],
        positiveAlert:"Arkadaşlık İsteği Kabul Edildi"
      }
      case "GET_USER_FRIEND_REQUESTS_REJECT":
        return{
          ...state,
          friendRequests:state.friendRequests.filter(request=>request.id!==action.payload.id),
          positiveAlert:"Arkadaşlık İsteği Reddedildi"
        }
      case "DELETE_FRIENDSHIP":
        return{
          ...state,
          friendList:state.friendList.filter(friend=>friend.id!==action.payload),
          positiveAlert:"Kullanıcı Arkadaşlıktan Çıkartıldı"
        }  
         case "GET_SENDED_FRIEND_REQUESTS":
        return{
          ...state,
          sendedFriendRequests:action.payload,
        }  
        case "SEND_FRIEND_REQUEST":
        return{
          ...state,
          sendedFriendRequests:[...state.sendedFriendRequests,action.payload],
          positiveAlert:"Arkadaşlık İsteği Gönderildi"
        }
        case "CANCEL_FRIEND_REQUEST":
        return{
          ...state,
          sendedFriendRequests:state.sendedFriendRequests.filter(sendedRequest=>sendedRequest.id!==action.payload),
          positiveAlert:"Arkadaşlık İsteği İptal Edildi"
        }
        case "ADD_BOOK":
          return{
            ...state,
           // userBooks:[...state.userBooks,action.payload],
            positiveAlert:"Kitap eklendi"
          }
        case "SET_EDITOR":
          return{
            ...state,
            user:{...state.user,role:{id:3,rolename:"EDITOR"}},
            role:"EDITOR",
            positiveAlert:"Editör Oldunuz"
          } 
        case "GET_USER_CHATS":
          return{
            ...state,
            userChats:action.payload,
          }
        case "GET_CHAT_MESSAGES":
          return{
            ...state,
            chatMessages:action.payload,
          }  
        case "SET_CHATING_USER":
          return{
            ...state,
            chatingUser:action.payload.user,
            currentChat:action.payload.chat
          }
        case "SEND_MESSAGE":
          return{
          ...state,
          chatMessages:[...state.chatMessages,action.payload],
          error:""
          }
          case "SEND_MESSAGE_ERROR":
            return{
            ...state,
            error:action.payload.message,
            }  
          case "CLEAR_MESSAGES":
            return{
            ...state,
            chatMessages:[]
            }
      case "CREATE_CHAT":
        return{
          ...state,
          currentChat:action.payload,
        }
        case "CREATE_CHAT_ERROR":
        return{
          ...state,
          currentChat:action.payload,
          error:action.payload.message
        }          
     case "RESET_AUTH_ERROR":
      return{
        ...state,
        error:""
      }
      case "RESET_POSITIVE_ALERT":
      return{
        ...state,
        positiveAlert:""
      }         
                  
    default:
      return state;
  }
};

export default AuthReducer;
