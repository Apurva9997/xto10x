export const extractCategories = (products) => {
  let categories = [];
  products && products.length && products.map(product => {
    if (product.category && categories.indexOf(product.category) === -1)
      categories.push(product.category)
  });
  return categories;
}