const  EDIT_FIELD = 'edit-field'

function reducer(state, action) {
  switch(action.type) {
    case EDIT_FIELD: {
      const {exercise, day, value: newValue} = action.payload
      
      return {
        ...state,
        [day]: {
          ...state[day],
          [exercise]: newValue
        }
      }
    }
    default:
      return state
  }
}


export const editField = (day, exercise, value) => {

  return {
    type: EDIT_FIELD,
    payload: {
      day,
      exercise,
      value,
    }
  }
}
export default reducer