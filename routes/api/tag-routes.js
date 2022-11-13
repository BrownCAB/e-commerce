const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        { model: Product, through: ProductTag }
      ]
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await tag.findOne({
      include: [
        { model: Product, through: ProductTag }
      ]
    })
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const createTag = await Tag.create({
      tag_name:[
        {requirement: Tag}
      ]
    })
    res.status(200).json(createTag)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updateTag = await Tag.update({
      where:[
        {id: Tag}
      ]
    })
    res.status(200).json(updateTag)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deleteTagById = await Tag.destroy({
      where: [
        { model: Tag }
      ]
  })
  res.status(200).json(deleteTagById)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
