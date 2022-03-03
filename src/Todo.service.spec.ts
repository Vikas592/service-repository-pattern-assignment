// @ts-nocheck
import Database from './Database'

import { TodoRepository } from './Todo.repository'
import { TodoService } from './Todo.service'

describe('Todo service', () => {
  let todoService = new TodoService(new TodoRepository())

  it('Should have access to the todo repository', () => {
    expect(todoService.todoRepo).toBeDefined()
  })

  it('Should have a method called createTodo', () => {
    expect(todoService.createTodo).toBeDefined()
  })

  it('should call the createTodo method on the todoRepository when the createTodo method on the service gets invoked', async (done) => {
    const spy = jest.spyOn(todoService.todoRepo, 'createTodo')
    await todoService.createTodo({ title: 'Buy groceries' })

    expect(spy).toHaveBeenCalled()
    done()
  })

  it('Should return a created todo', async (done) => {
    const createdTodo = await todoService.createTodo({ title: 'Buy groceries' })
    const createdTodo2 = await todoService.createTodo({ title: 'pay bills' })

    expect(createdTodo).toEqual({
      id: 1,
      title: 'Buy groceries',
      completed: false,
    })

    expect(createdTodo2).toEqual({
      id: 2,
      title: 'pay bills',
      completed: false,
    })

    done()
  })

  afterEach(() => {
    Database.clear()
  })
})
