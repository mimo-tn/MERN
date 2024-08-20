
import React, { useState } from 'react';
import './App.css';
import styles from './components/MyComponent.module.css';
import MyNav from './components/MyNav';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import OneProduct from './components/OneProduct';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Fetch products when the component is mounted
  const fetchProducts = () => {
      axios.get('http://localhost:8000/api/Products/')
          .then(res => {
              setProducts(res.data.Products); 
              setLoaded(true);
          })
          .catch(err => console.error(err));
  };

  // Fetch products on initial render
  React.useEffect(() => {
      fetchProducts();
  }, []);

  return (
      <div className={styles.my_container}>
          <MyNav />
          <Routes>
              <Route path="/products" element={
                  <>
                      <CreateProduct fetchProducts={fetchProducts} />
                      <ProductList products={products} loaded={loaded} />
                  </>
              } />
              <Route path="/products/:id" element={<OneProduct />}/>
          </Routes>
      </div>
  );
}

export default App;
