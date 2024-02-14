class TodoController {
  constructor(todoTable) {
    this.table = todoTable;
  }

  async getAllTodos(req, res) {
    const allTodos = await this.table.findAll({
      order: [["id", "DESC"]],
    });
    return res.json(allTodos);
  }

  async getOneTodo(req, res) {
    const { id } = req.params;
    const todo = await this.table.findOne({ where: { id: id } });
    return res.json(todo);
  }

  async createOneTodo(req, res) {
    const { name } = req.body;
    const newTodo = await this.table.create({
      name: name,
    });
    return res.json({
      status: 200,
      newTodo,
    });
  }

  async deleteOneTodo(req, res) {
    const { id } = req.params;
    const deletedTodo = await this.table.destroy({ where: { id: id } });
    return res.json(deletedTodo);
  }
}

module.exports = TodoController;
