const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [
        { model: Product }
      ]
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryById = await Category.findOne({
      where: [
        { id: Category }
      ],
      include: [
        { model: Product }
      ]
    })
    res.status(200).json(categoryById)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
 try{
  const createCategory = await Category.create({
    category_name: [
      { category_name: Category }
    ]
  })
  res.status(200).json(createCategory)
} catch (err) {
  res.status(500).json(err);
}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updateCategory = await Category.update({
      where:[
        { id: Category }
      ]
    })
    res.status(200).json(updateCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCategoryById = await Category.destroy({
      where: [
        { id: Category }
      ]
  })
  res.status(200).json(deleteCategoryById)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
