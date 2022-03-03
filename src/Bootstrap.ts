import 'dotenv/config'

import { TodoRepository } from './Todo.repository'
import { TodoService } from './Todo.service'
import { TodoController } from './Todo.controller'

/* --- Do this as last! --- */

// NOTE: Make sure to do a named export of your todoController
const todoController = new TodoController(new TodoService(new TodoRepository()))
export { todoController }