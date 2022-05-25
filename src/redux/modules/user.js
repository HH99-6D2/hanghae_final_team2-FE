import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//액션 타입
const SETTYPE = "settype";

//액션 생성자
const settype = createAction(SETTYPE, (user) => ({ user }));

const initialState = {
  ctype: null,
};

//리듀서

// export default handleActions(
// {

//     [SETTYPE]:()

// }

// )
