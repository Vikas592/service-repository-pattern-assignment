// @ts-nocheck
import { TodoController } from './Todo.controller'

class MockedTodoService {
  public readonly todoRepo: any
  async createTodo(data: any) {
    return data
  }
}

describe('Todo Controller', () => {
  let todoController = new TodoController(new MockedTodoService())

  it('should have access to the todo service', () => {
    expect(todoController.todoService).toBeDefined()
  })

  it('Should have a method called store', () => {
    expect(todoController.store).toBeDefined()
  })

  it('Should make a call to todoService.createTodo', async (done) => {
    const spy = jest.spyOn(todoController.todoService, 'createTodo')
    await todoController.store({ title: 'Buy groceries' })

    expect(spy).toHaveBeenCalled()
    done()
  })

  it('Should return a todo with the name Buy groceries', async (done) => {
    const result = await todoController.store({ title: 'Buy groceries' })
    const result2 = await todoController.store({ title: 'pay bills' })

    expect(result.title).toBe('Buy groceries')
    expect(result2.title).toBe('pay bills')
    done()
  })
})
