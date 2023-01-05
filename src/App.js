import { Header, Footer, Main } from './components/index';
import Login from './components/pages/Login/Login';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../src/redux/slices/productSlice';

const App = () => {
   const [orders, setOrders] = useState([]);
   const navigate = useNavigate();
   const [isLoggedIn, setISLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchProduct());
   }, [dispatch]);

   const items = useSelector((state) => state.products.items);

   useEffect(() => {
      if (!isLoggedIn) {
         navigate('/login');
      } else {
         navigate('/');
      }
   }, []);

   const addToOrder = (item) => {
      let isInArray = false;
      orders.forEach((el) => {
         if (el.id === item.id) isInArray = true;
      });

      if (!isInArray) setOrders([...orders, item]);
   };

   const deleteOrder = (title) => {
      setOrders((prev) => prev.filter((el) => el.title !== title));
   };

   return (
      <div className="wrapper">
         <Header
            order={orders}
            onDelete={deleteOrder}
            isLoggedIn={isLoggedIn}
         ></Header>
         <Routes>
            <Route
               path="/login"
               element={<Login setISLoggedIn={setISLoggedIn} />}
            />
            <Route
               path="/"
               element={
                  <Main
                     items={items}
                     onAdd={addToOrder}
                  ></Main>
               }
            />
            <Route
               path="*"
               element={<PageNotFound />}
            />
         </Routes>
         <Footer></Footer>
      </div>
   );
};

export default App;
