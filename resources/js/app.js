/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import moment from 'moment';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Products />} />
                    <Route path="/products" exact element={<Products />} />
                    <Route path="/products/:id" exact element={<ProductDetail />} />
                </Routes>
            </Layout>
        </Router>

        
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
