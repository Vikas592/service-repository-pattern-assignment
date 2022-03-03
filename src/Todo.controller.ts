import { TodoRequestDto } from './Database'
import { TodoService } from './Todo.service'

// NOTE: Make todoService public and not private. This is required for the tests!
export class TodoController {
  constructor(public readonly todoService: TodoService) {}
  store = (todo: TodoRequestDto) => {
    return this.todoService.createTodo(todo)
  }
}
