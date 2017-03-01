import  * as types from '../actions/actionTypes';


const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COURSE_SUCCESS: {
      return action.courses;
    }

    default: {
      return state;
    }
  }
}
