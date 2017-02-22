import  * as types from '../actions/actionTypes';


const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COURSE: {
      return [...state,
        Object.assign({}, action.course)
      ];
    }

    default: {
      return state;
    }
  }
}
