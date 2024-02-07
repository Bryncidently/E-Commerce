const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint



router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [
      { model: Product, required: true }
    ], 
  }); 
  res.json(categories);  
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = await Category.findOne({ where: { id: req.params.id } }, {
    include: [
      { model: Product, required: true }
    ], 
  });
  res.json(id);
});

router.post('/', async (req, res) => {
  // create a new category
  const newCat = await Category.create(req.body);
  res.json(newCat);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const newId = await Category.update(req.body , {
    where: {
      id: req.params.id
    }
  });
  res.json(newId);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const bye = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(bye);
});

module.exports = router;






