class ExpenceController {
  constructor(expenceTable) {
    this.table = expenceTable;
  }

  async getAllExpences(req, res) {
    const allExpences = await this.table.findAll({});
    return res.json(allExpences);
  }

  async getOneExpence(req, res) {
    const { id } = req.params;
    const expence = await this.table.findOne({ where: { id: id } });
    return res.json(expence);
  }

  async createOneExpences(req, res) {
    const { account, time, category, amount, note, description } = req.body;
    const newExpence = await this.table.create({
      account: account,
      time: time,
      category: category,
      amount: amount,
      note: note,
      description: description,
    });
    res.json(newExpence);
  }

  async deleteOneExpence(req, res) {
    const { id } = req.params;
    const deletedExpence = await this.table.destroy({ where: { id: id } });
    return res.json(deletedExpence);
  }
}

module.exports = ExpenceController;
