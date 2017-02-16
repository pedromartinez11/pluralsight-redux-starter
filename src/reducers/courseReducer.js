const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_COURSE': {
      return [...state,
        Object.assign({}, action.course)
      ];
    }

    default: {
      return state;
    }
  }
}
