class TaskController {
  constructor(taskTable) {
    this.table = taskTable;
  }
  async getAllTasks(req, res) {
    const allTasks = await this.table.findAll({
      order: [["id", "DESC"]],
    });
    return res.json(allTasks);
  }

  async createOneTask(req, res) {
    const { name, startedAt, endedAt } = req.body;
    const newTask = await this.table.create({
      name: name,
      startedAt: startedAt,
      endedAt: endedAt,
    });
    return res.json({
      status: 200,
      newTask,
    });
  }

  async deleteOneTask(req, res) {
    const { id } = req.params;
    const deletedTask = await this.table.destroy({ where: { id: id } });
    return res.json(deletedTask);
  }
}

module.exports = TaskController;
