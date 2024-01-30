const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [
      { model: Product, required: true }
    ], 
  }); 
  res.json(tags);  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const id = await Tag.findOne({ where: { id: req.params.id } }, {
    include: [
      { model: Product, required: true }
    ], 
  });
  res.json(id);
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body);
  res.json(newTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const newId = await Tag.update(req.body , {
    where: {
      id: req.params.id
    }
  });
  res.json(newId);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const bye = await Tag.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(bye);
});

module.exports = router;
