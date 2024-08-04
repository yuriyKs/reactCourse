const initialState = []

function reducer(state, action) {
  //   if (action.type === 'ADD_NAME') {
  //     return [...state, action.payload]
  //   }
  //   if (action.type === 'DELETE_NAME') {
  //     return state.filter((e) => e !== action.payload)
  //   }
  //   if (action.type === 'CLEAR_NAME') {
  //     return []
  //   }
  //   return state

  switch (action.type) {
    case action.type === 'ADD_NAME':
      return [...state, action.payload]
    case action.type === 'DELETE_NAME':
      return state.filter((e) => e !== action.payload)
    case action.type === 'CLEAR_NAME':
      return []
    default:
      return state
  }
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'TEST_add' })

newState = reducer(newState, { type: 'ADD_NAME', payload: 'TEST_add2222' })

newState = reducer(newState, { type: 'ADD_NAME', payload: 'TEST_add222223' })

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'TEST_add2222' })

newState = reducer(newState, { type: 'CLEAR_NAME' })

newState = reducer(newState, { type: 'ADD_NAME', payload: 'TEST_add2222' })
newState = reducer(newState, { type: 'ADD_NAME', payload: 'TEST_add2ww' })
newState = reducer(newState, { type: 'DELETE_NAME', payload: 'TEST_add2ww' })

console.log(newState)
