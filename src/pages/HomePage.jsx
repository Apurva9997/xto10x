import React from 'react';
import FiltersCard from '../components/FilterCard/FilterCard';
import ProductCard from '../components/ProductCard/ProductCard';
import { getProducts } from '../services/products.service.js';
import { extractCategories } from '../utils/category.utils';
import './styles.scss';

class Home extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
    selectedCategory: 'all'
  }
  componentDidMount() {
    getProducts()
      .then(response => {
        console.log(response, response.products)
        this.setState({
          products: response.products
          // products: []
        });
      })
  }
  handleFilterCategory = (category) => {
    const FilteredProducts = this.state.products.filter(product => {
      return product.category === category
    });
    this.setState({
      filteredProducts: FilteredProducts,
      selectedCategory: category
    });
  }
  render() {
    let PRODUCTS = [];
    if (this.state.products && this.state.products.length && this.state.selectedCategory === 'all') {
      PRODUCTS = this.state.products.map(product => {
        return <ProductCard data={product} />
      })
    }
    else {
      PRODUCTS = this.state.filteredProducts.map(product => {
        return <ProductCard data={product} />
      })
    }
    const CATEGORIES = extractCategories(this.state.products);
    console.log("CATEGORIES", CATEGORIES);
    return <div>
      Home
      <FiltersCard CATEGORIES={CATEGORIES} selectedCategory={this.state.selectedCategory} handleFilterCategory={this.handleFilterCategory} />
      <div class="products-container">
        {PRODUCTS}
      </div>
    </div>
  }
}

export default Home;