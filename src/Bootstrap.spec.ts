// @ts-nocheck
import { todoController } from './Bootstrap'

describe('Bootstrap Todo Module', () => {
  it('should create a todo and return the full todo', async (done) => {
    const result = await todoController.store({ title: 'Buy groceries' })

    expect(result).toEqual({
      id: 1,
      title: 'Buy groceries',
      completed: false,
    })

    done()
  })
})
