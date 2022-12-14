const Hotel = require("../model/hotel");

class HotelController {
  //Lay all danh sach Hotel
  getAllHotels(req, res, next) {
    Hotel.find({})
      .then((hotel) => res.json(hotel))
      .catch((error) => next(error));
  }

  //Lay chi tiet mot hotel
  getHotel(req, res, next) {
    Hotel.findOne({ id: req.params.id })
      .then((hotel) => res.json(hotel))
      .catch((error) => res.status(400).json({ message: "Access denied" }));
  }

  // Them hotel
  insertHotel(req, res, next) {
    const hotel = new Hotel(req.body);
    hotel
      .save()
      .then((hotel) => res.status(200).send({ hotel }))
      .catch((error) =>
        res.status(403).json({
          message: "Loi",
        })
      );
  }

  //xoa Hotel
  deleteHotel(req, res, next) {
    Hotel.deleteOne({ id: req.params.id })
      .then(() => res.status(200).send({ status: 1, message: "Success" }))
      .catch((error) => res.status(400).json({ message: "Error" }));
  }
  updateHotel(req, res, next) {
    Hotel.updateOne({ id: req.body.id }, { $set: {} })
      .then((hotel) => res.status(200).send({ hotel }))
      .catch((error) =>
        res.status(403).json({
          message: "Loi",
        })
      );
  }
}

module.exports = new HotelController();
