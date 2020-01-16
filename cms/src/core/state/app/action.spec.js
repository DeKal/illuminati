import { addTodo } from 'core/state/app/action'
import { ADD_TODO } from 'core/const/actionType'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: ADD_TODO,
      text
    }
    expect(addTodo(text)).toEqual(expectedAction)
  })
})
