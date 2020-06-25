import { expect } from 'chai'
import { todos, initialState } from '../reducers'

describe('The todos reducer', () => {
  it('Adds a new todo when CREATE_TODO action is received', () => {
    const fakeTodo = { text: 'hello', isCompleted: false }
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: {
        todo: fakeTodo
      }
    }

    const expected = {
      isLoading: false,
      data: [fakeTodo]
    }
    const actual = todos(initialState, fakeAction)

    expect(actual).to.deep.equal(expected)
  })
})