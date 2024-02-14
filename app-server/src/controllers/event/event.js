class EventController {
  constructor(eventTable) {
    this.table = eventTable;
  }
  async getAllEvents(req, res) {
    const allEvents = await this.table.findAll({});
    return res.json(allEvents);
  }
  async createOneEvent(req, res) {
    const { name, time } = req.body;
    const newEvent = await this.table.create({
      name: name,
      time: time,
    });
    return res.json({
      status: 200,
      newEvent,
    });
  }
  async deleteEvent(req, res) {
    const { id } = req.params;
    const deletedEvent = await this.table.destroy({ where: { id: id } });
    return res.send("deleted");
  }
}

module.exports = EventController;
