const router = require('express').Router();
const { Cat } = require('../models');

module.exports = router;

//get one specific cat
router.get('/cat/:catId', (req, res, next) => {
  Cat.findById(req.params.catId)
  .then((cat) => {
    res.json(cat)
  })
  .catch(next);
})

//get ALL the cats!
router.get('/', (req, res, next) => {
  Cat.findAll({})
  .then((cats) => {
    res.status(200).json(cats);
  })
  .catch(next);
})

router.post('/cat', (req, res, next) => {
  Cat.create(req.body)
  .then((newCat) => {
    res.status(201).json(newCat)
  })
  .catch(next);
})

