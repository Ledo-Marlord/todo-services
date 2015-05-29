var express = require('express');
var router = express.Router({mergeParams: true}); //not sure if we need mergeParams anymore
var userController = require('../controllers/users');
var listController = require('../controllers/lists');
var itemController = require('../controllers/items');

// User level routes
router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/:uid')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

// List level routes
router.route('/:uid/lists')
    .get(listController.getLists)
    .post(listController.createList);


router.route(':ui/lists/:lid')
    .get(listController.getListsById)
    .put(listController.updateList)
    .delete(listController.deleteList);

// Item level routes
router.route(':ui/lists/:lid/items')
    .get(itemController.getItems)
    .post(itemController.createItem);

router.route(':ui/lists/:lid/items/:iid')
    .get(itemController.getItemById)
    .put(itemController.updateItem)
    .delete(itemController.deleteItem);

module.exports = router;
