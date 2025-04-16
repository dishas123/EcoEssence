import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductList from './components/productList';
import Header from './components/header';
import Donate from './components/Donate';
import Rewards from './components/Rewards';
import Blogs from './components/Blogs';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import RecommendedItems from './components/RecommendedItems';
import Activities from './components/Activities';
import FAQs from './components/faqs';
import Login from './components/Login';
import Signup from './components/Signup';


import './App.css';

import CustomItemContext from './context/itemContext';

const App = () => {
    return (
        <CustomItemContext>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/recommended-items" element={<RecommendedItems />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/signup" element={<Signup />} />
                    
                </Routes>
            </Router>
        </CustomItemContext>
    );
};

export default App;