export const CREATE_TODO = 'CREATE_TODO'

// Action creator
export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text }
})

export const REMOVE_TODO = 'REMOVE_TODO'

// Action creator
export const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: { text }
})