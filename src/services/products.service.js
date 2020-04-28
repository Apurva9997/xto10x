export const getProducts = () => {
  return fetch('http://demo4603548.mockable.io/products')
    .then(res => res.json())
    .then(response => response)
    ;
}