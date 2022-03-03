import { TodoRequestDto } from './Database'
import { TodoRepository } from './Todo.repository'

// NOTE: Make todoRepo public and not private. This is required for the tests!
export class TodoService {
  constructor(public readonly todoRepo: TodoRepository) {}

  createTodo = (todo: any) => {
    if (todo.hasOwnProperty('title')) {
      if (!todo.hasOwnProperty('completed')) {
        todo.completed = false
      }
      return this.todoRepo.createTodo(todo)
    } else throw new Error('Todo title is required!')
  }
}
