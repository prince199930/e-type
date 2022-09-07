import React, { useEffect, useState } from 'react'
import './App.css';
import ProductDetails from './component/products/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/home/HomePage';
import axios from 'axios';
import { ProductType } from './types/Products';
function App() {
  const [productName, setProductName] = useState<string>("");
  const [data, setData] = useState<ProductType[]>([]);
  const [final, setFinal] = useState<ProductType[]>([])
  const [visible, setVisible] = useState<boolean>(false)
  const fetchData = async (e:string) => {
      setProductName(e);
      axios('https://fakestoreapi.com/products').then(res => setData(res.data.slice(0,9)))
  }

  const searchProduct = ():void => {
      setFinal(
          data.filter(product =>
              product.title.toLowerCase().includes(productName.toLowerCase()),
          ),
      );
  };

  useEffect(() => {
      searchProduct()
  }, [productName])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage fetchData={fetchData} productName={productName} visible={visible} setVisible={setVisible} />} />
        <Route path='/productDetails' element={<ProductDetails fetchData={fetchData} productName={productName} final={final} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
