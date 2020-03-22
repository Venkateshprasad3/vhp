import { createStore } from 'redux';
import PostData from './data/data.json';

function PostDetailReducer(state = {PostDetails:[]}, action) {
  switch (action.type) {
    case 'FETCH': {
        return Object.assign(
            {},
            state,
            {
                PostDetails: PostData,
            });
    };
     case 'EDIT': {
        state.PostDetails.forEach((PostData,index) => {
            PostData[index] = action.currentDetail;
        });
        return state;
     }
    default:
      return state
  }
}


let store = createStore(PostDetailReducer);

export default store;