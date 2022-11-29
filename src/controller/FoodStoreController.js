const foodStore = require('../model/food_store')

class FoodStoreController {
    Add(req, res, next){
        const store = new foodStore(req.body);
        store.save().then((store) => res.status(200).send({store})).catch((error) => res.status(403).json({
            message: "Error"
        }))
    }
    All(req, res, next) {
        foodStore.find({}).then((data) => res.json(data)).catch((error) => res.status(400).json({message: "cc"}))
    }
    Delete(req, res, next) {
        foodStore.deleteOne({id: req.params.id}).then(() => res.status(200).send({status: 1, message: "Deleted"})).catch((error) => res.status(400).json({message: "Failed to delete"}))
    }
    Update(req, res, next) {
        foodStore.updateOne({id: req.body.id}, {$set: {name: req.body.name}}).then((data) => res.status(200).json(data)).catch((error) => res.status(400).json({message: "cc"}))
    }
}

module.exports = new FoodStoreController()