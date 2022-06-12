/* eslint-disable no-unused-vars */
import { CssBaseline } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./home.css";
import CategoryList from "../../components/CategoryList/CategoryList";
import { Navbar, Products, Slides } from "../../components";
import { commerce } from "../../lib/commerce";



const Home = ({ totalItems }) => {
    console.log( totalItems );
    const [ mobileOpen, setMobileOpen ] = React.useState( false );
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState({});
    const [ order, setOrder ] = useState({});
    const [ errorMessage, setErrorMessage ] = useState( "" );

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts( data );
    };


    const fetchCart = async () => {
        setCart( await commerce.cart.retrieve());
    };

    const handleAddToCart = async ( productId, quantity ) => {
        const item = await commerce.cart.add( productId, quantity );

        setCart( item.cart );
    };

    const handleUpdateCartQty = async ( lineItemId, quantity ) => {
        const response = await commerce.cart.update( lineItemId, { quantity });

        setCart( response.cart );
    };

    const handleRemoveFromCart = async ( lineItemId ) => {
        const response = await commerce.cart.remove( lineItemId );

        setCart( response.cart );
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart( response.cart );
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart( newCart );
    };

    const handleCaptureCheckout = async ( checkoutTokenId, newOrder ) => {
        try {
            const incomingOrder = await commerce.checkout.capture( checkoutTokenId, newOrder );

            setOrder( incomingOrder );

            refreshCart();
        } catch ( error ) {
            setErrorMessage( error.data.error.message );
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const handleDrawerToggle = () => setMobileOpen( !mobileOpen );

    return (
        <div style={{}}>
            <div className="flex flex-wrap">
                <div className="flex-none w-1/5 h-14">
                    <CategoryList style={{ position: "relative", top: "-146px" }} />

                </div>
                <div style={{ height: "451px", padding: "41px" }} className="flex-initial  w-7/12">

                    <Slides />
                </div>
                <div className="flex-initial w-1/5">
                    <CategoryList style={{ position: "relative", top: "-146px" }} />
                </div>
                <div className="flex-initial w-full">

                    <section className="text-gray-700 body-font">
                        <div className="container px-5 py-24 mx-auto">

                            <div className="flex flex-wrap -m-4 text-center">
                                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                            <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                        <p className="leading-relaxed">Downloads</p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                                        <p className="leading-relaxed">Users</p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                                        <p className="leading-relaxed">Files</p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                                        <p className="leading-relaxed">Places</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Products  products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />

            </div>

        </div>
    );
};

export default Home;
