import {fromJS} from "immutable";

export const initialState = fromJS({
  name: 'Keith Li',
  phone: '343-988-3668',
  category: 'Human(maybe Aliens:))',
  commentList: [],
  changeTimes: 0
});

export const reducer = (state, action) => {
  switch (action.type) {
    case 'submitComment':
      // return state.set('commentList',state.get('commentList').push(action.data));
      return state.set('commentList', action.data);
    case 'loadCommentList':
      return state.set('commentList', action.data);
    case 'setChangeTimes':
      return state.set('changeTimes', state.get('changeTimes') + 1);
    default:
      throw new Error();
  }
};