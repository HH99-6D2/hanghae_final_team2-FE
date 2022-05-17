import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { imageCreators } from './image';
import api from "../../shared/axios";

//actions
const CREATE_CHAT = "CREATE_CHAT";
const GET_CHAT = "GET_CHAT";
const LIKE_CHAT = "LIKE_CHAT";

//action creators
const likeChat = createAction(LIKE_CHAT, (like) => ({ like }));

const initialState = {
  user: null,
};

//thunk functions
export const likeChatMW = (roomId) => {
  return function (dispatch, getState, { history }) {
    api
      .likeChatAX(roomId)
      .then(() => {
        dispatch(likeChat(roomId));
        window.location.replace(`/cateChatList/${roomId}`);
      })
      .catch((err) => {
        console.log(err, "좋아요 err");
      });
  };
};

//reducer
export default handleActions(
  {
    [LIKE_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.like.push(action.payload.like);
      }),
  },
  initialState
);

const chatActions = {
  likeChatMW,
};

export { chatActions };
