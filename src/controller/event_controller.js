const Event = require("../model/event");

class EventController {
  addEvent(req, res, next) {
    const event = new Event(req.body);
    event
      .save()
      .then((event) => res.status(200).send({ event }))
      .catch((error) =>
        res.status(403).json({
          message: "Loi",
        })
      );
  }

  getAllEvent(req, res, next) {
    Event.find({})
      .then((event) => res.json(event))
      .catch((error) => next(error));
  }
}

module.exports = new EventController();
