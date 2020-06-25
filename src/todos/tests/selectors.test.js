import { expect } from 'chai'
import { getCompletedTodos } from '../selectors'

describe('The getCompletedTodos selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [{
      text: 'Say hello',
      isCompleted: true
    }, {
      text: 'Say goodbye',
      isCompleted: false,
    }, {
      text: 'Crashing car',
      isCompleted: false
    }]

    const expected = [{
      text: 'Say hello',
      isCompleted: true
    }]

    const actual = getCompletedTodos.resultFunc(fakeTodos)

    expect(actual).to.deep.equal(expected)
  })
})