const express = require('express')
const routes = express.Router()
const HotelController = require('../controller/hotel_controller')
const FoodStoreController = require('../controller/FoodStoreController')
const PostController = require('../controller/post_controller')

routes.post('/foodstore/create', FoodStoreController.Add);//tạo mới cửa hàng ăn uống
routes.get('/foodstore', FoodStoreController.All)
routes.post('/foodstore/delete/:id', FoodStoreController.Delete)
routes.put('/foodstore/update', FoodStoreController.Update)

routes.post('/post/create', PostController.Add);
routes.get('/posts', PostController.All);
routes.post('/post/delete/:id', FoodStoreController.Delete)
routes.put('/post/update', PostController.Update)

module.exports = routes;