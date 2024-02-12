class HabitController {
  constructor(habitTable) {
    this.table = habitTable;
  }
  async getAllHabits(req, res) {
    const allHabits = await this.table.findAll({});
    return res.json(allHabits);
  }
  async createOneHabit(req, res) {
    const { name } = req.body;
    const newHabit = await this.table.create({
      name: name,
    });
    return res.json({
      status: 200,
      newHabit,
    });
  }
}

module.exports = HabitController;
