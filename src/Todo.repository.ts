import Database, { TodoRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class TodoRepository {
  public readonly db = Database

  createTodo = (todo: TodoRequestDto) => {
    if (todo.hasOwnProperty('title')) return this.db.create(todo)
  }
}
