import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Allproducts from './Components/Allproducts';
import GiftItems from './Components/GiftItems';
import HomeDecorItems from './Components/HomeDecorItems';
import KitchenAndDinn from './Components/KitchenAndDinn';
import Jewellery from './Components/JewelleryItems'
import ToysAndEntmn from './Components/ToysAndEntmnt'
import ProductDetail from './Components/ProductDetail';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path='/' element={<Allproducts/>}/>
      <Route path='/all-products' element={<Allproducts/>}/>
      <Route path='/gifts' element={<GiftItems/>}/>
      <Route path='/home-decor' element={<HomeDecorItems/>}/>
      <Route path='/kitchen-dinning' element={<KitchenAndDinn/>}/>
      <Route path='/jewellery' element={<Jewellery/>} />
      <Route path='/toys-entertainment' element={<ToysAndEntmn/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
