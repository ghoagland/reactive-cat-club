const router = require('express').Router();
const { Cat } = require('../models');

module.exports = router;

//get ALL the cats!
router.get('/', (req, res, next) => {
  Cat.findAll({})
  .then((cats) => {
    res.status(200).json(cats);
  })
  .catch(next);
})

//add a NEW cat
router.post('/new-cat', (req, res, next) => {
  Cat.create(req.body)
  .then((newCat) => {
    res.status(201).json(newCat)
  })
  .catch(next);
})

//get one specific cat
router.get('/:catId', (req, res, next) => {
  Cat.findById(req.params.catId)
  .then((cat) => {
    res.json(cat)
  })
  .catch(next);
})

router.put('/:catId', (req, res, next) => {
  Cat.findById(req.params.catId)
  .then((cat) => {
    return cat.update(req.body)
  })
  .then((updatedCat) => {
    res.json(updatedCat);
  })
  .catch(next);
})


