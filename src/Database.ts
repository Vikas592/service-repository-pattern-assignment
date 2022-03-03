export interface ITodo {
    id: number
    title: string
    completed: boolean
  }
  
  export interface TodoRequestDto {
    title: string
    completed: boolean
  }
  
  export interface IDatabaseState {
    todos: ITodo[]
  }
  
  class Database {
    private state: IDatabaseState = {
      todos: [],
    }
  
    /**
     *   @description Creates a new Todo with the given data
     */
    async create(todo: Omit<ITodo, 'id'>) {
      if (!todo) {
        throw new Error('Missing tododata')
      }
  
      const createdTodo = {
        id: this.state.todos.length + 1,
        ...todo,
      }
  
      this.state.todos.push(createdTodo)
  
      return createdTodo
    }
  
    /**
     *
     * @description returns all the current todos
     *
     */
    async all() {
      return this.state.todos
    }
  
    public clear() {
      this.state.todos = []
    }
  }
  
  export default new Database()
  