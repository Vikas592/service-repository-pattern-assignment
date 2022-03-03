// @ts-nocheck
import Database from './Database'
import { ITodo } from './Database'
import { TodoRepository } from './Todo.repository'

describe('todo repository', () => {
  let todoRepo: TodoRepository = new TodoRepository()

  it('should have access to a database connection', () => {
    expect(todoRepo.db).toBeDefined()
  })

  it('should have a method called createTodo', () => {
    expect(todoRepo.createTodo).toBeDefined()
  })

  it('should call the create method on the database when invoking the createTodo method on todoRepository', async (done) => {
    const spy = jest.spyOn(todoRepo.db, 'create')
    await todoRepo.createTodo({ title: 'Buy groceries' })

    expect(spy).toHaveBeenCalled()
    done()
  })

  it('The createTodo method should return a new todo', async (done) => {
    expect(await todoRepo.createTodo({ title: 'Buy groceries' })).toEqual({
      id: 1,
      title: 'Buy groceries',
    } as ITodo)

    done()
  })

  afterEach(() => {
    Database.clear()
  })
})
