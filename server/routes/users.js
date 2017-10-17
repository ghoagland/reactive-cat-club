const router = require('express').Router();
const { Cat, User } = require('../models')

module.exports = router

//see all users

router.get('/', (req, res, next) =>   {
  User.findAll({})
  .then((users) => {
    res.json(users)
  })
  .catch(next);
})

//create a user
router.post('/new-user', (req, res, next) => {
  User.create(req.body)
  .then((newUser) => {
    res.json(newUser)
  })
  .catch(next);
})

//get a user
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then((user) => {
    res.json(user)
  })
  .catch(next);
})

//update a user
router.put('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then((user) => {
    return user.update(req.body)
  })
  .then((updatedUser) => {
    res.json(updatedUser);
  })
  .catch(next);
})



//delete a user

router.delete('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then((user) => {
    return user.destroy();
  })
  .then((deletedUser) => {
    res.json(deletedUser)
  })
  .catch(next);
})
